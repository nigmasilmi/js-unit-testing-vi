# Advanced mocking

## Global modules

### fetch

- with vitest, we can mock a globally available module by using stubGlobal
- the first argument is a string with the name of the module we want to mock
- the second argument is the replacement for that module when called as a mock
- the second argument can be a spy function also

```
vi.stubGlobal('fetch', ()=>{// some implementation})

// or

const testFetch = vi.fn()

vi.stubGlobal('fetch', testFetch)


```
