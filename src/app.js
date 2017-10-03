import React from 'react';
import ReactDom from 'react-dom';
import helloWorld from './secondary';

const app = document.getElementById('app');

const val = helloWorld('webpack');

alert(`ES6 features work with Webpack and bundling data from another file.. message: ${val}`)

const Element = () => {
  return <h1>Hello, React .. react also works</h1>
}

ReactDom.render(<Element />, app)
