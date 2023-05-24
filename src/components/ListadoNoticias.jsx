import React from 'react'
import Grid  from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

const ListadoNoticias = () => {
    const {noticias, totalNoticias, pagina, handleChangePagina} = useNoticias()

    const totalPaginas =  Math.ceil(totalNoticias / 20) //Math.ceil redondea hacia arriba

    

  return (
    <>
        <Typography
            textAlign='Center'
            marginY={5}
            variant='h4'
            component='h2'
        >
            Últimas Noticias
        </Typography>

        <Grid
            container
            spacing={7}
        >
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack
            spacing={3}
            justifyContent='center'
            alignItems='center'
            sx={{
                marginY: 5
            }}
        >
            <Pagination count={totalPaginas} color='primary' page={pagina} onChange={handleChangePagina} />
        </Stack>

    </>
  )
}

export default ListadoNoticias
