import React from 'react';
import { PanelHeading } from '../../app/components/PanelHeading.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PanelHeading', () => {

  it('should render PanelHeading component', () => {

    const wrapper = shallow(<PanelHeading />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
