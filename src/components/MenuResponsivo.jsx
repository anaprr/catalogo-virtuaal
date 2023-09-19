import { AppBar, Box, Container,IconButton,Toolbar, Typography, Menu, MenuItem, Button, Tooltip, Avatar, Link } from '@mui/material';
import React, { useState } from 'react';
import './MenuRes.module.css'
import Foto from "./img/logocerta.png.png"
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';



function MenuResponsivo(props) {

 

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <AppBar position='static'>
        <Container maxWidth="xl ">
            <Toolbar disableGutters>
                <Typography variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              height:'100px'
              
            }}>
                 <img  src={Foto}></img>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit">
                        <MenuBookTwoToneIcon></MenuBookTwoToneIcon>
                    </IconButton>

                    <Menu  id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
                 
                   <MenuItem  onClick={handleCloseNavMenu}>
                   <Typography textAlign="center"></Typography>
                 </MenuItem>
              
                  </Menu>
                </Box>
                <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         
          </Typography>
          
          <Box sx={{ flexGrow: 15, display: { xs: 'none', md: 'flex' } }}>      
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                      <Link href={"/livro"} sx={{color: 'white'}}>Livros</Link>
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                      <Link href={"/livro"} sx={{color: 'white'}}>Faça sua lista</Link>
                    </Button>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}>
                      <Link href={"/livro"} sx={{color: 'white'}}>Edite</Link>
                    </Button>    
                </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"></Typography>
                </MenuItem>
             
            </Menu>
          </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default MenuResponsivo;