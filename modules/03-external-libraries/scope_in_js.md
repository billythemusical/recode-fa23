
# Scope in Traditional Scripts vs. ES6 Modules

JavaScript has evolved significantly over the years, especially in how it manages scope in scripts and modules. The transition from traditional scripts to ES6 modules marked a pivotal shift in how developers can organize and encapsulate their code. Let's dive into the differences:

## Traditional Scripts: Global Scope

In traditional scripts, like `p5.js`, variables, functions, and objects are added to the global scope by default. This can lead to unintended side effects:

- **Pollution**: As your application grows, the global namespace can become cluttered, increasing the risk of naming collisions.
- **Mutability**: Any script can modify any global variable, potentially causing unpredictable behavior.

```javascript
// In a traditional script
var globalVar = "I am global";

function display() {
    console.log(globalVar);
}
```

In this case, `globalVar` and `display` are added to the global scope and can be accessed and modified from any other script.

## ES6 Modules: Restricted Scope

ES6 modules introduced a more controlled and localized scope mechanism:

- **Module-level Scope**: Each module has its own scope. Variables or functions declared within a module remain local to that module unless explicitly exported.
- **Explicit Exports/Imports**: To share values or functionalities between modules, you must explicitly export and then import them.
- **Read-only Bindings**: Imported values are read-only bindings, not copies. This means you can access the live value of an imported variable but cannot reassign it directly.

**Example**:
```javascript
// counter.js
export let count = 0;

export function increment() {
    count++;
}

// app.js
import { count, increment } from './counter.js';

console.log(count);  // Outputs: 0
increment();
console.log(count);  // Outputs: 1

// This will throw an error
// count = 5;  // Error: "count" is read-only
```

In the above example, `app.js` imports the live value of `count` but cannot reassign it directly. The encapsulation provided by ES6 modules ensures controlled access and mutations.

## Import Maps and Scope

Import maps do not introduce any new scoping behavior. They simply provide a mechanism to simplify and control the URLs used in module imports. The scoping behavior remains consistent with standard ES6 modules.

## Conclusion

Understanding the scoping differences between traditional scripts and ES6 modules is essential for modern JavaScript development. While traditional scripts operate in the global namespace, ES6 modules offer localized and controlled scopes, promoting cleaner, more maintainable, and less error-prone code.
