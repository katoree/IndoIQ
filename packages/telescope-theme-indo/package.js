Package.describe({
  summary: "Telescope indo theme",
  version: '0.1.0',
  name: "telescope-theme-indo"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    ], ['client']);

});