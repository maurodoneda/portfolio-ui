import { 
    AppBar, 
    Avatar, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    Switch,  
    Toolbar, 
    Tooltip } from "@mui/material"
import React, { useContext, useMemo, useState } from "react"
import { ColorModeContext } from "../../context/ColorModeContext";

const pages = ['Home', 'Positions', 'Reports'];

export const TopBar = () => {
    const { mode, toggleColorMode } = useContext(ColorModeContext);

    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
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
                <Switch onChange={toggleColorMode}/>
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
