# Electron

Startup:
`npm run e:serve`

What happens behind the scenes:
- React App is started as usual, on a port!
- In Parallel the electron start script is launched
- The Start Script first waits until the React process is started up, using the wait-on package
- The wait-on package checks until a PORT is opened, so the app is ready to get requests
- Then Electron wrapps around that process and takes over, mapping the browser UI to a DESKTOP UI
- Actually we delegate (!) now all User-events to the Chromium, but are unable to access Chromium itself and all its features
- This way we just get the UI for the Look & Feel!
- And on the other hand, because we electron is a Node Process, we can access the PC Filesystem
- So we can use the combined power of UI rendering and disk persistence

