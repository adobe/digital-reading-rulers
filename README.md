# Digital Reading Rulers

This simple implementation of 4 digital reading rulers - Grey Bar, Lightbox, Shade, and Underline is motivated from our published work (publish date [April 2023 at SIGCHI](https://programs.sigchi.org/chi/2023/program/content/96587)).

Origial cursor contribution comes from [custom-cursor](https://github.com/holdmypotion/custom-cursors) for this implemenation. We did not use these exact rulers in our study, as we implemented them in our reading interface directly using HMTL/CSS/JavaScript. However, we highly recommend you fork this repository as these rulers can be easily used in any react project since this implementation relies on hooks and context.

## Building

Run the following commands. The server will start up on `localhost:3000`.

```
yarn install
yarn start
```

## Use it in your project

In order to use these rulers in your react project, you simply wrap your app in index.tsx/js with our `MouseContextProvider` after importing our components, context, and hooks into your project and App itself. See `App.tsx` as an example where we use the `Menu` component from [React-Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html) in order to switch between different rulers.

```
<React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
```

Happy reading!
