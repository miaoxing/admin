import 'plugins/app/modules/bootstrap';
import {setConfig} from '@fower/core';
import theme from '../modules/theme';
import {wei} from '@mxjs/app';
import config from 'config';
// 提前引入 @fower/preset-web
import '@fower/react';

wei.setConfigs(config);

setConfig({
  theme: {
    colors: {
      brand: theme.colors.primary,
      primary: theme.colors.primary,
    },
  },
});
