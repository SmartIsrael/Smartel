// src/App.js
import React, { useEffect, useState } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
const Weather2 = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: 'ec8c5fef6734f9deca001a15432c3846',
      lat: '48.137154',
      lon: '11.576124',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Munich"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    )
};

export default Weather2;