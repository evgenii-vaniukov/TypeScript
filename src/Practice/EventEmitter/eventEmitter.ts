type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: {[event: string]: Callback[]};
  constructor() {
    this.events = {};
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    this.events[eventName] ||= [];
    this.events[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (func) => func !== callback
        );
        if (this.events[eventName].length === 0) delete this.events[eventName];
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!(eventName in this.events)) return [];
    return this.events[eventName].map((f) => f(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
