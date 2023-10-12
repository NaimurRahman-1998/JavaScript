when we want to access the properties of object we use dot notation.
something.some
.length is a dot notation.
so in string when we use .length in string, JS converts string into new Object and then
access the length property

```
const a = {
    name:"bangladesh",
    district:"dhaka"
}

const b = "bangladesh"

const c = new String("bangladesh")

console.log(typeof(a) , typeof(b), typeof(c))
console.log(c.length)
console.log(b.length)
```

# Slice

```
const a = "123456789"

console.log(a.slice(4,7)); // 567


```

# Trim 

```
const d = "   asdasd    "

console.log(d.trim()) // returns = 'asdasd'
```
# split

```
console.log(c.split("" , " "  , __))
```