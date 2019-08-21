import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Page404 from '../pages/404';

describe('Testing 404 Page Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Page404 />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
