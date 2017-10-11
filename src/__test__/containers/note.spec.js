import React from 'react';
import { Note } from '../../app/containers/Note.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Note', () => {

  //to be fixed

  xit('should render Note component', () => {

    const wrapper = shallow(<Note />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
