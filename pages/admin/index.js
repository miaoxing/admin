import {useContext, useEffect} from 'react';
import {PageContext} from '@mxjs/a-page';
import $ from 'miaoxing';

const Index = () => {
  const {menus} = useContext(PageContext);

  useEffect(() => {
    const url = menus?.[0]?.url || menus?.[0]?.children?.[0]?.url || '';
    if (url) {
      $.to(url, {replace: true});
    }
  }, [menus]);

  return '';
};

export default Index;
