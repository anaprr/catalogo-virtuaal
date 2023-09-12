import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'


function Cadastro() {
    const[email, setEmail ] = useState("");
    const[senha, setSenha ] = useState("");
    const[nome, setNome ] = useState("");
    const[tel, setTelefone] = useState("");
    const[ cpf, setCpf] = useState("");
    const [cadastro, setCadastro] = useState(false);
    const [erro, setErro] = useState(false)

    function Cadastrar(evento){
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "users", {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    nome: nome,
                    telefone: tel,
                    cpf: cpf,
                    email: email,
                    senha: senha
                }
            )

        })
       .then((resposta)=> resposta.json() )
       .then((json)=> {
            if(json.cpf){
                setCadastro(true);
                setErro(false);
            } else{
                setErro(true);
                setCadastro(false);
            }
        })
       .catch((erro)=>{setErro(true)} )
    }

    useEffect( () => {
        setNome("");
        setTelefone("");
        setCpf("");
        setEmail("");
        setSenha("");
        /*setCadastro(false) */
    },[cadastro]);
  return (
    <Container component="section" maxWidth = "xs">
        <Box sx={{mt:10, backgroundColor:"#D3A5F0", padding:"50px", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Typography component="h1" variant='h5'>Cadastro</Typography>
            {erro && (<Alert severity="warning">Desculpe tente novamente</Alert>)}
            {cadastro && (<Alert severity="success">Obrigada por se cadastrar!</Alert>)}

            <Box component="form" onSubmit={Cadastrar}>
                <TextField label="Nome" variant='filled'type='nome'margin='normal'fullWidth value={nome}onChange={(e)=> setNome(e.target.value)} ></TextField>
                <TextField label="Telefone" variant='filled'type='number'margin='normal'fullWidth value={tel} onChange={(e)=> setTelefone(e.target.value)}></TextField>
                <TextField label="Cpf" variant='filled'type='number'margin='normal'fullWidth value={cpf} onChange={(e)=> setCpf(e.target.value)}></TextField>
                <TextField label="Email" variant='filled'type='email'margin='normal'fullWidth value={email} onChange={(e)=> setEmail(e.target.value)}></TextField>
                <TextField label="Senha" variant='filled'type='password'margin='normal'fullWidth value={senha} onChange={(e)=> setSenha(e.target.value)}></TextField>
                <Button type='submit' variant="contained" color="secondary" fullWidth sx={{mt:2, mb:2}}>Cadastrar</Button>
            </Box>
            
        </Box>
    </Container>
  )
}

export default Cadastro;