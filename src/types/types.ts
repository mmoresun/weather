
export interface IGeoLocateObj {
  latitude: number | string | undefined;
  longitude: number | string | undefined
}

export interface IWeatherCardsListProps {
  weatherData: IWeatherDataObj;
  addDisabled: boolean;    
  setAddDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  cityInputRef: any  
}

export type MyFormField = {
  city: HTMLInputElement;
};

export type MyFormSubmitEvent = React.FormEvent<HTMLFormElement & MyFormField>

export interface IReducer {
  city: string
}

export interface IWeatherCardListProps {
  addDisabled: Boolean;
  setAddDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  weatherData: IWeatherDataObj
}

export interface ICityAction {
  type: string;
  payload: {
    url: string,
    id: string
  }
}

export interface ICityStateEntry {
  url: string | undefined;
  id: string | undefined;
}

export interface IWeatherDataObj {
  name: string | undefined,
  country: string | undefined,
  wind: number | undefined,
  clouds: string | undefined,
  temp: number | undefined,
  feels_like: number | undefined,
  pressure: number | undefined,
  humidity: number | undefined,
  icon: string | undefined,
  error: string | undefined,
}

export interface IBigWeatherDataObj {
  name: string | undefined,
  country: string | undefined,
  wind: number | undefined,
  clouds: string | undefined,
  temp: number | undefined,
  feels_like: number | undefined,
  pressure: number | undefined,
  humidity: number | undefined,
  temp_min: number | undefined,
  temp_max: number | undefined,
  visibility: number | undefined,
  icon: string | undefined,
  wind_deg: number | undefined
}

export interface DataTestReponse {
  data: [FullWeatherDataObj]
}

export interface FullWeatherDataObj {
  coord: { lon: number, lat: number },
  weather: [{ id: number, main: string, description: string, icon: string }],
  base: string,
  main: { temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number, sea_level?: number, grnd_level?: number },
  visibility: number,
  wind: { speed: number, deg: number, gust?: number },
  clouds: { all: number },
  dt: number,
  sys: { type: number, id: number, country: string, sunrise: number, sunset: number },
  timezone: number,
  id: number,
  name: string,
  cod: number
}
