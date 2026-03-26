import fs from 'fs';
const content = fs.readFileSync('src/lib/usage-data.ts', 'utf8');
const spRegex = /sp:\s*\{[^}]+\}/g;
const names = [...content.matchAll(/name:\s*"([^"]+)"/g)].map(m => m[1]);
const matches = content.match(spRegex);
let errors = [];
matches.forEach((m, i) => {
  const vals = {};
  const pairs = m.match(/(\w+):\s*(\d+)/g);
  pairs.forEach(p => {
    const parts = p.split(/:\s*/);
    if (parts[0] !== 'sp') vals[parts[0]] = parseInt(parts[1]);
  });
  const total = Object.values(vals).reduce((a,b) => a+b, 0);
  const maxStat = Math.max(...Object.values(vals));
  if (total !== 66) errors.push(`Set "${names[i]}" total=${total} vals=${JSON.stringify(vals)}`);
  if (maxStat > 32) errors.push(`Set "${names[i]}" has stat>32: ${JSON.stringify(vals)}`);
});
console.log(`Total sets: ${matches.length}`);
console.log(`Errors: ${errors.length}`);
errors.forEach(e => console.log(e));
