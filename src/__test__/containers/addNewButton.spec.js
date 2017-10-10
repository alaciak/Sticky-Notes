import React from 'react';
import { AddNewButton } from '../../app/containers/AddNewButton.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('AddNewButton', () => {

  it('should render AddNewButton component', () => {

    const wrapper = shallow(<AddNewButton />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
