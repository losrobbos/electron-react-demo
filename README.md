# React Electron

Startup:
`npm run serve`

What happens behind the scenes when we start the Electron App:

- React App is started as usual, on a port (3000)
- In parallel electron is launched
- The start script first waits until the React process is started up, using the wait-on package
- The wait-on package checks until the app PORT is opened and ready to receive requests
- Then Electron start the main.js file (=> /electron/main.js) which "wraps around" the React process
- It renders the React app inside Chromium and displays it inside a DESKTOP like UI window
- The main electron process provides functions that can access the system (e.g. filesystem) to the React app
- These functions are shared in a preload script (=> /electron/preload.js) using a so called "Context Bridge"
- So this way the React app can trigger node functions of the main.js file, which is able to access the PC and its files

Now we can use the combined power of UI windows like in normal desktop apps and disk persistence for our user data, without processing data in any cloud / backend.

