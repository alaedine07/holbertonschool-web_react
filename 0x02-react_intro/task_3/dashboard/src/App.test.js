import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    render(<App />);
})

test('renders div with class App-header', () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('App-Header').length).toBe(1);
})

test('renders div with class App-body', () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('App-body').length).toBe(1);
})

test('renders div with class App-footer', () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('App-footer').length).toBe(1);
})
