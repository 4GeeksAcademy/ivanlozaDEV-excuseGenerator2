/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

let Who = who[Math.floor(Math.random() * who.length)];
let Action = action[Math.floor(Math.random() * action.length)];
let What = what[Math.floor(Math.random() * what.length)];
let When = when[Math.floor(Math.random() * when.length)];

window.onload = function() {
  //write your code here

  const excuseParagraph = document.getElementById("excuse");
  excuseParagraph.innerHTML = Who + " " + Action + " " + What + " " + When;
};
