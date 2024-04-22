import React from 'react';

const ErrorText = ({value}) => {
    return (
        <p className='font-sm-1 text-danger px-1 mt-1'>{value}</p>
    );
}

export default ErrorText;
