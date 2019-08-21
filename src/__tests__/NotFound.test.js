import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundStyle } from '../components/NotFound/style';
import NotFound from '../components/NotFound';

describe('Testing NotFound Component', () => {
  it('includes img tag', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find(NotFoundStyle)).toBeDefined();
  });
});
