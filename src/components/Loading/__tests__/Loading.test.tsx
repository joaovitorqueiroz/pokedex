import Loading from '../index';
import renderer from 'react-test-renderer';

describe('Loading component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
