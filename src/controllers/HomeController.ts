import { Request, Response } from "express";
import { WeatherService } from "../services/WeatherService";

export class HomeController {
    static async showHome(request: Request, response: Response) {
        const dataWeather = await WeatherService.getWeatherByCityName("HaNoi")
        const temp = Math.round(dataWeather.main.temp - 273)
        const weather = dataWeather.weather[0].main
        const cityName = dataWeather.name;
        response.render("home", { temp, weather, cityName })
    }
}