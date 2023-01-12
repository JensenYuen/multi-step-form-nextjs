import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { PageContextProvider } from '../context/page-context'

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <PageContextProvider
        childern={<Component {...pageProps} />}
      />
    </>
  );
}

export default App;
