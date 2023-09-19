import { Alert, Autocomplete, Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'


function LivrosCadastro() {

    const [titulo,setTitulo] = useState();
    const [sinopse,setSinopse] = useState();
    const [ano,setAno] = useState();
    const [paginas,setPaginas] = useState();
    const [categoria,setCategoria] = useState();
    const [imagem,setImagem] = useState();
    const [enviar,setEnviar] = useState();
    const [erro,setErro] = useState();
    const [age,setAge] = useState();


    function Filmes(evento){
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "filmes", {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    sinopse: sinopse,
                    ano: ano,
                    paginas: paginas,
                    categoria: categoria,
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
        setSinopse("");
        setAno("");
        setPaginas("");
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
                <TextField label="Sinopse" variant='filled'type='text'margin='normal'fullWidth value={sinopse}onChange={(e)=> setSinopse(e.target.value)}></TextField>
                <TextField label="Ano" variant='filled'type='date'margin='normal'fullWidth value={ano}onChange={(e)=> setAno(e.target.value)}></TextField>
                <TextField label="Páginas" variant='filled'type='text'margin='normal'fullWidth value={paginas}onChange={(e)=> setPaginas(e.target.value)}></TextField>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Categoria</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select"value={categoria} label="Age"onChange={(e)=> setCategoria(e.target.value)}>
                        <MenuItem value={10}>Fantasia</MenuItem>
                        <MenuItem value={20}>Ficção científica</MenuItem>
                        <MenuItem value={30}>Romance</MenuItem>
                        <MenuItem value={40}>Distopia</MenuItem>
                        <MenuItem value={50}>Aventura</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Insira o url do livro" variant='filled'type='text'margin='normal'fullWidth value={imagem}onChange={(e)=> setImagem(e.target.value)}></TextField>
                <Button type='submit' variant="contained" color="secondary" fullWidth sx={{mt:2, mb:2}}>Enviar</Button>
            </Box>
        </Box>

    </Container>
  )
}

export default LivrosCadastro;