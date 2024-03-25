/// Category of Products of Type A (for instance, this category can represent different chairs).
export abstract class AbstractProductA {
  productName: string;

  constructor(productName: string) {
    this.productName = productName;
  }
  public abstract operation(): string;
}
export class ConcreteProductA1 extends AbstractProductA {
  year: string;
  constructor(productName: string, year: string) {
    super(productName);
    this.year = year;
  }
  public operation() {
    return "A1 version of AbstractProductA";
  }
}

export class ConcreteProductA2 extends AbstractProductA {
  constructor(productName: string) {
    super(productName);
  }

  public operation(): string {
    return "A2 version of AbstractProductA";
  }
}

/// Category of Products of Type B (for instance, this category can represent different sofas).
export abstract class AbstractProductB {
  productName: string;

  constructor(productName: string) {
    this.productName = productName;
  }

  public abstract operation(): string;
}

export class ConcreteProductB1 extends AbstractProductB {
  public operation(): string {
    return "B1 version of AbstractProductB";
  }
}
