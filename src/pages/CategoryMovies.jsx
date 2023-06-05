import { Box, styled } from '@mui/system';
import React, { useState, useEffect } from 'react'
import Header from '../components/common/Header';
import { categoryMovies } from './../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLocation } from 'react-router-dom';
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL, moviesType } from '../constants/constant';
import { Divider, Typography } from '@mui/material';
import MovieList from '../components/MovieList';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const StyledBanner = styled('img')({
    height: 450,
    width: '100%'
});

const Components = styled(Box)`
    width: 80%;
    margin: auto;
`;


const Container = styled(Box)`
    background: #f5f5f5;
    padding: 10px;
`;

const CategoryMovies = () => {

    const [movies, setMovies] = useState([])
    const { search } = useLocation();

    useEffect(() => {
        const getData = async () => {
            let res = await categoryMovies(API_URL);
            setMovies(res.results);
        }

        let API_URL = '';

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        }

        getData(API_URL);
    }, [search])
    return (
        <div>
            <Header />
            <Components>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                >
                    {
                        movies.map(movie => (
                            <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='banner' />
                        ))
                    }
                </Carousel>
                <Container>
                    <Typography variant='h6'>IMDB Charts</Typography>
                    {/* filter as per categories */}
                    <Typography variant='h4'>IMDB {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{ fontSize: 12, margin: 5 }}>IMDB Top {movies.length} Movies as rated by regular IMDB voters.</Typography>
                    <Divider />
                    <MovieList movies={movies} />
                </Container>
            </Components>
        </div>
    )
}

export default CategoryMovies;
