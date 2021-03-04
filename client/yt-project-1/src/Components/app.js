import React, {useEffect} from "react"
import {Container, AppBar, Typography, Grow, Grid, StylesProvider} from '@material-ui/core';
import styled from 'styled-components';
import memories from "../Images/memories.png";
import Posts from "./Posts/Posts"
import Form from "./Forms/Form"
import {useDispatch} from 'react-redux'
import {getPosts} from '../actions/posts'
const App = function(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts)
    }, [dispatch])
    return (
        <StylesProvider injectFirst>
            <Container maxWidth="lg">
                <SAppBar position="static" color="inherit">
                    <STypography variant="h2" align="center">
                        Memories
                    </STypography>
                    <Img src={memories} alt="memories" height="60" />
                </SAppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </StylesProvider>
    )
}

const SAppBar = styled(AppBar)`
    border-radius: 15;
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    margin-left: 15px;
`;
const STypography = styled(Typography)`
    color: rgba(0,183,255,1);
`;

export default App;