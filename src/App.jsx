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
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default class App extends Component {
  DarkTheme = createTheme({
    palette: {
      primary: {
        main: "#2E2767",
        contrastText: "#FCE8FF",
      },
      secondary: {
        main: "#9C423C",
        contrastText: "#FCE8FF",
      },
      neutral: {
        main: "#FCE8FF",
      },
      background: {
        paper: "#100a22,#ffffff ",
        default:
          "linear-gradient(180deg, rgba(46,39,103,1) 47%, rgba(65,44,128,1) 100%)",
        contrastText: "#FCE8FF",
      },
    },
  });
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(46,39,103,1) 47%, rgba(65,44,128,1) 100%)",
        }}
      >
        <CssBaseline />
        <ThemeProvider theme={this.DarkTheme}>
          <NavBar />
          <Container>
            <Box>
              <News />
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

