import Produto from '../../components/Produto';
import { Stack } from '@mui/system';
import { Container, Grid } from '@mui/material';

export default function Home() 
{
    return(
        <>
        <Container>
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                    <Grid item md={3}>
                        <Produto />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}