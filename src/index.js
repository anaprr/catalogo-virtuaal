import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import EditaFilme from './EditaFilme';
import LivrosCadastro from './LivrosCadastro';


const theme = createTheme({
  palette:{
      mode: 'light',
      primary: {
        main: '#ebcbfd',
        light: '#c75ff5',
      },
      secondary: {
        main: '#c72ac5',
      },
      background: {
        default: 'rgba(61,55,55,0.51)',
        paper: '#ffffff',
      },
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/cadastro",
    element: <Cadastro/>
  },
  {
    path:"/livro",
    element: <LivrosCadastro/>
  },
  {
    path:"/edicao/:id",
    element: <EditaFilme/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
