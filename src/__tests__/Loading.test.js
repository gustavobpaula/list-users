import React from 'react';
import { shallow } from 'enzyme';
import { LoadingStyle } from '../components/Loading/style';
import Loading from '../components/Loading';

describe('Testing Loading Component', () => {
  it('includes img tag', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find(LoadingStyle)).toBeDefined();
  });
});
