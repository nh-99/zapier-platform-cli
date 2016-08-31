const authentication = {
  type: 'custom',
  // "test" could also be a function
  test: {
    url: 'https://{{bundle.authData.subdomain}}.example.com/api/accounts/me.json'
  },
  fields: [
    {key: 'subdomain', type: 'string', required: true, helpText: 'Found in your browsers address bar after logging in.'},
    {key: 'api_key', type: 'string', required: true, helpText: 'Found on your settings page.'}
  ]
};

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers['X-Api-Key'] = bundle.authData.api_key;
  return request;
};

const App = {
  // ...
  authentication: authentication,
  beforeRequest: [
    addApiKeyToHeader,
  ],
  // ...
};
