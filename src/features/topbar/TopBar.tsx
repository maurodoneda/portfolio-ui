import { 
    AppBar, 
    Avatar, 
    Box, 
    Button, 
    Container, 
    createStyles, 
    IconButton, 
    makeStyles, 
    Theme, 
    Toolbar, 
    Tooltip } from "@mui/material"
import React from "react"


const pages = ['Home', 'Positions', 'Reports'];


export const TopBar = () => {
    return (
        <AppBar position="static" sx={{ background: 'black' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
                </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
};
