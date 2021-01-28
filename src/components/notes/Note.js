import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, toggleFav } from '../../store/actions/noteaction'



const Note = ({note}) => {
    const dispatch = useDispatch()

    const deleteHandler = ()=>{
        dispatch(deleteNote(note))
    }

    const toggleFavHandler = ()=>{
        dispatch(toggleFav(note))
    }

    const favMarkup = note.favorite?'favorite':'favorite_border'

    return (
        <div className='note white'>
            <div className='right-align'>
                <i className='material-icons green-text' style={{cursor:'pointer'}} onClick={toggleFavHandler}>{favMarkup}</i>
                <i className='material-icons' style={{cursor:'pointer'}} onClick={deleteHandler}>delete</i>
            </div> 
            <h5 className='green-text'>{note.title}</h5>
            <p className='truncate green-text'>{note.content}</p>
            <p className='black-text'>day ago</p>
            <div className='right-align'><i className="material-icons black-text">edit</i></div>

        </div>
    )
}

export default Note
