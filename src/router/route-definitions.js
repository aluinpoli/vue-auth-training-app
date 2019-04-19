// List of routes, to be used inside the Router and in the navigation item
export const routes = {
  home: {
    name: 'home',
    meta: {
      title: 'Home',
      label: 'navigations.home',
      metaTags: [
        {
          name: 'description',
          content: 'The Home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The Home page of our example app.'
        }
      ]
    }
  },
  about: {
    name: 'about',
    meta: {
      title: 'About',
      label: 'navigations.about',
      metaTags: [
        {
          name: 'description',
          content: 'The About page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The About page of our example app.'
        }
      ]
    }
  },
  cpanel: {
    name: 'cpanel',
    meta: {
      title: 'Control Panel',
      label: 'navigations.cpanel'
    }
  },
  login: {
    name: 'login',
    meta: {
      // this item is only accessible if not logged in
      title: 'Login',
      auth: false,
      label: 'navigations.login'
    }
  }
}
