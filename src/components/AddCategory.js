import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const handlerInputChange = (e) => {    
        setInputValue(e.target.value);
    }

    const handlerSumit = (e) => {
        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('')
        }
        
        
        e.preventDefault()
    }

    return (
        <form onSubmit={ handlerSumit }>         
            <input 
            type='text'
            value={inputValue}
            onChange={ handlerInputChange }
            placeholder='Ingrese la categoria a buscar'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
