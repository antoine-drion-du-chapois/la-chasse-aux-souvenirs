export const particlesConfig = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: ['#FFD700', '#FFA500'],
    },
    move: {
      enable: true,
      speed: 3,
    },
    number: {
      value: 100,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: ['star', 'image'],
      image: {
        // any path or url to your image that will be used as a particle
        src: 'https://img.icons8.com/?size=100&id=L3cE38cVqfoe&format=png&color=000000',
        // the pixel width of the image, you can use any value, the image will be scaled
        width: 100,
        // the pixel height of the image, you can use any value, the image will be scaled
        height: 100,
        // if true and the image type is SVG, it will replace all the colors with the particle color
        replaceColor: false,
      },
    },
    size: {
      value: { min: 3, max: 8 },
    },
  },
};
