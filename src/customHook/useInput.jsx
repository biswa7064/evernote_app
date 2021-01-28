import React, { useState } from 'react'


const useInput = (initialvalue = '') => {
    const [value,setValue] = useState(initialvalue)
        const reset = ()=>{
            setValue(initialvalue)
            
        }
        const bind ={
             value,
             onChange: (e)=>{
                 setValue(e.target.value)
             }   
        }

        // must be in a order value->bind->reset
        return [value,bind,reset]

    }


export default useInput
