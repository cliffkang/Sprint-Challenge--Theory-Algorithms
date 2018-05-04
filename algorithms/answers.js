// Exercise I
/*
const a = O(n^3);
const b = O(log(n)); // may go forever, dependent on what 'x' is
const c = ((((n ^ (1/2)) / 2) * 8) * 8) = 32(n ^ (1/2)) = O(n^0.5) = O(n);
const d = O(n) || O(nlog(n)) // the first for loop feels like a log(n) so maybe second one
const e = n + 0.5(n) + 0.25(n) + 10 | 0.75(n) + 10 | O(n);
let f;
{
   if (n >= 0) {
      f = O(Infinity);
   }
   else f = O(n);
}
const g = O(n - target) = O(n);
*/

// Exercise II

// (a)
function findMax(arraySize, num) {
   let n = arraySize;
   let a = [];
   let j = num;
   let i = 0;
   for (let i = 0; i < n; i++) a.push(Math.floor(Math.random() * n));
   let max = a[j] - a[i];
   while(j >= i) {
      if ((a[j] - a[i]) > max) max = a[j] - a[i];
      i++;
   }
   return max;
}

console.log('answer is II(a) is', findMax(100, 50));

// (b)
/*
Something similar to a binary search tree would be a good method (so divide and conquer)
Drop an egg at floor (n/2): 
   if (broken) check at ((n/2) / 2)
   else check at (n/2) + ((n/2) / 2)
*/

// Exercise III

// (a)
/*
It would be O(n^2). It would first look through n - 1 elements; then it would recurse
through the greater list, looking through n - 2, n - 3, and so forth until the length
of the greater list became 1, so it would look through basically n + (n ^ 2 / 2), 
which simplifies into O(n ^ 2).
*/

// (b)
/*
It would look through n - 1 on the first loop; then ((n - 1) - 2); then 2 less, 2 less,
so forth. It would end up being close to (n ^ 2 / 2) again, which again simplifies into
O(n ^ 2).
*/

