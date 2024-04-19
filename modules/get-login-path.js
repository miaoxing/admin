import appendUrl from 'append-url';

export default (url, location = window.location) => {
  return appendUrl(url || 'admin/login', {
    next: location.pathname + location.search + location.hash,
  });
};
