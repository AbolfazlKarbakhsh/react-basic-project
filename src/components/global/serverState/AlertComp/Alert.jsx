import React from 'react';
import { BsWifiOff } from "react-icons/bs";
const Alerts = (props) => {


    return (
        <>
            {
                props.Error === "In" ? (
                    <div className='loading d-block unload'>
                        <div className='font-sm-4 font-md-5 bad-icon'>
                            <div>
                                <BsWifiOff className='bad bad1' />
                            </div>
                            به اینترنت وصل نیستی</div>

                    </div>

                ) : (
                    props.Error === "Search" ? (
                        <div className='loading d-block unload'>
                            <div className='font-sm-4 font-md-6 bad-icon'>
                                <div className="bi bi-search bad bad1 my-3"></div>
                                کاربر مورد نظر پیدا نشد </div>

                            <button className='btn  mt-4 font4 bg-dash p-2' onClick={props.Origin}>
                                تلاش مجدد
                            </button>

                        </div>
                    ) : (

                        <div className='loading  d-flex-center flex-column unload'>
                            <div className="loader bad my-4 mx-auto"></div>

                            <div className='font-sm-4 font-md-6 bad-icon'>
                                درحال دریافت اطلاعات </div>


                        </div>
                    )

                )
            }

        </>
    )
}

export default Alerts;

