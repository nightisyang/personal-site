---
title: object promises
cover_image: /blog/img/object_promises.jpg
date: 11-11-2022
---

# object promises

## resolve

> _Promises are made to be broken_ - some greek philosopher

While I'm not completely sure if the quote is accurate, or that if I agree with it, computers and code certainly don't break promises. Working with the [discord poker bot](https://github.com/nightisyang/discord-poker-bot) a couple months back taught me several lesson, including this.

Running code that interacts with other pieces of code isn't running on your local machine does bring about some complexity. One of which is time. Computers as fast as they are, are still bound within the laws of pyhics and therefore are bound to time, time to process, time to respond. Instead of waiting for an external party to send back a response, you could make a promise, while completing other tasks that are not involved in this operation. This promise is kept in the background and is **resolved** when completed.

Allowing for code to run in such manner introduces asyncronous processing of code i.e. some tasks are placed in the background while other tasks are performed, and when multiple promises are used together some nature of [concurrency](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) can be achieved in Javascript even though it is single-threaded.

## reference

Assigning values to variables in Javascript is a straightforward process, in simple terms a variable is an address to some memory and in that memory contains the value assigned (in binary). Copying values to [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) to another variable in Javascript works like any lay person would understand, any changes in the new copy does not affect the old copy.

It was a painful way (and frustrating 3 days) to find out Objects in Javascript do not work in the same manner while working on the discord bot.

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects), you see, are the only mutable types in Javascript and are passed by **reference**. This property allows for some interesting usage on how data is stored and passed into, but that's a story for another day. The implications of Objects being passed by reference basically meant that reassignment of values in a property of an "copied" object also mutates/changes the original. However, this is not the end of the confusion as there's a difference between making a [shallow and deep](https://www.geeksforgeeks.org/difference-between-shallow-and-deep-copy-of-a-class/) copy of the object.

Though the UI to interact with the bot is left wanting and has not been fully tested, it was a good experience developing the bot. Lesson were learned and obstacles overcomed.

## Further reading

- [JavaScript Primitive vs. Reference Values](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
- [JavaScript Memory Model Demystified](https://www.zhenghao.io/posts/javascript-memory)
