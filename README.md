# How do I use it?


`npm install '@!!!!!/javascript'`

```
let { js } = require("@!!!!!/javascript")
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