import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
import "jest-dom/extend-expect";

import App from './App';

describe('<App />', () => {
  // 2. write this test
  // remove .skip to run this test
  // .only will skip all other tests in the same suit
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should update message dynamically', () => {
    const { getByText, queryByText } = render(<App />);

    getByText(/nothing to say/i);
    expect(queryByText(/mocking me/i)).toBeFalsy();

    const button = getByText(/speak/i);

    fireEvent.click(button);

    getByText(/mocking me/i);

    expect(queryByText(/nothing to say/i)).toBeFalsy();
  });
});

describe('mock functions', () => {
  it('is mocking me', () => {
    const mock = jest.fn();
    // const mock = () => {};
    const result = mock();
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it('controls the mock', () => {
    const mock = jest.fn((x) => `hello and ${x}`);
    const result = mock('smile');

    expect(result).toBe('hello and smile');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smile');
  });

  // it('calls and callback', () => {
  //   const mock = jest.fn();
  //   // if we have db something it will work
  //   await db.something(mock);

  //   expect(mock).toHaveBeenCalledTimes(1);
  // });
});