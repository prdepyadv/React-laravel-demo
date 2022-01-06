const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .extract(['react'])
    .styles('resources/css/style.css', 'public/css/all.css')
    .sass('resources/sass/app.scss', 'public/css', [
        //
]);