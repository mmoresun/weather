
import renderer from 'react-test-renderer';
import WeatherCard from "./WeatherCard";
import { Provider } from 'react-redux';
import { store } from '../../store/store';

it('renders WeatherCard correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><WeatherCard /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });