import React from 'react';

const InputWithLabel = ({ label, type = 'text', id, inputclass = '', labelclass = '', validation = ''
, placeholder = '', value = '' , autoComplete = ''  }) => {
    return (
        <div className='position-relative'>
            {
                label && (<label className={`form-label  ${labelclass}`} htmlFor={id}>{label}</label>)
            }
            <input
                type={type}
                className={`form-control form-control-lg   ${inputclass}`}
                id={id} placeholder={placeholder}
                {...validation}
                defaultValue={value}
                autoComplete={autoComplete}
               
            />
        </div>
    );
}

export default InputWithLabel;
