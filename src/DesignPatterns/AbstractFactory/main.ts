import {
  ConcreteProductA1,
  ConcreteProductA2,
  ConcreteProductB1,
} from "./products";

const concreteProductA1 = new ConcreteProductA1("Victorian Chair", "1814");
const concreteProductA2 = new ConcreteProductA2("Modern Chair");
const concreteProductB1 = new ConcreteProductB1("Victorian Sofa");
console.log(concreteProductA1.productName);
console.log(concreteProductA2.productName);
console.log(concreteProductB1.productName);
