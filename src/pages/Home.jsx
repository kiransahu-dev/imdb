import React, { useEffect, useState } from 'react'
import Header from './../components/common/Header';
import Banner from './../components/Banner';

import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';
import { Box, styled } from '@mui/material';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';



const Home = () => {

    //storing api data
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // capturing api data
        const getData = async () => {
            let resp = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(resp.results);
        }
        getData();
    }, [])
    return (
        <>
            <Header />
            <Components>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <h2 style={{ color: '#F5C518', fontWeight: '700' }}>Feature Today</h2>
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
            </Components>
        </>
    )
}

export default Home;


// styled components
const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

const Components = styled(Box)`
    padding: 0 115px;
`;
