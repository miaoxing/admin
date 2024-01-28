import { Upload } from '@mxjs/a-upload';
import $ from 'miaoxing';

/**
 * @experimental
 */
export default (props) => {
  return <Upload url={$.apiUrl('upload', {type: 'image'})} {...props}/>;
};
