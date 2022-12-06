import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";


// const MOCK_WEATHER = [{ "coord": { "lon": 14.4208, "lat": 50.088 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 4.23, "feels_like": -0.55, "temp_min": 2.93, "temp_max": 6.11, "pressure": 1013, "humidity": 92 }, "visibility": 10000, "wind": { "speed": 7.2, "deg": 240 }, "clouds": { "all": 100 }, "dt": 1670327256, "sys": { "type": 2, "id": 2010430, "country": "UA", "sunrise": 1670309138, "sunset": 1670338875 }, "timezone": 3600, "id": 3067696, "name": "Kyiv", "cod": 200 }]

// global.fetch = jest.fn();

// const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

// it.todo('Should show a city name', () => {
//     mockFetch.mockResolvedValue({
//         json: () => Promise.resolve()
//     } as any)
//     render(<App />);
//     expect(screen.getByText('City/Region: Kyiv')).toBeInTheDocument();
// });

// it.todo('Should show an error');