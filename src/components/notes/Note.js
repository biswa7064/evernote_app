import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNote, toggleFav } from '../../store/actions/noteaction'



const Note = ({note}) => {
    const dispatch = useDispatch()

    const deleteHandler = ()=>{
        dispatch(deleteNote(note))
    }

    const toggleFavHandler = ()=>{
        dispatch(toggleFav(note))
    }

    const editNoteHandler = ()=>{
        dispatch({type:'EDIT_NOTE',payload:note})
    }

    const favMarkup = note.favorite?'favorite':'favorite_border'

    return (
        <div className='note white'>
            <div className='right-align'>
                <i className='material-icons green-text' style={{cursor:'pointer'}} onClick={toggleFavHandler}>{favMarkup}</i>
                <i className='material-icons' style={{cursor:'pointer'}} onClick={deleteHandler}>delete</i>
            </div> 
            <Link to={"/note/"+note.id}>
            <h5 className='green-text'>{note.title}</h5>
            </Link>            
            <p className='truncate green-text' style={{fontWeight:'bold'}}>{note.content}</p>
            <p className='blue-grey-text' >{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className='right-align'>
                <Link to={`/editnote/${note.id}`}>
                <i className="material-icons black-text" onClick={editNoteHandler}>edit</i>
                </Link>
                </div>

        </div>
    )
}

export default Note
