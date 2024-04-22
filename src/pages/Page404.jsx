import React from 'react'
import ButtonCrud from '@components/table/ButtonCrud'
import { useNavigate } from 'react-router'

function Page404() {
    const navigaite = useNavigate()
  return (
    <div className='w-100 h-100 bg-404 d-flex justify-content-center align-items-center' >
        <div className='rtl centerAll flex-column Page404Content'>
            <h1 >404</h1>
            <p >صفحه مورد نظر پیدا نشد !</p>
            <div className='my-2'></div>
            <ButtonCrud name="برگشت به صفحه اصلی" onClick={() => navigaite('/')}/>
        </div>
    </div>
  )
}

export default Page404