import React, {useContext, useCallback} from 'react';
import {FirebaseContext} from '../context/firebase/firebaseContext';

export const Notes = ({notes}) => (
    <div>
        <ul>
            {notes.map(note => (
                <Note key={note.id} {...note}/>
            ))}

        </ul>
    </div>
);

const Note = ({id, title, date}) => {
    const {removeNote} = useContext(FirebaseContext);

    const onRemoveHandler = useCallback(() => {
        removeNote(id);
    }, [id, removeNote]);
    return (<li className="list-group-item note">
        <div>
            <strong>{title}</strong>
            <small>{new Date(date).toLocaleDateString()}</small>
        </div>

        <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onRemoveHandler}
        >
            &times;
        </button>
    </li>)
}
