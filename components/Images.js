import Image from './Image';
import propTypes from 'prop-types';
import {Box} from '@mxjs/box';
import {Image as AImage} from 'antd';

const Images = ({images, ...props}) => (
  <AImage.PreviewGroup>
    {images.map(image => <Box key={image} mr2 mb2 display="inline">
      <Image src={image} {...props}/>
    </Box>)}
  </AImage.PreviewGroup>
);

Images.propTypes = {
  images: propTypes.array,
};

export default Images;
