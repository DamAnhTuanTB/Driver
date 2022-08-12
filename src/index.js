const defaultEndpoints = {
  'web-common': process.env.webcommonUrl,
  'web-debug': process.env.webdebugUrl,
};

const storageKey = 'mf_overrides';
const debugReactStorageKey = 'mf_show_react_devtools';

let isDebug = false;

window._endpoints = (function getEndpoints() {
  const storedOverride = sessionStorage.getItem(storageKey);
  if (storedOverride) {
    try {
      const parsedValue = JSON.parse(storedOverride);

      if (parsedValue) {
        isDebug = true;
        return parsedValue;
      }
    } catch (e) {}
  }
  return defaultEndpoints;
})();

if (isDebug) {
  import('@setel/web-debug/exposes/debug').then((d) => d.debug());
}

if (window.location.hash === '#debug') {
  import('@setel/web-debug/exposes/override').then((d) =>
    d.override({
      config: defaultEndpoints,
      onDone: (override, { showReactDevTools }) => {
        sessionStorage.setItem(storageKey, JSON.stringify(override));
        sessionStorage.setItem(debugReactStorageKey, String(showReactDevTools));
        window.location.hash = '';
        window.location.reload();
      },
    })
  );
} else {
  if (isDebug) {
    import('@setel/web-debug/exposes/debug')
      .then((d) => d.debug())
      .then((debugUtils) => {
        return bootstrapApp().then(() =>
          debugUtils.init({
            reactDevTools:
              sessionStorage.getItem(debugReactStorageKey) === 'true',
          })
        );
      });
  } else {
    bootstrapApp();
  }
}

function bootstrapApp() {
  return import(
    /* webpackChunkName: "bootstrap" */
    './bootstrap'
  ).then((d) => d.bootstrap());
}
