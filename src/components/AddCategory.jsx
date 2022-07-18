import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    // Se recibe el paramentro event y se le extrae la propiedad target
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        
        onNewCategory( inputValue.trim() );
        setInputValue("");
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
