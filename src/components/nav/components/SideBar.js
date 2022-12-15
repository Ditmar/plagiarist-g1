import { Drawer, Box, Toolbar, Typography, Avatar } from "@mui/material"
import logo from '../../../assets/images/logoo.png'
import { NavLink } from 'react-router-dom'
import "./style.css"
import { SidebarData } from "./data/SideBarData"

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={false}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#363740'
          }
        }}
      >
        <Toolbar>
          <Box
            component='div'

            sx={{
              width: '100%',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <Avatar alt="logo" src={logo} />
            <Typography sx={{
              color: '#A4A6B3',
              fontWeight: '600',
              fontFamily: ['Mulish', 'sans-serif'].join(),
            }} variant="h6">Plagio Control</Typography>
          </Box>



        </Toolbar>
        {/* <Divider /> */}
        <br />
        <br />
        <div style={{ width: '100%', height: '100vh' }}>
          <nav>
            <ul className="sidebar-menu">
              {
                SidebarData.map((item, index) =>
                (
                  <li key={index}>
                    <NavLink to={item.path}><i className={item.icon}></i>{item.title}</NavLink>
                  </li>
                )
                )
              }
            </ul>
          </nav>
        </div>
      </Drawer>
    </Box>
  )
}
