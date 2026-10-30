// check_katex.mjs — parse every $..$ / $$..$$ in the given markdown files with KaTeX (the site renderer).
// Usage: node check_katex.mjs exercises/*.md
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(process.cwd() + '/package.json');
const katex = require('katex');
let bad = 0;
for (const f of process.argv.slice(2)) {
  const body = fs.readFileSync(f, 'utf8').replace(/^---[\s\S]*?\n---/, '');
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g; let m;
  while ((m = re.exec(body))) {
    const tex = m[1] ?? m[2];
    try { katex.renderToString(tex, { throwOnError: true, displayMode: !!m[1] }); }
    catch (e) { bad++; console.log(`${f}: ${e.message.split('\n')[0]}  <<${tex.slice(0,80)}>>`); }
  }
}
console.log(bad ? `${bad} KaTeX error(s)` : 'KaTeX: all formulas parse');
