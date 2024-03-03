interface Product {
  operation(): void;
}

class ConcreteProduct1 implements Product {
  public operation() {
    console.log("ConcreteProduct1");
  }
}

class ConcreteProduct2 implements Product {
  public operation() {
    console.log("ConcreteProduct2");
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product;
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

function clientCode(creator: Creator) {
  console.log(
    `Client: I'm not aware of the creator's class, but it still works with ${creator} .`
  );
}
