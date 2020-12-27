import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryComponent = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const textBox = ( e ) => {
        setInputValue( e.target.value );
    };

    const textBoxEnter = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    };

	return (
		<>
            <form onSubmit={ textBoxEnter }>
                <input 
                    type="text" 
                    placeholder="Buscar..."
                    onChange={ textBox }
                />
            </form>
		</>
	);
}

CategoryComponent.propTypes = {
    setCategories: PropTypes.func.isRequired
}
