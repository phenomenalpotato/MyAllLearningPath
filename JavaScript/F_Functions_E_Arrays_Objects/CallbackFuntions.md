## Callback:

**_A callback function is a function passed into another function as an argument, which is the invoked inside the outer function to complete some kind of routine or action._**

The consumer of a callback-Based API writes a function that is passed into the API. The provider of the API (called **_the caller_**) takes the function and calls back (**_or executes_**) the function at some point inside the caller's body. The caller is responsible for passing the right parameters into the callback function. The caller may also expect a particular return value from the callback function, which is used to instruct further bahavior of the caller.
