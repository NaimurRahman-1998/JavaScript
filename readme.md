# Undefined
undefined is both a value and data type

# Numbers

### "+" is used for bot concat and addition in JS
so 
```
a = 10 + 10
result  = 20 
```
But
```
a = 10 + "10"
result = 1010 
```
### it will prioritize string first so it will concat first .

but for "Arithmatic Operations" such as " / , * " 

js will convert the string to number type and then output the result
```
a = 10 * "20"
result = 200
```

# Objects cannot be compared

# Arrays are Objects
### To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray()

### when using const array = [];
### array as a whole cannot be changed , but the elements inside the array can be changed even after using const

# Data Types
### A primitive value is a value that has no properties or methods.
JavaScript defines 7 types of primitive data types:

## Examples
2. string
3. number
4. boolean
5. null
6. undefined
7. symbol
8. bigint

Primitive values are immutable (they are hardcoded and cannot be changed).

# async-await
async is a "keyword" in js. when ever async is used in a function, it returns promise(resolve,rejected)
asd