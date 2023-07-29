console.log('Start');                 // (A)
setTimeout(                           // (T1)
  () => console.log('Call back #1')   // (CB1)
  , 0);
console.log('Middle');                // (B)
setTimeout(                           // (T2)
  () => console.log('Call back #2')   // (CB2)
  , 0);
console.log('End');                   // (C)
