import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ButtonPrimary = ({text}) => {
    return (
        <button className='bg-cyan-700 py-3 px-4 font-semibold'> <FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;&nbsp;{ text}</button>
    );
};

export default ButtonPrimary;