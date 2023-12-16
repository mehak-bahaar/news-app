import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
// import Root from "./Root"; 
// import Team from "./Team"
import News from './Components/News/News'; 


const router = createHashRouter([
  {
    path: "/",
    element: <App />, // Wrap the App component with Routes
    children: [
      {
        index: true,
        element: <News pageSize={21} catagory="general" />,
      },
      {
        path: "business",
        element: <News pageSize={21} catagory="business" />,
      },
      {
        path: "health",
        element: <News pageSize={21} catagory="health" />,
      },
      {
        path: "entertainment",
        element: <News pageSize={21} catagory="entertainment" />,
      },
      {
        path: "sports",
        element: <News pageSize={21} catagory="sports" />,
      },
      {
        path: "technology",
        element: <News pageSize={21} catagory="technology" />,
      },
      {
        path: "science",
        element: <News pageSize={21} catagory="science" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router router={router} />
    <App />
  </React.StrictMode>,
)
