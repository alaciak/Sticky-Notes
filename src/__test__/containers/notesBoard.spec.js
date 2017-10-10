import React from 'react';
import { NotesBoard } from '../../app/containers/NotesBoard.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NotesBoard', () => {

  it('should not render if the data are not fetched from the server', () => {

    const testNotesList = [{ id: 1, id: 2 }];

    const wrapper = shallow(
      <NotesBoard loading={ true } notesList= { testNotesList }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

  it('should not render if the list from the server is empty', () => {

    const testNotesList = [];

    const wrapper = shallow(
      <NotesBoard loading={ false } notesList= { testNotesList }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

  it('should render if the data are fetched from the server and the list is not empty', () => {

    const testNotesList = [{ id: 1, id: 2 }];

    const wrapper = shallow(
      <NotesBoard loading={ false } notesList= { testNotesList } />
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
