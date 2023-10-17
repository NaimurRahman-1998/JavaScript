# Arrays are Objects
### To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

# Sort

### Array.sort() sorts string only and it is case sensetive

### Find MAX and MIN 
 ```
 function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
 ```
 and
  ```
 function myArrayMax(arr) {
  return Math.min.apply(null, arr);
}
 ```

 ## sorting array of objects
 ```
 const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year});
```
and sorting string 

```
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
```