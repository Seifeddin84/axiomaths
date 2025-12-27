#!/usr/bin/env python3
"""
Exercise Generator for Axiomaths
Automatically generates exercise markdown files with proper structure and numbering.
"""

import os
import re
from pathlib import Path

# Configuration
EXERCISES_DIR = Path("exercises")
STARTING_UID = 8  # Start from 0000008 if no exercises exist


def get_next_uid():
    """Find the highest UID in existing exercises and return the next one."""
    if not EXERCISES_DIR.exists():
        EXERCISES_DIR.mkdir(parents=True, exist_ok=True)
        return STARTING_UID
    
    max_uid = STARTING_UID - 1
    
    # Scan all markdown files in exercises directory
    for file in EXERCISES_DIR.glob("*.md"):
        # Extract UID from filename (pattern: *-0000XXX.md)
        match = re.search(r'-(\d{7})\.md$', file.name)
        if match:
            uid = int(match.group(1))
            max_uid = max(max_uid, uid)
    
    return max_uid + 1


def slugify(text):
    """Convert text to URL-friendly slug."""
    # Convert to lowercase
    slug = text.lower()
    # Replace spaces and special chars with hyphens
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')


def prompt_field(field_name, options=None, default="", required=True):
    """Prompt user for a field value with optional validation."""
    if options:
        print(f"\n{field_name} - Options: {', '.join(options)}")
        while True:
            value = input(f"{field_name}: ").strip() or default
            if value in options or not required:
                return value
            print(f"Invalid option. Choose from: {', '.join(options)}")
    else:
        prompt = f"{field_name}"
        if default:
            prompt += f" (default: {default})"
        prompt += ": "
        
        value = input(prompt).strip() or default
        
        if required and not value:
            print(f"{field_name} is required!")
            return prompt_field(field_name, options, default, required)
        
        return value


def prompt_tags():
    """Prompt for tags (comma-separated)."""
    print("\nTags (comma-separated, e.g., 'équation, paramètre')")
    tags_input = input("Tags: ").strip()
    if not tags_input:
        return []
    
    # Split by comma and clean up
    tags = [tag.strip() for tag in tags_input.split(',') if tag.strip()]
    return tags


def generate_filename(school, level, section, chapter, uid):
    """Generate the filename based on exercise metadata."""
    # Create chapter slug
    chapter_slug = slugify(chapter)
    
    # Format UID with leading zeros
    uid_str = str(uid).zfill(7)
    
    # Build filename based on school type
    if school == 'college':
        # College doesn't have sections
        filename = f"college-{level}-{chapter_slug}-{uid_str}.md"
    else:
        # Lycee has sections
        filename = f"lycee-{level}-{section}-{chapter_slug}-{uid_str}.md"
    
    return filename


def create_exercise_file():
    """Main function to create an exercise file."""
    print("=" * 60)
    print("AXIOMATHS EXERCISE GENERATOR")
    print("=" * 60)
    
    # Get next UID
    uid = get_next_uid()
    uid_str = str(uid).zfill(7)
    print(f"\n📝 Creating exercise #{uid_str}")
    
    # Prompt for metadata
    print("\n--- EXERCISE METADATA ---")
    
    school = prompt_field(
        "School",
        options=["college", "lycee"]
    )
    
    if school == "college":
        level = prompt_field(
            "Level",
            options=["7eme", "8eme", "9eme"]
        )
        section = None  # College doesn't have sections
    else:
        level = prompt_field(
            "Level",
            options=["1ere", "2eme", "3eme", "4eme"]
        )
        section = prompt_field(
            "Section",
            options=["sciences", "maths", "lettres", "economie-et-services", "sport", "informatique", "technique", "sciences-experimentales"]
        )
    
    chapter = prompt_field("Chapter", required=True)
    source = prompt_field("Source", required=True)
    title = prompt_field("Title", required=False)
    country = prompt_field("Country", default="Tunisie")
    
    # Year (optional, can be empty)
    year_input = prompt_field("Year", required=False)
    year = int(year_input) if year_input.isdigit() else None
    
    professor = prompt_field("Professor", required=False)
    
    difficulty = prompt_field(
        "Difficulty",
        options=["Facile", "Moyen", "Difficile"]
    )
    
    points_input = prompt_field("Points", default="4")
    points = int(points_input) if points_input.isdigit() else 4
    
    tags = prompt_tags()
    
    # Generate filename
    filename = generate_filename(school, level, section, chapter, uid)
    filepath = EXERCISES_DIR / filename
    
    # Create YAML frontmatter
    yaml_lines = [
        "---",
        f'uid: "{uid_str}"',
        f'school: "{school}"',
        f'level: "{level}"',
    ]
    
    if section:
        yaml_lines.append(f'section: "{section}"')
    
    yaml_lines.extend([
        f'chapter: "{chapter}"',
        f'source: "{source}"',
    ])
    
    if title:
        yaml_lines.append(f'title: "{title}"')
    
    yaml_lines.append(f'country: "{country}"')
    
    if year:
        yaml_lines.append(f'year: {year}')
    
    if professor:
        yaml_lines.append(f'professor: "{professor}"')
    
    yaml_lines.extend([
        f'difficulty: "{difficulty}"',
        f'points: {points}',
    ])
    
    # Format tags
    if tags:
        tags_str = ', '.join([f'"{tag}"' for tag in tags])
        yaml_lines.append(f'tags: [{tags_str}]')
    else:
        yaml_lines.append('tags: []')
    
    yaml_lines.append("---")
    
    # Create file content
    content = '\n'.join(yaml_lines) + '\n\n'
    content += '<!-- Write your exercise problem here -->\n\n'
    content += 'Énoncé de l\'exercice...\n\n'
    content += '---\n\n'
    content += '## Solution\n\n'
    content += 'Pas de solution encore.\n'
    
    # Write to file
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("\n" + "=" * 60)
        print("✅ SUCCESS!")
        print("=" * 60)
        print(f"📁 File created: {filepath}")
        print(f"🆔 UID: {uid_str}")
        print(f"📝 Filename: {filename}")
        print("\nYou can now edit the file to add the exercise content and solution.")
        print("=" * 60)
        
    except Exception as e:
        print(f"\n❌ ERROR: Failed to create file: {e}")


if __name__ == "__main__":
    try:
        create_exercise_file()
    except KeyboardInterrupt:
        print("\n\n⚠️  Exercise creation cancelled.")
    except Exception as e:
        print(f"\n❌ ERROR: {e}")