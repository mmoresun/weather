
// initial state

import { v4 as uuid } from 'uuid';
import { ICityStateEntry } from '../types/types';

export const citylist: ICityStateEntry[] = [
  {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric',
    id: uuid()
  },
  {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Warsaw&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric',
    id: uuid()
  },
  {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Prague&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric',
    id: uuid()
  },
  {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Antalya&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric',
    id: uuid()
  },
  {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric',
    id: uuid()
  }
]
