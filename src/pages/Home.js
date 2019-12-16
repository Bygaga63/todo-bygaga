import React from 'react';
import {Form} from '../components/Form';
import {Notes} from '../components/Notes';

export const Home = () => {
    const notes = [
        {id: 1, title: 'Note 1'},
        {id: 2, title: 'Note 2'},
        {id: 3, title: 'Note 3'},
        ];
    return (
        <>
            <Form/>

            <hr/>

            <Notes notes={notes}/>
        </>
    );
};
