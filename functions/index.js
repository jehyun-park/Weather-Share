const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

// OpenWeatherMap API 키
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

// Firebase Realtime Database 경로
const weatherPath = '/weather';

exports.getWeather = functions.https.onRequest(async (req, res) => {
  try {
    // OpenWeatherMap API 호출
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=${apiKey}`
    );

    // 데이터를 Firebase Realtime Database에 저장
    await admin.database().ref(weatherPath).set(response.data);

    res.status(200).send('Weather data updated successfully!');
  } catch (error) {
    console.error('Error updating weather data:', error);
    res.status(500).send('Internal Server Error');
  }
});
