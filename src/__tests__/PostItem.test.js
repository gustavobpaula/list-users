import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostItem from '../components/PostItem';

describe('Testing PostItem Component', () => {
  it('should render correctly', () => {
    const props = {
      title: 'Lorem Ipsum',
      body: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse lacus dui, varius vitae ligula quis, suscipit dapibus neque.
          Curabitur aliquam orci lacus, nec ultricies dui rhoncus nec. Ut in orci sit amet libero tincidunt euismod.
          Vivamus sodales ut neque eu dapibus. Nulla metus justo, molestie nec tellus sed, sollicitudin rhoncus.`,
      user: {
        data: {
          name: 'Lorem Ipsum',
          company: {
            name: 'Lorem Ipsum',
          },
        },
      },
      index: 1,
    };

    const wrapper = shallow(
      <PostItem
        index={props.index}
        title={props.title}
        body={props.body}
        user={props.user}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
