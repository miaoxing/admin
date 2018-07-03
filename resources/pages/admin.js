import App from 'vendor/miaoxing/app/modules/app';

const app = new App({
  importPage(plugin, controller, action) {
    return import('vendor/miaoxing/pas/resources/pages/admin/pas-departments/Index.js')
    // return import(
    //   /* webpackChunkName: "[request]" */
    //   /* webpackInclude: /resources\/pages/\/admin/ */
    //   /* webpackExclude: /loader-runner/ */
    //   `vendor/miaoxing/${plugin}/resources/pages/admin/${controller}/${action}.js`
    // );
  },
  pages: require.context('vendor/miaoxing', true, /^\.\/.*\/resources\/pages\/admin\/(.+?)\/(.+?)\.js$/, 'lazy')
});

app.run();
