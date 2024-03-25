interface Product {
  operation(): string; /// Some functionality that makes sense for every concrete inplementation of the interface.
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return "ConcreteProduct1";
  }
}
class ConcreteProduct2 implements Product {
  public operation(): string {
    return "ConcreteProduct2";
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Hello from ${product.operation()}`;
  }
}

class ConcretCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcretCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/// Client code.
function clientFunction(creator: Creator): void {
  console.log(creator.someOperation());
}

const creator = new ConcretCreator1();

clientFunction(creator);
