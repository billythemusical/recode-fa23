### JSON Example

```js
const user = {
  name: "Josie",
  birthday: "January 1, 2000",
  location: {
    city: "New York",
    state: "NY"
  },
  skills: [
    "javascript",
    "python",
    "web development",
    "node.js",
    "basket weaving"
  ]
}

console.log(user.name)
// outputs Josie
console.log(user.location.city)
// outputs New York
console.log(user.skills[4])
// outputs basket weaving
```