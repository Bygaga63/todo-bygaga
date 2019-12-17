import React, {useContext, useEffect} from 'react';
import {Form} from '../components/Form';
import {Notes} from '../components/Notes';
import {FirebaseContext} from '../context/firebase/firebaseContext';
import {Loader} from '../components/Loader';

export const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);
    return (
        <>
            <Form/>

            <hr/>
            {loading ? <Loader/> : <Notes notes={notes} />}


        </>
    );
};
