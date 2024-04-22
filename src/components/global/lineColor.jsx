import React from 'react';

const LineColor = ({color = '#00695C'}) => {
    return (
        <div className='line my-4 '>
            <div style={{background : color}}></div>
        </div>
    );
}

export default LineColor;
