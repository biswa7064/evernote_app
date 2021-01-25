import React, { useState } from 'react'


const useInput = (initialvalue = '') => {
    const [value,setValue] = useState(initialvalue)
        const reSet = ()=>{
            setValue(initialvalue)
            
        }
        const bind ={
             value,
             onChange: (e)=>{
                 setValue(e.target.value)
             }   
        }

        return [value,reSet,bind]

    }


export default useInput
