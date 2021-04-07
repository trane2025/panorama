import '../styles/globals.scss';
import '../styles/fonts.scss';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/swiperGlobal.scss';

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
