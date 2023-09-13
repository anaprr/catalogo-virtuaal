import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';

/*A função só é executada se o login for verdadeiro*/
function Login(props) {

    const[email, setEmail ] = useState("");
    const[senha, setSenha ] = useState("");
    const[lembrar, setLembrar ] = useState(false);
    const[login, setLogin] = useState(false);
    const[ erro, setErro] = useState(false);
    
    const Navigate =useNavigate();

/*O valor do campo é igual ao que o usuário digitar, */
    useEffect( () => {
        if(login){
            localStorage.setItem("usuario", JSON.stringify({email:email}));
            setEmail("");
            setSenha("");
            Navigate("/")
        }

    },[login]);

    function Autenticar(evento){
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "login", {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    senha: senha
                }
            )

        })
       .then((resposta)=> resposta.json() )
       .then((json)=> {
            if(json.user){
                setLogin(true);
            } else{
                setErro(true);
            }
        })
       .catch((erro)=>{setErro(true)} )
    }


  return (
    <Container component="section" maxWidth = "xs">
        <Box sx={{mt:10, backgroundColor:"#D3A5F0", padding:"50px", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center"}}>

            <Typography component="h1" variant='h5'>Entrar</Typography>
            {erro && (<Alert severity="warning">Revise seus dados e tente novamente!</Alert>)}
            <Box component="form" onSubmit={Autenticar}>
                <TextField label="Email" variant='filled'type='email'margin='normal'fullWidth value={email} {...erro &&("error")} onChange={(e)=> setEmail(e.target.value)}></TextField>
                <TextField label="Senha" variant='filled'type='password'margin='normal'fullWidth value={senha} onChange={(e)=> setSenha(e.target.value)}></TextField>
                <FormControlLabel
                    control={ <Checkbox value={lembrar} name='lembrar' onChange={(e) => setLembrar(!lembrar)}/>}
                    label="Lembrar-me"
                />
                <Button type='submit' variant="contained" color="secondary" fullWidth sx={{mt:2, mb:2}}>Login</Button>
                <Grid container>
                    <Grid item xs>
                        Esqueci a senha
                    </Grid>
                    <Grid item>
                        <Link href={"cadastro/"}>Cadastrar</Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
  )
}

export default Login;