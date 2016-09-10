import React from 'react';
import { render } from 'react-dom';
import { EventEmitter } from 'events';
import ActionCreator from './ActionCreator';
import Store from './Store';
import Counter from './components/Counter';

const dispatcher = new EventEmitter();
const store = new Store(dispatcher);
const action = new ActionCreator(dispatcher);

render(
  <Counter initialCount={store.getCount()} store={store} action={action} />,
  document.getElementById('app')
);
