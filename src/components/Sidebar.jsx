import React from 'react';

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? 'selected-note' : ''
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split('\n')[0]}</h4>
        <button
          className="delete-btn"
          onClick={(e) => props.deleteNote(e, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="toggle-button">
        <input
          type="checkbox"
          id="time"
          className="hidden"
          checked={props.checked}
          onChange={props.handleCheckbox}
        />
        <label
          htmlFor="time"
          className={props.darkMode ? 'left dark' : 'right light'}
        >
          <span role="img" aria="moon and sun emoji">
            {props.checked ? '🌜' : '☀️'}
          </span>
        </label>
      </div>
      <div className="sidebar--header">
        <h3>
          <span role="img" aria="clipboard emoji">
            📋
          </span>
          Notes
        </h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
