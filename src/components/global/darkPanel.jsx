import React from 'react'

function DarkPanel({openState , method = () => {} , className = ''}) {
  return (
     <div className={`GigaMenuFother animatinLoad ${className}`} style={{right: openState ? '0%' : '-100%'}} onClick={() => method()}></div>
  )
}

export default DarkPanel