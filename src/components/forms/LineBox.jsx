import React from 'react';

const LineBox = ({children}) => {
    return (
        <div className='my-3 mx-0 p-2 LineBox position-relative' style={{margin:0}}>
            {children}
            <label className='Input-Label-top text-black'>دسته بندی</label>
        </div>
    );
}

export default LineBox;
