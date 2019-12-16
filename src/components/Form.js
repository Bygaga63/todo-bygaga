import React, {useState} from 'react';

export const Form = () => {
    const [value, setValue] = useState('');
    const submitHandler = () => {

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
