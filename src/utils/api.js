export async function getWeatherData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&lang=en&appid=${API_WEATHER_KEY}&units=metric`);
  if (!response.ok) {
    throw { message: 'Failed to fetch weather.', status: 500 };
  }
  return response.json();
};