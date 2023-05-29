import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, CircularProgress } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

// Weather Detail Component
const WeatherDetails = ({ weather }) => {
    const [isLoading, setIsLoading] = useState(true);

    const fadeInAnimtation = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1 }
    };

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setIsLoading(false);
        };
        image.src = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`;
    }, [weather]);

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Grid container spacing={-2} sx={{ gap: 4 }} textAlign='center' justifyContent='center' mb={2} >
                <Grid item xs={12} >
                    <Typography variant='h3' textAlign='center' >
                        <motion.div {...fadeInAnimtation}>{weather?.name}</motion.div>
                    </Typography>
                    {isLoading ? (
                        <CircularProgress size={100} style={{ marginTop: '2rem', marginBottom: '2rem' }} /> // Loading bar component
                    ) : (
                        <motion.img {...fadeInAnimtation}
                            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
                            style={{ padding: 0, marginBottom: '-2rem', marginTop: '-2rem' }}
                            alt="Weather Icon"

                        />
                    )}
                    <Typography variant="h4" >
                        <motion.div {...fadeInAnimtation}>{weather?.weather[0]?.main}</motion.div>
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <motion.div {...fadeInAnimtation}>
                        <Box
                            sx={{
                                height: 100,
                                width: 100,
                                border: '2px solid #47D7AC',
                                borderRadius: 2,
                                margin: '0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid item xs={12}>
                                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} style={{ fontSize: '2rem' }} />
                                </Grid>
                                <Grid item xs={12} mt={1}>
                                    <Typography>Temp</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography variant='h6' >{weather?.main?.temp}&deg;C</Typography>
                    </motion.div>

                </Grid>
                <Grid item xs={6} sm={3}>
                    <motion.div {...fadeInAnimtation}>

                        <Box
                            sx={{
                                height: 100,
                                width: 100,
                                border: '2px solid #47D7AC',
                                borderRadius: 2,
                                margin: '0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid item xs={12}>
                                    <FontAwesomeIcon icon={faDroplet} style={{ fontSize: '2rem' }} />

                                </Grid>
                                <Grid item xs={12} mt={1}>
                                    <Typography>Humidity</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography variant='h6' >{weather?.main?.humidity}%</Typography>
                    </motion.div>

                </Grid>
                <Grid item xs={6} sm={3}>
                    <motion.div {...fadeInAnimtation}>

                        <Box
                            sx={{
                                height: 100,
                                width: 100,
                                border: '2px solid #47D7AC',
                                borderRadius: 2,
                                margin: '0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Grid container sx={{ justifyContent: 'center' }}>
                                <Grid item xs={12}>
                                    <FontAwesomeIcon icon={faWind} style={{ fontSize: '2rem' }} />
                                </Grid>
                                <Grid item xs={12} mt={1}>
                                    <Typography>Wind</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Typography variant='h6'>{weather?.wind?.speed}km/h</Typography>
                    </motion.div>

                </Grid>
            </Grid>
        </Container >
    );
};

export default WeatherDetails;