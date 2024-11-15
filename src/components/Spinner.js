import React  from 'react'
import Loading from './Spinner@1x-1.0s-200px-200px (1).gif'

const Spinner=()=> {
 
    return (
      <div className='text-center'>
        <img src={Loading} alt="loading" />
      </div>
    )
  }

  export default Spinner;

