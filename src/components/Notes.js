import React from 'react';

export const Notes = ({notes, onRemove = () => {}}) => {
    return (
        <div>
            <ul>
                {notes.map(note => (
                    <li className="list-group-item note">
                        <div>
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}
                        >
                            &times;
                        </button>
                    </li>))}

            </ul>
        </div>
    );
};
