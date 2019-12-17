import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {ALERT_TYPE} from '../context/alert/alertTypes';
import {FirebaseContext} from '../context/firebase/firebaseContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);
    const submitHandler = (e) => {
        e.preventDefault();

        if (value.trim()) {
            firebase.addNote(value.trim())
                .then(() => alert.show('Запись успешно добавлена', ALERT_TYPE.success))
                .catch(() => alert.show('Что то пошло не так', ALERT_TYPE.danger));
            setValue('');
        } else {
            alert.show('Необходимо ввести название')
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};
