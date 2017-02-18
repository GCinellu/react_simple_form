window.onhashchange = function() {
  route();
};

let routeConfig = {};

function route() {
  let page = window.location.hash.replace('#', '');

  try {
    if (routeConfig[page]) {
      routeConfig[page]();
    } else if (routeConfig['*']) {
      routeConfig['*']();
    }
  } catch (e) {
    console.log(e);
    // routeConfig['/error'](e);
  }
}

export function current() {
  return window.location.hash.replace('#', '');
}

export function redirect(page) {
  window.location.hash = page;
}

export function redirectToRoot() {
  window.location.hash = "/"
}

export function defineRoutes(routes) {
  routeConfig = routes;
  let initPage = window.location.pathname;
  if (!initPage) {
    window.location = '/';
  }
  route();
}