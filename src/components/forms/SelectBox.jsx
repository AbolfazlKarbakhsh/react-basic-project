import React from 'react';

const SelectBox = ({ label, id, inputclass = '', labelclass = '', validation = {}, autoComplete = '', loop, selectedItem, Api = "", NoChoise = false }) => {
    return (
        <div className='position-relative'>
            {
                label && (<label className={`form-label  ${labelclass}`} htmlFor={id}>{label}</label>)
            }
            <select
                data-live-search="true"
                className={`form-control form-control-lg  Fvazir  ${inputclass}`}
                id={id}
                {...validation}
                autoComplete={autoComplete}
                defaultValue={selectedItem || ""}
            >
                {
                    !NoChoise ? <option value="" className='Fvazir  ' disabled> انتخاب کنید</option> :
                        <option value="0" className='Fvazir ' >   هیچکدام  </option>
                }
                {loop.map((e) => {
                    return (
                        <option value={e.id} className='Fvazir' key={e.id}>  {Api == "name" ? e.name : e.title}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default SelectBox;
