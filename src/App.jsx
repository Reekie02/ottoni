import Layout from './Layout/Layout'
import Hero from './section/Hero'
import Menu from './section/Menu'
import Philosophy from './section/Philosophy'
import OttantaFame from './section/OttantaFame'
import Spazio from './section/Spazio'
import Visita from './section/Visita'
import Footer from './section/Footer'


function App() {

  return (
    <>
      <Layout>
        <Hero />
        <Philosophy />
        <Menu />
        <OttantaFame />
        <Spazio />
        <Visita />
        <Footer />
      </Layout>
    </>
  )
}

export default App
