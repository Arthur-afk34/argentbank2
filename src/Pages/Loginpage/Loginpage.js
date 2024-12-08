import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Formulaire from '../../components/loginform/Loginform'

/**
 * The Connexion Page
 * with header,
 * form to connect at your personnal espace
 * and footer of Argent Bank
 * @component
 */
function Connexion () {
  return (
    <div className='connexion'>
      <Header />
      <main>
        <Formulaire />
      </main>
      <Footer />
    </div>
  )
}

export default Connexion