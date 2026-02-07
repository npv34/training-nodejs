import axios from "axios";

export class WeatherService {
    static async getWeatherByCityName(cityName: string) {
        const res = await axios.get(process.env.OPENWEATHER_API_URL!, {
            params: {
                q: cityName,
                appid: process.env.OPENWEATHER_API_KEY,
            }
        })
        return res.data
    }
}