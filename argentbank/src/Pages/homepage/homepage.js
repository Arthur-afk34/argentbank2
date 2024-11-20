import React from 'react';
import Banner from '../../Components/banner/banner';
import FeatureItems from '../../Components/Featureitems/Featureitems';
import Footer from '../../Components/Footer/Footer';
// Features Icon
import Iconmoney from '../../designs/img/icon-money.png';
import chatIcon from '../../designs/img/icon-chat.png';
import Iconsecurity from '../../designs/img/icon-security.png';
// Features title/text
const titreChat= "You are our #1 priority"
const textChat= "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
const titreMoney= "More savings means higher rates"
const textMoney= "The more you save with us, the higher your interest rate will be!"
const titreSecurity= "Security you can trust"
const textSecurity= "We use top of the line encryption to make sure your data and money is always safe."
export default function Home() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only"></h2>
        <FeatureItems
        iconUrl={chatIcon}
        title={titreChat}
        text={textChat}
        />
        <FeatureItems
        iconUrl={Iconmoney}
        title={titreMoney}
        text={textMoney}
        />
        <FeatureItems
        iconUrl={Iconsecurity}
        title={titreSecurity}
        text={textSecurity}
        />
      </section>
      <Footer />
    </main>
    
  )
}