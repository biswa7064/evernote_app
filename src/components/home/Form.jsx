import React from 'react'
import useInput from '../../customHook/useInput'

const Form = () => {
    const [title,bindTitle,resetTitle] = useInput()
    const [content,bindContent,resetContent] = useInput()

    const handleOnSubmit = (ev)=>{
        ev.preventDefault()        
        resetContent()
        resetTitle()
    }
    return (
        <div className='section'>
            <form onSubmit={handleOnSubmit} className='white'>
                <h5 className="grey-text text-darken-3">New-Note</h5>
            
                <div className="input-field">
                <input  id="note-title" type="text" className="validate"{...bindTitle}/>
                <label className="active" htmlFor="note-title">Note-Title</label>                 
                </div>
                <div className="input-field">                    
                <textarea id="note-content" className="materialize-textarea"{...bindContent}></textarea>
                <label htmlFor="note-content">Note-Content</label>                 
                </div>

                <button className='btn green'>Add</button>
            
            </form>
            
        </div>
    )
}

export default Form
