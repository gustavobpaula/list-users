import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import App from '../App';

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <BrowserRouter><App /></BrowserRouter>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
