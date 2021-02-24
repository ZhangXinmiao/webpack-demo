import helloWorld from "./helloworld";
import { A } from "./tools";

const helloWorldStr = helloWorld();

function component() {
  const element = document.createElement("div");

  element.innerHTML = helloWorldStr;
  A();

  return element;
}

document.body.appendChild(component());