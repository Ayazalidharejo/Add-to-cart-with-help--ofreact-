import React from 'react'
import Errorimg from "../../Images/error.svg"
import { Typography } from '@mui/material'

 const Errorpage = () => {
  return (
    <div className='text-center'>
        <Typography variant='body2'>
        Something’s wrong here...
            </Typography>
    <img src={Errorimg} alt="" />
    </div>
  )
}
export default Errorpage
