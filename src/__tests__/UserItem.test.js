import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserItem from '../components/UserItem';

describe('Testing UserItem Component', () => {
  it('should render correctly', () => {
    const props = {
      id: 1,
      name: 'Lorem Ipsum',
      address: {
        city: 'Lorem Ipsum',
      },
      company: {
        name: 'Lorem Ipsum',
      },
    };

    const wrapper = shallow(
      <UserItem
        id={props.id}
        name={props.name}
        address={props.address}
        company={props.company}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
