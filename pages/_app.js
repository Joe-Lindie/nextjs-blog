import "../styles/global.css"

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App

// How does this apply global styles to every page?
// Why do you have to import them to _app.js?
// Not completely clear about the component syntax
