import Notifications from './Notifications'
import { getByText, render, screen} from '@testing-library/react';

test('notifications render without crashing', () => {
    render(<Notifications />);
})

// test('render three list items', () => {
//     const { container } = render(<Notifications />);
//     expect(container.children())
// })

test('Notifications has specefic text', () => {
    render(<Notifications />);
    expect(screen.getByTestId('3')).toHaveTextContent('Here is the list of notifications');
})
