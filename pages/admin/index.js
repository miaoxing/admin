import {useContext, useEffect} from 'react';
import {history} from '@mxjs/app';
import {PageContext} from '@mxjs/a-page';

const Index = () => {
  const {menus} = useContext(PageContext);

  useEffect(() => {
    const url = menus?.[0]?.url || menus?.[0]?.children?.[0]?.url || '';
    if (url) {
      history.replace(url);
    }
  }, [menus]);

  return '';
};

export default Index;
