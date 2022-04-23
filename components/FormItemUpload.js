import {FormItem} from '@mxjs/a-form';
import Upload from './Upload';
import propTypes from 'prop-types';

/**
 * @experimental
 */
const FormItemUpload = ({max, required, ...props}) => {
  let rules = [];
  if (required) {
      rules.push({required: true, message: '请上传${label}'});
  }

  return (
    <FormItem extra="支持.jpg .jpeg .bmp .gif .png格式照片" required={required} rules={rules} {...props}>
      <Upload max={max}/>
    </FormItem>
  );
};

FormItemUpload.propTypes = {
  max: propTypes.number,
  required: propTypes.bool,
};

export default FormItemUpload;
