import { Alert, Autocomplete, Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'


function LivrosCadastro() {

    const [titulo,setTitulo] = useState();
    const [descricao,setDescricao] = useState();
    const [ano,setAno] = useState();
    const [duracao,setDuracao] = useState();
    const [categoria,setCategoria] = useState();
    const [imagem,setImagem] = useState();
    const [enviar,setEnviar] = useState();
    const [erro,setErro] = useState();
    const [age,setAge] = useState();


    function Filmes(evento){
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "produtos", {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria,
                    usuario: localStorage.getItem("usuario"),
                    imagem: imagem
                }
            )

        })
       .then((resposta)=> resposta.json() )
       .then((json)=> {
            if(json){
                setEnviar(true);
                setErro(false);
            } else{
                setErro(true);
                setEnviar(false);
            }
        })
       .catch((erro)=>{setErro(true)} )
    }

    useEffect( () => {
        setTitulo("");
        setDescricao("");
        setAno("");
        setDuracao("");
        setCategoria("");
        setImagem("");
        
    },[enviar]);

  return (
    <Container component="section" maxWidth = "sm">
        <Box sx={{mt:10, backgroundColor:"#D3A5F0", padding:"50px", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography component="h1" variant='h5'>Livros</Typography>
            {erro && (<Alert severity="warning">Tente novamente</Alert>)}
            {enviar && (<Alert severity="success">Realizado com sucesso!</Alert>)}
            <Box component="form"onSubmit={Filmes}>
                <TextField label="Titulo" variant='filled'type='text'margin='normal'fullWidth value={titulo}onChange={(e)=> setTitulo(e.target.value)}></TextField>
                <TextField label="Sinopse" variant='filled'type='text'margin='normal'fullWidth value={descricao}onChange={(e)=> setDescricao(e.target.value)}></TextField>
                <TextField label="Ano" variant='filled'type='date'margin='normal'fullWidth value={ano}onChange={(e)=> setAno(e.target.value)}></TextField>
                <TextField label="Páginas" variant='filled'type='text'margin='normal'fullWidth value={duracao}onChange={(e)=> setDuracao(e.target.value)}></TextField>
                <TextField label="Categoria" variant='filled'type='text'margin='normal'fullWidth value={categoria}onChange={(e)=> setCategoria(e.target.value)}></TextField>
                <TextField label="Insira o url do livro" variant='filled'type='text'margin='normal'fullWidth value={imagem}onChange={(e)=> setImagem(e.target.value)}></TextField>
                <Button type='submit' variant="contained" color="secondary" fullWidth sx={{mt:2, mb:2}}>Enviar</Button>
            </Box>
        </Box>

    </Container>
  )
}

export default LivrosCadastro;