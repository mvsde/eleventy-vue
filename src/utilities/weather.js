const API_URL = 'https://api.openweathermap.org/data/2.5'
const TOKEN = '9e276e0a2bfd9d29714ff26b2755aefd'

export async function getWeather () {
  const response = await fetch(`${API_URL}/weather?q=Hamburg,de&units=metric&appid=${TOKEN}`)
  return response.json()
}
