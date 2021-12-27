import Avatar from './Avatar';
import {render} from '@testing-library/react';

describe('Avatar', () => {
  test('default', () => {
    const {container} = render(<Avatar user={{}}/>);

    expect(container).toMatchSnapshot();
  });
});
