import $ from 'miaoxing';
import ProDescriptions from '@ant-design/pro-descriptions';
import {useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import propTypes from 'prop-types';

const Descriptions = ({url, labelSpan = 4, ...props}) => {
  const width = labelSpan / 24 * 100 + '%';

  const [dataSource, setDataSource] = useState({});
  useAsyncEffect(async () => {
    setDataSource({});

    const {ret} = await $.get({
      url,
      loading: true,
    });
    if (ret.isErr()) {
      $.ret(ret);
      return;
    }

    setDataSource(ret.data);
  }, [url]);

  return (
    <ProDescriptions
      dataSource={dataSource}
      column={1}
      labelStyle={{
        justifyContent: 'end',
        flex: '0 0 ' + width,
        maxWidth: width,
      }}
      {...props}
    />
  );
};

Descriptions.Item = ProDescriptions.Item;

Descriptions.propTypes = {
  url: propTypes.string,
  labelSpan: propTypes.number,
};

// @experimental
export default Descriptions;
