import '../styles/globals.scss';
import '../styles/fonts.scss';
import 'swiper/swiper.scss';


import { Provider } from 'react-redux';
import { useStore } from '../redux/store';





export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
