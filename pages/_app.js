import '../styles/globals.scss';
import '../styles/fonts.scss';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/swiperGlobal.scss';
import NextNprogress from 'nextjs-progressbar';







export default function App({ Component, pageProps }) {

  return (
    <>
      <NextNprogress
        color="#ffd138"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ easing: 'ease', speed: 500 }}
      />
      <Component {...pageProps} />
    </>
  )
}
