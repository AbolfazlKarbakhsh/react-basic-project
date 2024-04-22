import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function SelectPaginate({setState , name }) {
    const { register , watch} = useForm()
    useEffect(() => {
        setState(watch(name))
    }, [watch(name)]);
    return (
        <div className='rtl d-flex align-items-center  mt-2 mt-md-0'>
            <span className='text-dark font1 ms-2'>
        
             تعداد نمایش
                 
                :
            </span>
            <select
                className={`form-control font1 mx-1  Fvazir w-auto`}
                defaultValue={""}
                {...register(name)}
            >
                <option value="10" className='Fvazir  font1' >   10  </option>
                <option value="25" className='Fvazir  font1' >   25  </option>
                <option value="50" className='Fvazir  font1' >   50  </option>
                <option value="100" className='Fvazir  font1' >  100  </option>
                <option value="500" className='Fvazir  font1' >  500  </option>
                <option value="1000" className='Fvazir  font1' >  1000  </option>
            </select>
        </div>
    )
}

export default SelectPaginate