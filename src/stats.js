// Pure, reproducible descriptive statistics. No inferred causal claims.
export function parseNumbers(input){
  const values=String(input??'').split(/[\s,;]+/).filter(Boolean).map(s=>Number(s));
  if(!values.length) throw new Error('Enter at least one number.');
  if(values.length>10000) throw new Error('Limit: 10,000 numbers per calculation.');
  if(values.some(v=>!Number.isFinite(v))) throw new Error('Enter numbers only (separated by commas or spaces).');
  return values;
}
export function summarize(values){
  if(!Array.isArray(values)||!values.length||values.some(x=>!Number.isFinite(x)))throw new Error('A nonempty list of valid numbers is required.');
  const sorted=[...values].sort((a,b)=>a-b);const n=sorted.length;
  const mean=values.reduce((sum,v)=>sum+v,0)/n;
  const mid=Math.floor(n/2);const median=n%2?sorted[mid]:(sorted[mid-1]+sorted[mid])/2;
  const sumSq=values.reduce((s,x)=>s+(x-mean)**2,0);
  return {n,mean,median,min:sorted[0],max:sorted[n-1],sampleStdDev:n>1?Math.sqrt(sumSq/(n-1)):null,popStdDev:Math.sqrt(sumSq/n),sum:values.reduce((s,v)=>s+v,0)};
}
