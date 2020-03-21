# Rdio

A clone of Rdio.com's official website.

![Screenshot](https://raw.githubusercontent.com/panteng/rdio/master/screenshot.jpg)

## Notes

Rdio.com was an online music streaming service, but was shut down years ago.

When I first saw Rdio's official website, I was impressed by its amazing parallax scrolling effect. I made a clone of its homepage as a practice.

One problem that bothered me was that scrolling with mouse in Chrome wasn't as smooth as that in Firefox. As a result, the parallax effect in Chrome looked very choppy. The Rdio.com's official website had the same issue in Chrome. I managed to find a polyfill - [Firefox-like-smooth-scroll-for-chrome](https://github.com/iahnn/Firefox-like-smooth-scroll-for-chrome).

Another problem was that parallax scrolling didn't work well with css background-image. After reading these two questions on StackOverflow -

1. [StackOverflow: Smoothing the parallax scrolling of a background image](http://stackoverflow.com/questions/15789026/smoothing-the-parallax-scrolling-of-a-background-image)

2. [StackOverflow: Is there an equivalent to background-size: cover and contain for image elements?](http://stackoverflow.com/questions/11670874/is-there-an-equivalent-to-background-size-cover-and-contain-for-image-elements)

I chose to use `<img>` instead of css background-image to display the albums' cover image.

## Dev

1.  Install dependencies.

        npm install

2.  Start dev server.

        npm run dev

3.  Navigate browser to `localhost:8080`.

## Prod

1.  In file `webpack.config.prod.js`, change `output.publicPath` to the actual public path in production environment.

2.  Run:

        npm run prod

## Licence

MIT
