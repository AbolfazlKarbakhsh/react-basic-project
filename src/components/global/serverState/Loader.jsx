import React from 'react'
import Alerts from './AlertComp/Alert'

function Loader({Error , Isloding}) {
  return (
    <div className={` my-3 mx-4 d-flex justify-content-center align-items-center ${Isloding}`} >
       <Alerts Error={Error}/>
    </div>
  )
}

export default Loader