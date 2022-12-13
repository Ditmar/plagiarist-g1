import { Drawer, Box, Toolbar, Typography, Divider, Avatar} from "@mui/material"
import logo from '../assets/images/logoo.png'



export const SideBar = ({ drawerWidth = 255 }) => {
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
        
      </Drawer>
    </Box>
  )
}
