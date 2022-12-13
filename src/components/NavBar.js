import { MenuOutlined, } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Grid, IconButton, Toolbar, Typography,Paper, InputBase } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search'; 
import axios from 'axios';
import { SearchPage } from "../pages/SearchPage";

const initialValues = {
  searchcriterion: ''
}
const BASE_URL = 'http://3.23.86.147/server/search'


export const NavBar = ({ drawerWidth = 255 }) => {

  const [searchValues, setSearchValues] = useState(initialValues)
  const [resultado, setResultado] = useState(null)

  const { searchcriterion } = searchValues

  const handleInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitSearchForm = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(BASE_URL, searchValues)
      setResultado(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AppBar
        style={{ backgroundColor: '#F7F8FC', boxShadow: 'none' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },

        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuOutlined />
          </IconButton>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant="h6" noWrap component="div" sx={{
              fontSize: '24px',
              color: '#252733',
              fontFamily: ['Mulish', 'sans-serif'].join(),
              fontWeight: '700'
            }}>Overview</Typography>

            <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
              <div>
                <Paper
                variant="outlined"
                  component="form"
                  onSubmit={handleSubmitSearchForm}
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '25px',paddingLeft: '5px' }}
                >

                  <InputBase 
                    name="searchcriterion"
                    value={searchcriterion}
                    onChange={handleInputChange}
                    sx={{ ml: 1, flex: 1, font: 'small-caption' }}
                    placeholder="Buscar Documento"
                    
                  />
                  <IconButton type="submit" size="small" sx={{ p: '10px', padding:'5px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
              <div style={{ marginRight: '20px' }}>
                <Badge color="primary" variant="dot">
                  <NotificationsIcon fontSize="small" sx={{
                    color: '#C5C7CD'
                  }} />
                </Badge>
              </div>
              <div>
                <p style={{ color: "#252733", fontFamily: ['Mulish', 'sans-serif'].join(), fontWeight: '500', fontSize: '14px' }}>Jones Ferdinand</p>
              </div>
              <div>
                <Avatar alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              </div>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>

      {
        resultado &&
        <SearchPage resultado={resultado} />
      }
    </>
  )
}
