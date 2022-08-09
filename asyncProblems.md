```js
    // delay 1 sec before await
    await new Promise(resolve => setTimeout(resolve, 1000));
    await doSomeThing();
```