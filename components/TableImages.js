import {Image} from 'antd';
import propTypes from 'prop-types';
import {Box} from '@mxjs/box';

const TableImages = ({images, width = 60}) => (
  <Image.PreviewGroup>
    {images.map(image => <Box key={image} mr2 mb2 display="inline">
      <Image width={width} src={image}/>
    </Box>)}
  </Image.PreviewGroup>
);

TableImages.propTypes = {
  images: propTypes.array,
  width: propTypes.number,
};

export default TableImages;
