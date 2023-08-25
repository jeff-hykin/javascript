# What is this?

A way to run a snippet of JS when you're using TS.

# How do I use it?

`npm install '@!!!!!/javascript'`

```ts
let { js, asyncJs } = require("@!!!!!/javascript")
let {a,b} = js`
    let b = 10
    let a = 20
    return {
        a, b
    }
`

let g = ()=> {
    let localA = "I'm local"
    js`console.log(${{localA}})`
}
g() // works as expected
```
