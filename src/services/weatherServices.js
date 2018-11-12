import { http } from './interceptor'

export const getNowWeather = params => http.get('/weather/now.json', { params })
export const getNow = params => http.get('/weather/daily.json', { params })
export const getair = params => http.get('/air/now.json', { params })
export const gethours = params => http.get('/weather/hourly.json', { params })
export const getdays = params => http.get('/weather/daily.json', { params })
export const getmoons = params => http.get('/geo/moon.json', { params })
export const getsun = params => http.get('/geo/sun.json', { params })
export const getplace = params => http.get('/location/search.json', { params })
