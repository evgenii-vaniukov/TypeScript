import {
  AbstractProductA,
  AbstractProductB,
  ConcreteProductA1,
  ConcreteProductA2,
  ConcreteProductB1,
  ConcreteProductB2,
} from "./products";

/// First family of products
const concreteProductA1 = new ConcreteProductA1("Victorian Chair", "1814");
const concreteProductB1 = new ConcreteProductB1("Victorian Sofa");

/// Second family of the products
const concreteProductA2 = new ConcreteProductA2("Modern Chair");
const concreteProductB2 = new ConcreteProductB2("Modern Sofa");

/// Output
console.log(concreteProductA1.productName);
console.log(concreteProductA2.productName);
console.log(concreteProductB1.productName);
console.log(concreteProductB2.operation());

interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1("Victorian Chair", "1814");
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB1("Victorian Sofa");
  }
}

function clientFunction(factory: AbstractFactory): void {
  const product = factory.createProductA();
  console.log(product);
}

const factory = new ConcreteFactory1();

clientFunction(factory);
