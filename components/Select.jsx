import { useQuery } from '@mxjs/query';
import { Select as OriSelect } from '@mxjs/a-form';
import propTypes from 'prop-types';
import { url as Url } from '@mxjs/app';

const Select = ({ url, afterLoad, optionsKeys = [['data', 'items'], 'data'], ...props }) => {
  const { data } = useQuery(Url.appendLimit(url), {
    onSuccess: (ret) => {
      for (const key of optionsKeys) {
        if (Array.isArray(key) && ret?.[key[0]]?.[key[1]]) {
          ret.data = ret[key[0]][key[1]];
          break;
        }

        if (ret[key]) {
          ret.data = ret[key];
        }
      }

      afterLoad && afterLoad(ret);
    },
  });

  return (<OriSelect options={data} {...props}/>);
};

Select.propTypes = {
  url: propTypes.string,
  afterLoad: propTypes.func,
  optionsKeys: propTypes.array,
};

export default Select;
