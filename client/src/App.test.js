import React from 'react';
import ReactDOM from 'react-dom';
import { StitchAuthProvider } from './components/StitchAuth/StitchAuth';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App';
import { render } from '@testing-library/react';

const store = configureStore();

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <StitchAuthProvider>
          <App />
        </StitchAuthProvider>
      </Provider>,
      div
    );
  });
  it('should render properly', () => {
    const component = render(
      <Provider store={store}>
        <StitchAuthProvider>
          <App />
        </StitchAuthProvider>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
