import {Image} from 'antd';
import propTypes from 'prop-types';

const TableImage = ({src, width = 60}) => <Image src={src} width={width}/>;

TableImage.propTypes = {
  src: propTypes.string,
  width: propTypes.number,
};

export default TableImage;
