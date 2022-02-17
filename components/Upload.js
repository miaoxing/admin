import Upload from '@mxjs/upload';
import $ from 'miaoxing';

/**
 * @experimental
 */
export default (props) => {
  return <Upload url={$.apiUrl('files', {type: 'image'})} {...props}/>;
};
