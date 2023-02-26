import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import Select from 'react-select'

function ProSidebar() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <div>
      <Box height='100vh'>
        <Box
          sx={{ p: 3 }}
          display='flex'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <img
            alt='profile-user'
            width='16px'
            height='28px'
            src={`../../assets/Logo.png`}
            style={{ cursor: 'pointer' }}
          />
          <Typography
            sx={{ color: '#4B465C', fontSize: '24px', fontWeight: 700 }}
          >
            Kolay Web
          </Typography>
        </Box>
        <Sidebar height='100vh'>
          <Menu height='100%'>
            {' '}
            <Box>
              <Select options={options} />
            </Box>
            <SubMenu label='Web Site Denetimi'>
              <MenuItem> Genel Bakış </MenuItem>
              <MenuItem> Sorun Raporu </MenuItem>
              <MenuItem> Taranan Sayfalar </MenuItem>
              <MenuItem> Bulunan Kaynaklar </MenuItem>
              <MenuItem> Bulunan Bağlantılar</MenuItem>
              <MenuItem> Tarama Karşılaştırması </MenuItem>
              <MenuItem> Sayfa Değişiklik İzleyicisi </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  )
}

export default ProSidebar
