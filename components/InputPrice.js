import {InputNumber} from 'antd';

export default (props) => {
  return (
    <InputNumber min={0.01} max={1000000000} precision={2} controls={false} {...props}/>
  );
};
