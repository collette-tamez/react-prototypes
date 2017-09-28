import React from 'react';
import ReactDOM from 'react-dom';

const $root = document.getElementById('root');
const user = {
  name: 'Max',
}
user.luckyNumber = luckyNumber();

function luckyNumber() {
  let rndmNum = Math.floor(Math.random()*1000) + 1;
  return rndmNum;
}

const greeting = (obj) => (
  <div className="container">
    <h1>wassup {obj.name}</h1>
    <h2 className="text-muted">Your Lucky Number is {obj.luckyNumber}</h2>
  </div>
)
ReactDOM.render(
    //<h1 className="container">React Prototypes!</h1>,
    greeting(user),
    $root
);
