# react-scrollama-wrapper

React Scrollama Wrapper is a **easy way** to use the great scrollytelling using **React** and IntersectionObserver **Scrollama** JavaScript lib.

This project is at an early stage of development, so there are some bugs and some features are not implemented yet.

I need help to test it and improve it, please send me a pull request.

## About Scrollama

[Scrollama](https://github.com/russellgoldenberg/scrollama) is a modern & lightweight JavaScript library for scrollytelling using IntersectionObserver in favor of scroll events.

Thank you to [@codenberg](https://twitter.com/@codenberg) for the original scrollama library.

The @ap.cx/react-scrollama-wrapper package is a wrapper for the scrollama library. I use it to make scrollytelling with React.

# Version

The version 3.2.x add hook use context useScrollamaContext.

The version 3.x.x of the @ap.cx/react-scrollama-wrapper package is build over the 3.x.x version of the scrollama library.

The version 2.x.x of the @ap.cx/react-scrollama-wrapper package is build over the 2.x.x version of the scrollama library.

The version 2.x.x is not supported anymore.

The version are not stritly aligned with each other. The only way to know which version of the scrollama library is used is to check the version of the @ap.cx/react-scrollama-wrapper package.

## Installation

```bash
npm install @ap.cx/react-scrollama-wrapper
```

## Usage

```js
import React from 'react';
...
import { Scrollama, Step } from "@ap.cx/react-scrollama-wrapper"

export default function Home() {
  

  const onStepEnter = (step) => {
    /* add your logic here */
  }

  const onStepExit = (step) => {
    /* add your logic here */
  }

  const onStepProgress = (step) => {
    /* add your logic here */
  }

  return (
    <Scrollama
      progress // remove this line to disable onStepProgress 
      onStepProgress={onStepProgress} 
      onStepEnter={onStepEnter} 
      onStepExit={onStepExit}
      // degug  // add this line to see the debug offset triger line in your page
    >
      <Step>
        <h1>Step 1</h1>
      </Step>
      <Step>
        <h1>Step 2</h1>
      </Step>
      <Step>
        <h1>Step 3</h1>
      </Step>
      <Step>
        <h1>Step 4</h1>
      </Step>
    </Scrollama>
  )
}

```

Take a look at the code in the [gh-pages](https://thierryc.github.io/react-scrollama-wrapper/) branch of the @ap.cx/react-scrollama-wrapper repository to see how it works.
The gh-pages is build on [Next.js](https://nextjs.org).

## How to style the component?

You can use className or style or css in js to style the Scrollama and Step component.

```js

<Scrollama
  style={{ width: "100%", height: "100%" }}
  className="my-custom-class"
  ...
>

```

I use it with [https://stitches.dev](stitches).

```js

... soon

```

#### onStepEnter(callback)

Callback that fires when the top or bottom edge of a step element enters the
offset threshold.

The argument of the callback is an object: `{ element: DOMElement, index: number, direction: string }`

`element`: The step element that triggered

`index`: The index of the step of all steps

`direction`: 'up' or 'down'

#### onStepExit(callback)

Callback that fires when the top or bottom edge of a step element exits the
offset threshold.

The argument of the callback is an object: `{ element: DOMElement, index: number, direction: string }`

`element`: The step element that triggered

`index`: The index of the step of all steps

`direction`: 'up' or 'down'

#### onStepProgress(callback)

Callback that fires the progress (0 - 1) a step has made through the threshold.

The argument of the callback is an object: `{ element: DOMElement, index: number, progress: number }`

`element`: The step element that triggered

`index`: The index of the step of all steps

`progress`: The percent of completion of the step (0 - 1)


Sure! Here's the documentation for adding a component to the Scrollama context using the `useScrollamaContext` hook and passing a React ref created with `React.createRef()`. It also includes the code for removing the component before unmounting:

---

**Adding and Removing a Component from Scrollama Context**

The Scrollama library provides a convenient way to create scroll-driven interactions in React applications. To add a component to the Scrollama context and remove it before unmounting, you can follow the steps outlined below.

1. Import the necessary dependencies:
   ```jsx
   import React, { useEffect, useContext } from 'react';
   import { useScrollamaContext } from 'scrollama';
   ```

2. Create a React ref for your component using `React.createRef()`:
   ```jsx
   const stepRef = React.createRef();
   ```

3. Use the `useScrollamaContext` hook to access the Scrollama context:
   ```jsx
   const removeStep = useScrollamaContext();
   ```

4. Add the component to the Scrollama context when the component mounts:
   ```jsx
   useEffect(() => {
     const remove = removeStep(stepRef);
     return () => {
       remove();
     };
   }, []);
   ```

   In the above code, the `useEffect` hook is used to execute the code when the component mounts. The `removeStep` function returned by the `useScrollamaContext` hook is called with the `stepRef` as an argument. The returned `remove` function is stored in the `remove` variable. Finally, the `remove` function is called when the component is unmounted.

   **Note**: The `[]` as the second argument for `useEffect` ensures that the effect is only run once when the component mounts.

5. The complete code for a component using Scrollama context and removing it before unmounting might look like this:
   ```jsx
   import React, { useEffect, useContext } from 'react';
   import { useScrollamaContext } from 'scrollama';

   const MyComponent = () => {
     const stepRef = React.createRef();
     const removeStep = useScrollamaContext();

     useEffect(() => {
       const remove = removeStep(stepRef);
       return () => {
         remove();
       };
     }, []);

     // Rest of your component code

     return <div ref={stepRef}>Your component content</div>;
   };

   export default MyComponent;
   ```

   In this example, the `stepRef` is assigned to the `ref` prop of the component's root element (`div`). Make sure to replace `'Your component content'` with your actual component content.

   By using this code, your component will be added to the Scrollama context when it mounts, and it will be automatically removed when it unmounts.

---

Remember to install the Scrollama library and any additional dependencies required for your project. Additionally, ensure that you have the correct version of React and Scrollama for compatibility with the `useScrollamaContext` hook. Refer to the official documentation of Scrollama and React for more details and specific usage instructions.



### Dependencies (3)

- react 17.0.0 || 18.0.0
- react-dom 17.0.0 || 18.0.0
- scrollama ^3.0.1
 
 ### A wrapper for Scrollama
 
 This repo is NOT a fork of react-scrollama but a wrapper over the greate original **Scrollama** made and support by [https://github.com/russellgoldenberg](Russell Goldenberg).

 ### Alternatives

- [react-scrolly](https://github.com/garfieldduck/react-scrolly)
- [Scrollama](https://github.com/russellgoldenberg/scrollama)
- [Waypoints](http://imakewebthings.com/waypoints/)
- [ScrollMagic](http://scrollmagic.io/)
- [graph-scroll.js](https://1wheel.github.io/graph-scroll/)
- [ScrollStory](https://sjwilliams.github.io/scrollstory/)
- [enter-view](https://github.com/russellgoldenberg/enter-view)


## Design scrolly-telling

Here are some references to help you design better scrolly-telling:

- [How To Scroll](https://bost.ocks.org/mike/scroll/) by Mike Bostock
- [Responsive scrollytelling best practices](https://pudding.cool/process/responsive-scrollytelling/) (The Pudding)


## IntersectionObserver polyfill

You must include the [IntersectionObserver polyfill](https://github.com/w3c/IntersectionObserver) yourself for cross-browser support.
Check on [caniuse (intersectionobserver)](https://caniuse.com/#feat=intersectionobserver) to see if you need to include the polyfill.

[IntersectionObserver library polyfills](https://github.com/w3c/IntersectionObserver) is the native IntersectionObserver API in unsupporting browsers. See the API documentation for usage information.

### License

Like the orginal the @ap.cx/react-scrollama-wrapper is licensed under the MIT license

MIT License

Copyright (c) 2021 Thierry Charbonnel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
