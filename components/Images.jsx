import Image from './Image';
import propTypes from 'prop-types';
import {Image as AImage} from 'antd';

const Images = ({images, ...props}) => (
  <AImage.PreviewGroup>
    {images.map(image => <div key={image} className="mr-2 mb-2 inline">
      <Image src={image} {...props}/>
    </div>)}
  </AImage.PreviewGroup>
);

Images.propTypes = {
  images: propTypes.array,
};

export default Images;
