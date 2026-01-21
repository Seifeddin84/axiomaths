import { NextResponse } from 'next/server';
import { getAllExercises } from '@/lib/fileReader';

export async function GET() {
  try {
    const exercises = getAllExercises();
    return NextResponse.json(exercises);
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 500 });
  }
}