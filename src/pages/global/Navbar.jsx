import React from 'react'
import InputBase from '@mui/material/InputBase'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/system'
import { IconButton } from '@mui/material'

function Navbar() {
  return (
    <div className='d-flex py-3 px-3 justify-content-between'>
      <div
        className='d-flex justify-content-between w-100 p-3'
        style={{ backgroundColor: '#fff', borderRadius: '15px' }}
      >
        {/* SEARCH BAR */}
        <Box
          sx={{
            width: '90%',
            bgcolor: '#fff',
            color: 'grey.800',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            textAlign: 'center',
          }}
          display='flex'
          borderRadius='3px'
        >
          <IconButton type='button' sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 2, flex: 2 }} placeholder='Search' />
        </Box>
        {/* ICONS */}
        <Box display='flex'>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  )
}

export default Navbar
