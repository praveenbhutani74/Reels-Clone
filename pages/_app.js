import '../styles/globals.css'
import './signup/signup.css'
import './login/login.css'
import '../compnents/Feeds.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthWrap from '../context/auth';
function MyApp({ Component, pageProps }) {
  return (
  
  <AuthWrap>
  <Component {...pageProps} />
  </AuthWrap>

  )
}

export default MyApp
