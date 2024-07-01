import {FormItem} from '@mxjs/a-form';
import propTypes from 'prop-types';
import InputPrice from './InputPrice';

const FormInputPrice = ({inputProps, ...props}) => {
  return (
    <FormItem label="价格" name="price" {...props}>
      <InputPrice {...inputProps}/>
    </FormItem>
  );
};

FormInputPrice.propTypes = {
  inputProps: propTypes.object,
};

export default FormInputPrice;
