import React from 'react'
import useInput from '../../customHook/useInput'

const Form = () => {
    const [title,bindtitle,resetTitle] = useInput()
    const [content,bindContent,resetContent] = useInput()

    const handleOnSubmit = (ev)=>{
        ev.preventDefault()
        resetTitle()
        resetContent()
    }
    return (
        <div className='section'>
            <form action=''>
                <h5 className="grey_text">New-Note</h5>
            
                <div className="input-field">
                <input  id="note-title" type="text" className="validate"{...bindtitle}/>
                <label className="active" for="note-title">Note-Title</label>
                </div>
                <div className="input_field">
                    <textarea id="note-content" className="materialize-textarea"{...bindContent}></textarea>
                    <label for="note-content">Note-Content</label>
                </div>

                <button className='btn green'>Add</button>
            
            </form>
            
        </div>
    )
}

export default Form
