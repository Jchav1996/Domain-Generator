/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domain = [];
  function genDomain(first, second, third, fourth) {
    return "www." + first + second + third + fourth;
  }

  let first = ["the", "our"];
  let second = ["great", "big"];
  let third = ["jogger", "racoon"];
  let fourth = [".com", ".dev"];

  first.forEach(pron => {
    second.forEach(adj => {
      third.forEach(noun => {
        fourth.forEach(ending => {
          domain.push(genDomain(pron, adj, noun, ending));
        });
      });
    });
  });

  let domainList = document.getElementsByTagName("ul");
  console.log(domainList);
  domain.forEach(domain => {
    let domainItem = document.createElement("li");
    domainItem.innerText = domain;
    domainList[0].appendChild(domainItem);
  });

  console.log(domain);
};
