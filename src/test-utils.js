import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const render = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
