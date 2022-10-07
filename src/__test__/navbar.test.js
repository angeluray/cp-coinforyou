import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/navbar';

it('Test navbar renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
