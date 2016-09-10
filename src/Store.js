import { EventEmitter } from 'events';

export default class Store extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.count = 0;
    dispatcher.on('countUp', this._onCountUp.bind(this));
  }

  getCount() {
    return this.count;
  }

  _onCountUp(count) {
    this.count = count;
    this.emit('CHANGE', this.count);
  }
}
