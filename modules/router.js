import React from 'react';
import { createBrowserRouter, createHashRouter, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import { app, event } from '@mxjs/app';
import { NotFound } from '@mxjs/a-ret';
import { PageLoading } from '@mxjs/a-loading';
import Layout from '../components/Layout';
import RouterStore from '../components/RouterStore';
import ErrorBoundary from '../components/ErrorBoundary';

const importPage = async (page) => {
  return page ? page.import() : NotFound;
};

const getLayout = (page, defaultLayout) => {
  if (page && typeof page.layout !== 'undefined') {
    if (page.layout) {
      return loadable(() => page.layout, {
        fallback: <PageLoading/>,
      });
    } else {
      return React.Fragment;
    }
  } else {
    return defaultLayout;
  }
};

// 缓存加载过的页面，以便 modal 页面不会重新加载
const loadedPages = {};

const LoadableComponent = () => {
  const location = useLocation();
  const page = app.matchLocation(location);

  if (!page) {
    return <NotFound/>;
  }

  event.trigger('pageLoad', { location });

  const key = location.pathname.replace(/\/+$/, '') + location.search;
  if (!loadedPages[key]) {
    loadedPages[key] = loadable(() => importPage(page), {
      fallback: <PageLoading/>,
    });
  }

  const LoadableComponent = loadedPages[key];
  const PageLayout = getLayout(page, Layout);
  return (
    <PageLayout>
      <RouterStore/>
      <ErrorBoundary>
        <LoadableComponent/>
      </ErrorBoundary>
    </PageLayout>
  );
};

const createRouter = 'hash' === window.miaoxing?.routerMode ? createHashRouter : createBrowserRouter;

const router = createRouter([
  {
    path: '*',
    element: <LoadableComponent/>,
  },
]);

export default router;