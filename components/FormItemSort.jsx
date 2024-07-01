import {InputNumber} from 'antd';
import {FormItem} from '@mxjs/a-form';

export default (props) => {
  return (
    <FormItem label="顺序" name="sort" extra="大的显示在前面，按从大到小排列。" {...props}>
      <InputNumber precision={0} min={-10000} max={10000}/>
    </FormItem>
  );
};
