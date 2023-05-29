import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Grid, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import { getCurrentWeatherDetails } from '../store/actions/weatherActions';
import WeatherDetails from './WeatherDetails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoonRain, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'


// Home Component
const Home = () => {
    const [city, setCity] = useState("Jaunpur");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const handleSearch = useCallback(() => {
        dispatch(getCurrentWeatherDetails(city));
    },[]);

    useEffect(() => {
        handleSearch();
    }, []);


    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Grid container spacing={2} sx={{ height: '100%' }} justifyContent="center" >
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Typography variant='h3' mt={2} textAlign="center" color="primary">Weather Checker</Typography>
                            <Grid container spacing={2} alignItems="center" justifyContent="center" mt={4}>
                                <Grid item xs={12} textAlign='center'>
                                    <FontAwesomeIcon icon={faCloudMoonRain} style={{ fontSize: '10rem' }} />
                                </Grid>
                                <Grid item xs={10} mt={4}>
                                    <TextField
                                        label="Search City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button variant="contained" onClick={handleSearch} fullWidth disabled={data.loading}>
                                        Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    {
                        !data.loading ? (
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{ height: '100%', width: '100%' }}>
                                    <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }}>
                                        {data.weather ? (
                                            <Grid item xs={12} >
                                                <WeatherDetails weather={data.weather} />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                                <FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '8rem', marginBottom: '2rem' }}/>
                                                {data.err?.response?.status === 404 ? (
                                                    <Typography variant="h6">
                                                        No weather data available for "{data.err?.response?.config?.params?.q}"
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h6">{data.err?.message}</Typography>
                                                )}
                                            </Grid>
                                        )}
                                    </Grid>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{ height: '100%', width: '100%' }}>
                                    <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }}>
                                        <Grid item xs={12} textAlign='center'>
                                            <CircularProgress size='5rem' />
                                            <Typography variant="h5" mt={5}>Loading weather data...</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                    }
                </Grid>
            </Grid>
        </Container >
    )
}

export default Home;
