import { Box, Typography } from '@mui/material'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Outlet, NavLink as Link } from 'react-router-dom'
import { Form, Input } from 'reactstrap'

function ProSidebar() {
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
        <Box>
          <Form className='px-3'>
            <Input className='mb-3' type='select'>
              <option>Paratik.net</option>
              <option>Nefiyat.net</option>
            </Input>
          </Form>
        </Box>
        <Sidebar height='100vh'>
          <Menu
            height='100%'
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    borderRadius: '15px',
                    margin: '5px 10px',
                    padding: '0px auto',
                  }
              },
            }}
          >
            <SubMenu label='Web Site Denetimi'>
              <MenuItem component={<Link to='/seo' className='nav-link' />}>
                SEO
              </MenuItem>
              <MenuItem
                component={<Link to='/optimization' className='nav-link' />}
              >
                Hız Optimizasyonu
              </MenuItem>
              <MenuItem
                component={<Link to='/security' className='nav-liknk' />}
              >
                Güvenlik
              </MenuItem>
            </SubMenu>
            <SubMenu label='Web Site İzleme'>
              <MenuItem component={<Link to='/analytics' />}>Analitik</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  )
}

export default ProSidebar
