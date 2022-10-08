import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyCryptoCurrencies from '../components/cryptohome';
import store from '../redux/configureStore';

it('Test MyCryptoCurrencies renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyCryptoCurrencies />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
