import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { IconButton } from '@mui/material'

function Mover({color}) {
  return (
    <>
      <span>
        <IconButton>
          <ArrowBackIosIcon style={{ color: color }} />
        </IconButton>
      </span>
      <span>
        <IconButton>
          <ArrowForwardIosIcon style={{ color: color }} />
        </IconButton>
      </span>
    </>
  )
}

export default Mover