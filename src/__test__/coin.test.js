import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyCoin from '../components/coin/coin';
import store from '../redux/configureStore';

it('Test MyCoin renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyCoin />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
