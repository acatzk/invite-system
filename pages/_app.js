import './../styles/globals.css'
import Layout from './../layouts/default'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}
