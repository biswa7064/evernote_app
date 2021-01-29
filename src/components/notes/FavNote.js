import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NoteList from './NoteList'




const FavNote = () => {
    useFirestoreConnect([{collection:'notes',where:['favorite','==', true],orderBy:['createdAt','desc'],storeAs:'favnotes'}])
    const favNote = useSelector(state=>state.firestore.ordered.favnotes)
    console.log('notes : ',favNote)
    return  (
        <NoteList notes ={favNote}/>
    )
    
}

export default FavNote
