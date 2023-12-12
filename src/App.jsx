import { useState } from 'react'
import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NavBar } from './Components/Navbar/navbar';
import React, { Component } from 'react'
import News from './Components/News/News';
import { CssBaseline } from '@mui/material';
import { Box, Container } from '@mui/system';

export default class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline/>
        <NavBar/>
        <Container>
          <Box>
        <News/>
          </Box>
        </Container>
      </div>
    )
  }
}

