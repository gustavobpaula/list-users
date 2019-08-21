import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LinkStyle } from '../components/Header/style';
import Header from '../components/Header';

describe('Testing Header Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should includes link to Home', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(LinkStyle).props().to).toBe('/');
  });
});
