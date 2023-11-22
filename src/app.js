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
  let mostrarpalo = `${palorandom} `;
  let mostrarnumero = `${numerosrandom}`;
  let mostrarpalo2 = `${palorandom} `;
  // const colors = ["red", "black"];
  // let random = Math.floor(Math.random() * colors.length);
  // palo.style.color = colors[random];
  // palo2.style.color = colors[random];

  document.getElementById("palo").innerHTML = mostrarpalo;
  document.getElementById("numero").innerHTML = mostrarnumero;
  document.getElementById("palo2").innerHTML = mostrarpalo2;
  if (palorandom == "♥" || palorandom == "♦") {
    document.getElementById("palo").style.color = "red";
    document.getElementById("palo2").style.color = "red";
  }
};
