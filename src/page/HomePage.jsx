import Mengapa from '../component/Mengapa'
import Home from './Home'
import Product from '../component/Product'
import Footer from '../component/Footer'
import Service from '../component/Service'

const HomePage = () => {
  return (
    <div>
      <Home />
      <Mengapa />
      <Product />
      <Service />
      <Footer />
    </div>
  )
}

export default HomePage
