import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import store from '../store';
import Posts from '../pages/Posts';

describe('Testing Posts Page Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Posts match={
          { params: { id: 1 } }
        }
        />,
      </Provider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
