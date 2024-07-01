import {Image as OrigImage} from 'antd';
import propTypes from 'prop-types';

const Image = ({src, size, objectFit = 'cover', ...props}) => {
  props.style || (props.style = {});
  props?.style.objectFit || (props.style.objectFit = objectFit);
  return <OrigImage src={src} width={size} height={size} {...props}/>;
};

Image.propTypes = {
  src: propTypes.string,
  size: propTypes.number,
  objectFit: propTypes.string,
  style: propTypes.object,
};

export default Image;
