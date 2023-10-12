
# Script Tags >> Modules >> Import Maps

## 1. Regular Script Tags

Before ES6 (ECMAScript 6) and the introduction of modules, the typical method for adding an external JavaScript library or file to a webpage was using a `<script>` tag. For CDNs, the hosted JavaScript file's URL was directly included in the `src` attribute.

```html
<script src="https://cdn.example.com/library.js"></script>
```

### Key Points:
- Scripts loaded and executed based on their order in the HTML.
- All variables and functions from these scripts were globally scoped, risking naming conflicts, a.k.a. "polluting the namespace."
- Dependencies needed manual management: if library A depended on library B, library B had to be included before A in the HTML.

## 2. ES6 Modules

With ES6, the "modules" feature was added. Instead of lumping everything into the global scope, ES6 modules permitted explicit imports and exports of functionalities.

```javascript
// math.js
export function add(a, b) {
    return a + b;
}
```

In another file, the `add` function can be imported and utilized:

```javascript
// app.js
import { add } from './math.js';

console.log(add(2, 3)); // Outputs: 5
```

For browser-based ES6 modules, the `type` attribute of the `<script>` tag should be set to "module":

```html
<script type="module" src="./app.js"></script>
```

If you wanted to import a module from a CDN or other external source, you had to specify the full URL in the `import` statement:

```javascript
import { add } from 'https://cdn.example.com/library.js';
```

### Key Points:
- ES6 modules are scoped, preventing automatic addition of variables and functions to the global scope.
- There's explicit control over what to import and export.
- Browsers load modules asynchronously but execute them as per their import order, ensuring dependency respect.

## 3. Import Maps

Import maps were designed to simplify ES6 module usage from external sources like CDNs.

With an import map, you can create a shortcut or alias for a specific module URL. Once set in the import map, this alias can be used in `import` statements.

```html
<script type="importmap">
	{
		"imports": {
			"my-library": "https://cdn.example.com/library.js"
		}
	}
</script>
```

This setup enables:

```javascript
import { add } from 'my-library';
```

Bypassing the need for the longer:

```javascript
import { add } from 'https://cdn.example.com/library.js';
```

### Key Points:
- Import maps enhance simplicity by removing the need for full URLs in every `import` statement.
- They offer flexibility: if a module's URL alters, only the import map needs updating.
- Aliases can be set, useful for versioning, testing mock-ups, and more.

---

In conclusion, the journey from regular script tags to ES6 modules to import maps shows the evolution of JavaScript's module management in browsers. Each phase added more clarity, adaptability, and empowerment for developers.

>Trying to mix traditional scripts and ES6 modules? Check out [Scope in JS](./scope_in_js.md) to better understand the difference between Global scope and Module-level scope to ensure smooth and error-free code integration.