
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders Header correctly (snapshot)', () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders Header text', () => {
    render(<Header />);
    const linkToTest = screen.getByRole("link", { name: /Weather Anywhere/i });    
    expect(linkToTest.getAttribute("href")).toMatchInlineSnapshot(`"https://mmoresun.github.io/weather"`);
});


