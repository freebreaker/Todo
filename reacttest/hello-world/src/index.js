import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root2')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root2')
//   );
// }

// setInterval(tick, 1000);
//其他 import 略
import Welcome from './Welcome'

ReactDOM.render(
  <Welcome name="jerry"/>,
  document.getElementById('root2')
)

