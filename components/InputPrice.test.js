import InputPrice from './InputPrice';
import {render} from '@testing-library/react';

describe('InputPrice', () => {
  test('default', () => {
    const {container} = render(<InputPrice/>);

    expect(container).toMatchSnapshot();
  });
});
