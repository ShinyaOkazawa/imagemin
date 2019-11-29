const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminWebp = require('imagemin-webp');

imagemin(['dist/**/*.{jpg,png,gif,webp}'], {
  plugins: [
    imageminMozjpeg({
      quality: 60
    }),
    imageminPngquant({
      quality: [0.65, 0.8]
    }),
    imageminGifsicle(),
    imageminWebp({quality: 50})
  ]
}).then(() => {
  console.log('Images optimized');
});