import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
import "jest-dom/extend-expect";


import Speaker from './Speaker';

describe('<Speaker />', () => {
  xit('matches snapshot', () => {
    const tree = renderer.create(<Speaker />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it.skip('matches snapshot with message', () => {
    const tree = renderer.create(<Speaker message={'hello'} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should call speak on button click', () => {
    const speak = jest.fn();
    const { getByText } = render(<Speaker speak={speak} />);

    const button = getByText(/speak/i);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(speak).toHaveBeenCalled();
    expect(speak).toHaveBeenCalledTimes(2);
  });
});