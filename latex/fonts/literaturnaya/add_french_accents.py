# Literaturnaya Book (Marath Salychow 2017, CC BY 3.0) has empty or missing French accented letters.
# This adds them: acute, grave, circumflex drawn as tapered wedges in the weight of the face, dieresis from the
# font's own dots, cedilla from its comma. Output: a modified font (CC BY allows adaptation with attribution).
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.pens.boundsPen import BoundsPen
src, dst = sys.argv[1], sys.argv[2]
f = TTFont(src); gs = f.getGlyphSet(); glyf = f['glyf']; hmtx = f['hmtx']

def contours(name):
    rp = DecomposingRecordingPen(gs); gs[name].draw(rp); cs, cur = [], []
    for op, args in rp.value:
        cur.append((op, args))
        if op in ('closePath', 'endPath'): cs.append(cur); cur = []
    return cs
def bounds(cs):
    bp = BoundsPen(gs)
    for c in cs:
        for op, a in c: getattr(bp, op)(*a)
    return bp.bounds
def play(cs, pen):
    for c in cs:
        for op, a in c: getattr(pen, op)(*a)
def area(pts):
    return sum(pts[i][0]*pts[(i+1)%len(pts)][1]-pts[(i+1)%len(pts)][0]*pts[i][1] for i in range(len(pts)))/2
def poly(*polys):
    cs = []
    for pts in polys:
        if area(pts) > 0: pts = pts[::-1]          # TrueType: outer contours clockwise
        c = [('moveTo', (pts[0],))] + [('lineTo', (p,)) for p in pts[1:]] + [('closePath', ())]
        cs.append(c)
    return cs

# accents in a 0-based box; heavy end at the top, as in Literaturnaya
ACUTE = poly([(40, 0), (78, 0), (190, 160), (120, 182)])
GRAVE = poly([(150, 0), (112, 0), (0, 160), (70, 182)])
CIRC = poly([(0, 0), (44, 0), (125, 108), (206, 0), (250, 0), (150, 168), (100, 168)])
xh = bounds(contours('x'))[3]; cap = bounds(contours('H'))[3]
a_top = bounds(contours('a'))[3]
DIER = [c for c in contours('adieresis') if bounds([c])[1] > a_top - 5]
dx0, dy0, _, _ = bounds(DIER); DIER = [[(op, tuple((x - dx0, y - dy0) for (x, y) in a)) for op, a in c] for c in DIER]
comma = contours('comma'); kx0, ky0, kx1, ky1 = bounds(comma)
CED = [[(op, tuple(((x - kx0) * 0.72, (y - ky1) * 0.72) for (x, y) in a)) for op, a in c] for c in comma]
i_stem = [c for c in contours('i') if bounds([c])[3] < xh + 40]

def compose(name, base, acc, where='above', base_cs=None, gap=55):
    bcs = base_cs or contours(base)
    bx0, by0, bx1, by1 = bounds(bcs); ax0, ay0, ax1, ay1 = bounds(acc)
    top = cap if base[0].isupper() else xh
    dx = (bx0 + bx1) / 2 - (ax0 + ax1) / 2
    dy = (top + gap - ay0) if where == 'above' else (0 - ay1 + 30)
    pen = TTGlyphPen(None); play(bcs, pen); play(acc, TransformPen(pen, (1, 0, 0, 1, dx, dy)))
    if name not in glyf.glyphs: f.setGlyphOrder(f.getGlyphOrder() + [name])
    g = pen.glyph(); glyf[name] = g; g.recalcBounds(glyf)
    hmtx[name] = (hmtx[base][0], g.xMin)

for base in 'aeiouyAEIOU':
    bcs = i_stem if base == 'i' else None
    for acc, suffix in ((ACUTE, 'acute'), (GRAVE, 'grave'), (CIRC, 'circumflex'), (DIER, 'dieresis')):
        if base in 'aA' and suffix == 'dieresis': continue      # the font's own äÄ are fine
        if base in 'oOuU' and suffix == 'dieresis': continue    # idem öÖüÜ
        if base in 'yY' and suffix != 'dieresis': continue
        compose(base + suffix if base.islower() else base + suffix, base, acc, base_cs=bcs)
compose('ccedilla', 'c', CED, 'below'); compose('Ccedilla', 'C', CED, 'below')
new = {'ecircumflex': 0xEA, 'Ecircumflex': 0xCA, 'ydieresis': 0xFF}
for t in f['cmap'].tables:
    if t.isUnicode():
        for n, u in new.items(): t.cmap[u] = n
f['maxp'].numGlyphs = len(f.getGlyphOrder())
name = f['name']
for rec in name.names:
    if rec.nameID == 5: rec.string = 'Version 1.0-axiomath (French accents added, 2026-11-27)'
f.save(dst); print('saved', dst)
