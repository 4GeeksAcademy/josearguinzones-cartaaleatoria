/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];

  let palorandom = palos[Math.floor(Math.random() * palos.length)];
  let numerosrandom = numeros[Math.floor(Math.random() * numeros.length)];

  console.log(palorandom, numerosrandom);
};
