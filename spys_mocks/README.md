# Spies

Wrappers around functions or empty replacements for functions that allow track if and how a function was called

- We can use a spy as an empty function

```
const logger = vi.fn()
```

- Or with a custom implementation, by passing a function with the implementation as an argument

```
const logger = vi.fn(()=>{// some logic we want})
```

# Mocks

A replacmente for an API that may provide some test-specific behavior instead

# Mocking

- finds the module to be mocked and replaces all its functions with empty functions

```
vi.mock('fs')
```

- the mocking only happens in testing mode, not in production mode
- vi hoistes the mock to the begining
- with jest this is not the case, so the mocking must be before any import (check this)

## Custom Mock implementation

```
// here we are mocking the path module from node
// with a specific custom implementation and not an empty function
// by passing our custom implementation as second argument
// the default is used because the way that path is imported (as default and not as a named import)
// we know that path.join receives an array of arguments, and the last one is the name of the file, that is what we are interested in, that is what we return

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});
```

## centralizing **mocks**

whenever mock is called, the test runner will look for that file
