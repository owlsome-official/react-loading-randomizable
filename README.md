# react-loading-randomizable

[![NPM](https://img.shields.io/npm/v/react-loading-randomizable)](https://www.npmjs.com/package/react-loading-randomizable)
[![NPM](https://img.shields.io/badge/Watsize-Library-289548)](https://www.npmjs.com/package/react-loading-randomizable)
[![Downloads](https://img.shields.io/npm/dm/react-loading-randomizable.svg)](https://npmjs.org/package/react-loading-randomizable)

## 📘 About

A component for ReactJS which render overlay transparent screen, loading element and text label together as one.

> Disclaimer: All of loading elements source code on this package are based on `react-loadingg` such as BabelLoading, BatteryLoading, and more.

## ⚙ Install

```bash
yarn add react-loading-randomizable
# or alternate npm way `npm install react-loading-randomizable`
```

## 📌 Example Usage

```jsx
import { useState } from "react";
import { OverlayLoading } from "react-loading-randomizable";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <OverlayLoading active={loading} />
      <button onClick={handleClick}>
        Click for show overlay loading for 3 seconds
      </button>
    </>
  );
}

export default App;
```

## 📋 Properties

| **Property**      | **Description**                                             | **Type**              | **Default** |
|-------------------|-------------------------------------------------------------|-----------------------|-------------|
| **active**        | to make loading overlay invisible, set it `false`           | _bool_                | true        |
| **number**        | a specific index of loading element, see more a below table | _number_              | -1          |
| **style**         | custom style of container element                           | _React.CSSProperties_ | {}          |
| **className**     | custom className of container element                       | _string_              | ""          |
| **text**          | text render alongside with loading element                  | _React.ReactNode_     | ""          |
| **textStyle**     | custom style of text element                                | _React.CSSProperties_ | {}          |
| **textClassName** | custom className of text element                            | _string_              | ""          |

## 📝 Need More Example?

- Document with Online Demo: [Demo](https://react-loading-randomizable-demo.vercel.app/)
- or alternate example link: [CodeSandbox](https://codesandbox.io/p/sandbox/example-of-react-loading-randomizable-dlttfs)

## 🙋 FAQ?

FAQ 1: **What's the difference between this package and the original (`react-loadingg`)?**

To inform you, I love the original package so much and appreciate them for creating such a useful package, but it has passed a long year since the last commit, so I want to resurrect it with an upgraded version of React, randomizable element on each render, and the overlay loading screen as the default.

FAQ 2: **List of add-on features.**

1. Overlay screen (black screen with 70% transparency)
2. Randomly render a loading element, but you can also be specific with your favorite one.
3. Supported React 18.
4. TypeScript on the new source code; leave JavaScript on the loading element (from the library) with no changes.

FAQ 3: **I want to ask you more.**

Please feel free to create an issue on GitHub. I would love to answer all of the questions, and I am also welcome for all the PR. ❤️

## 𝌡 Changelog

Please see more [CHANGELOG.md](CHANGELOG.md)

## ⚒ Thanks a lot

- [react-loadingg](https://github.com/Summer-andy/react-loading)
- [react-loadinggg](https://github.com/rory1212/react-loading)
