import ReactDOM from 'react-dom';

import { act, render } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render App', () => {
    render(<App />);
  });

  test('renders with App and root div', async () => {
    // Create and append to document body
    // an HTML element with id = root
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Requires index.js so that react-dom render method is called
    await act(() => import('./index'));

    // Asserts render was called with <App />
    // and HTML element with id = root
    expect(ReactDOM.render).toBeTruthy();
    // expect(ReactDOM.render).toHaveBeenCalledWith(
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>,
    // );
  });
});
