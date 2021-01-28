import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../store/actions/noteaction'



const Note = ({note}) => {
    const dispatch = useDispatch()

    const deleteHandler = ()=>{
        dispatch(deleteNote(note))
    }

    return (
        <div className='note blue'>
            <div className='right-align'>
                <i className='material-icons red-text' style={{cursor:'pointer'}}>favorite</i>
                <i className='material-icons' style={{cursor:'pointer'}} onClick={deleteHandler}>delete</i>
            </div> 
            <h5 className='black-text'>{note.title}</h5>
            <p className='truncate black-text'>{note.content}</p>
            <p className='black-text'>day ago</p>
            <div className='right-align'><i className="material-icons black-text">edit</i></div>

        </div>
    )
}

export default Note
