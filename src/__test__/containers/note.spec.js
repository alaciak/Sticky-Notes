import React from 'react';
import { Note } from '../../app/containers/Note.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Note', () => {

  it('should render Note component', () => {

    const testNote = {
      id: 1,
      text: 'testText',
      background: 'testBackground'
    };

    const OriginalNote = Note.DecoratedComponent;
    const identity = el => el;

    const wrapper = shallow(<OriginalNote
      connectDragSource={ identity }
      connectDropTarget={ identity }
      note={ testNote }
      />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
