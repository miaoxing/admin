import {Image} from 'antd';
import propTypes from 'prop-types';

const TableImages = ({images, width = 60}) => (
  <Image.PreviewGroup>
    {images.map(image => <div key={image} className="mr-2 mb-2 inline">
      <Image width={width} src={image}/>
    </div>)}
  </Image.PreviewGroup>
);

TableImages.propTypes = {
  images: propTypes.array,
  width: propTypes.number,
};

export default TableImages;
