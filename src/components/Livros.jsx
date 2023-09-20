import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';


function Livros(props) {
  return (
    <Card sx={{maxWidth:400, mt:5, backgroundColor: '#ebcbfd', borderRadius:"10px"}}>
        <CardActionArea>
                <CardMedia 
                 component="img"
                 height="300"
                 padding="10px"
                 image={props.imagem}
                 alt={props.titulo}
                 />
                <CardContent>
                    <Typography variant='h5'component="div" padding="10px" textAlign="center">
                        {props.titulo}
                    </Typography>
                    <Typography variant='body2' color="text.secondary" textAlign="center" >
                        {props.descricao}
                    </Typography>
                    <Grid container>
                        <Grid item xs={2} textAlign="center">
                            <span>{props.categoria}</span>
                        </Grid>
                        <Grid item xs textAlign="center">
                            <span>{props.ano}</span>
                        </Grid>
                        <Grid item xs textAlign="center">
                            <span>{props.duracao}</span>
                        </Grid>
                    </Grid>
                </CardContent>
        </CardActionArea>
        <Grid item xs={6} >
            <button onClick={props.excluir}><DeleteForeverTwoToneIcon></DeleteForeverTwoToneIcon></button>
        </Grid>
        <Grid item xs={6} margin="10px" marginTop="-25px" marginLeft="70px">
         <Link href={"edicao/" + props.id} sx={{color:"black"}}>Editar</Link>
        </Grid>
    </Card>
  )
}

export default Livros;