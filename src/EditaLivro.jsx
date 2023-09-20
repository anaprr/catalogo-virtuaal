import { Alert, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField,  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditaLivro() {

    const{ id } = useParams();

    console.log(id)

    const[titulo, setTitulo ] = useState("");
    const[descricao, setDescricao ] = useState("");
    const[ano, setAno ] = useState("");
    const[duracao, setDuracao] = useState("");
    const [categoria,setCategoria] = useState("");
    const [imagem,setImagem] = useState("");
    const [editar,setEditar] = useState(false);
    const [erro,setErro] = useState(false);
    const usuario = localStorage.getItem("usuario")

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
       .then((resposta)=> resposta.json() )
       .then((json)=> {
            if(!json.status){
                setTitulo(json.titulo);
                setDescricao(json.descricao);
                setAno(json.ano);
                setDuracao(json.duracao);
                setImagem(json.imagem);
                setCategoria(json.categoria);
            } else{
                setErro("Filme não encontrado");
            }
            
        })
       .catch((erro)=>{setErro(true)} )
    }, [])
    function Editar(evento){
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "produtos", {
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    id:id,
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria,
                    imagem: imagem
                }
            )

        })
       .then((resposta)=> resposta.json() )
       .then((json)=> {
            if(json._id){
                setEditar(true);
                setErro(false);
            } else{
                setErro(true);
                setEditar(false);
            }
        })
       .catch((erro)=>{setErro(true)} )
    }

  return (
    <>
        <Container component="section" maxWidth = "sm">
            <Box sx={{mt:10, backgroundColor:"#D3A5F0", padding:"50px", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            {erro && (<Alert severity='warning'>{erro}</Alert>)}
            {editar && (<Alert severity='success'>Filme editado com sucesso</Alert>)}
                <Box component="form" onSubmit={Editar}>
                    <TextField label="Título" variant='filled'type='nome'margin='normal' fullWidth  value={titulo} onChange={(e)=> setTitulo(e.target.value)}></TextField>
                    <TextField label="Descrição" variant='filled'type='text'margin='normal'fullWidth value={descricao}onChange={(e)=> setDescricao(e.target.value)}></TextField>
                    <TextField label="Ano" variant='filled'type='date'margin='normal'fullWidth value={ano}onChange={(e)=> setAno(e.target.value)}></TextField>
                    <TextField label="Duração" variant='filled'type='text'margin='normal'fullWidth value={duracao}onChange={(e)=> setDuracao(e.target.value)}></TextField>
                    <TextField label="Categoria" variant='filled'type='text'margin='normal'fullWidth value={categoria}onChange={(e)=> setCategoria(e.target.value)}></TextField>
                    <TextField label="Insira seu link" variant='filled'type='text'margin='normal'fullWidth value={imagem}onChange={(e)=> setImagem(e.target.value)}></TextField>
                    <Button type='submit' variant="contained" color="secondary" fullWidth sx={{mt:2, mb:2}}>Editar</Button>
                </Box>
            </Box>
        </Container>
    </>
  )
}

export default EditaLivro;