import { useState } from 'react'
import './App.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NavBar } from './Components/Navbar/navbar';
import React, { Component } from 'react'
import { HashRouter as Router } from "react-router-dom";
import {Route, Routes} from "react-router-dom";
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
        paper: "#100a22", // Single color for the paper background
        default:
          "linear-gradient(180deg, rgba(46,39,103,1) 47%, rgba(65,44,128,1) 100%)",
        contrastText: "#FCE8FF",
      },
    },
  });
  render() {
    return (
      <div>
        <CssBaseline />
        <ThemeProvider theme={this.DarkTheme}>
          <Router>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(46,39,103,1) 47%, rgba(65,44,128,1) 100%)",
              }}
            >
              <NavBar />
              <Container>
                <Box>
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={
                        <News key="general" pageSize={21} catagory="general" />
                      }
                    />
                    <Route
                      exact
                      path="/business"
                      element={
                        <News
                          key="business"
                          pageSize={21}
                          catagory="business"
                        />
                      }
                    />
                    <Route
                      exact
                      path="/health"
                      element={
                        <News key="health" pageSize={21} catagory="health" />
                      }
                    />
                    <Route
                      exact
                      path="/entertainment"
                      element={
                        <News
                          key="entertainment"
                          pageSize={21}
                          catagory="entertainment"
                        />
                      }
                    />
                    <Route
                      exact
                      path="/sports"
                      element={
                        <News pageSize={21} key="sports" catagory="sports" />
                      }
                    />
                    <Route
                      exact
                      path="/technology"
                      element={
                        <News
                          key="technology"
                          pageSize={21}
                          catagory="technology"
                        />
                      }
                    />
                    <Route
                      exact
                      path="/science"
                      element={
                        <News pageSize={21} key="science" catagory="science" />
                      }
                    />
                  </Routes>
                </Box>
              </Container>
            </div>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

