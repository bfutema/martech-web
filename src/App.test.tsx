import ReactDOM from 'react-dom';

import { act, render } from '@testing-library/react';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

describe('App', () => {
  it('should render App', () => {
    render(<App />);
  });

  it('renders with App and root div', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    await act(() => import('./index'));

    expect(ReactDOM.render).toBeTruthy();
  });

  it('reportWebVitals', () => reportWebVitals(() => jest.fn()));
});
