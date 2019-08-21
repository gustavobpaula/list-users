import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import store from '../store';
import Users from '../pages/Users';

describe('Testing Users Page Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Users />,
      </Provider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
