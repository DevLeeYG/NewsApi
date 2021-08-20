import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './component/NewsPage';

function App() {
  return <Route path="/:category?" component={NewsPage}></Route>;
}

export default App;
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

// Key	Name
// 6579461645d2b990f9a77b5351f92255

// 4a458cc55f384f26a831d33ddcbd318b

// https://newsapi.org/v2/top-headlines?country=kr&apiKey=4a458cc55f384f26a831d33ddcbd318b
