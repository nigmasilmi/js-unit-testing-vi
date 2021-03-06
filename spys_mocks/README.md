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

## Centralizing **mocks**

- whenever mock is called, the test runner will look for that folder
- if it does not find one, will behave as default by replacing all methods with empty functions
- if it does find one, will look for the specific module (fs in our case), and if it finds the module that is instructed to mock, will replace its implementation with the one that is been implemented in the **mocks**/<module> file

## mockImplementation() // mockImplementationOnce()

- it is used to mock a specific implementation in a specific test
- it is used on a mocked function
- accepts a function that should be used as the implamentation of the mock

```
// replaces the function that is empty (vi.fn() with a specific implementation)
 const logger = vi.fn();
 logger.mockImplementation(()=>{//some specific implementation})

```
