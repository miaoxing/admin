import 'plugins/app/modules/bootstrap';
import {setConfig} from '@fower/core';
import theme from '../modules/theme';

setConfig({
  theme: {
    colors: (() => {
      return {
        brand: theme.colors.primary,
        primary: theme.colors.primary,
      }
    })(),
  },
});
