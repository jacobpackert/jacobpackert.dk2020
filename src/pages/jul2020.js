import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ChristmasLayout from '../components/ChristmasLayout';
import SEO from '../components/SEO';
import Snow from '../components/Snow';

const italicTextStyle = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
};

export default function Jul2020({ location }) {
  const [showSnow, setShowSnow] = useState(true);

  function toggleSnow() {
    setShowSnow(!showSnow);
  }

  return (
    <>
      {showSnow && <Snow />}
      <ChristmasLayout location={location} hidefooter>
        <SEO title='Glædelig jul' />
        <h1>Glædelig jul</h1>
        <h3>
          Kære mor og far, <br />
          en lille gave fra os til jer.
          <br />
          Et ophold i skønne omgivelser med plads til afslapning, oplevelser og gåture på
          strand og i skov i smukke Hornbæk.
        </h3>
        <h2>Hotel Hornbækhus</h2>
        <StaticImage
          alt=''
          src='https://www.hornbaekhus.com/wp-content/uploads/2018/08/hornbaekhus.jpg'
        />

        <p style={italicTextStyle}>
          Hotel Hornbækhus ligger 50 meter fra sandstranden i Hornbæk og kan vel næsten
          kaldes et badehotel. Der serveres dagligt morgenmad i hotellets hyggelige
          restaurant.
        </p>
        <StaticImage
          alt=''
          src='https://www.hornbaekhus.com/wp-content/uploads/2019/11/Hornb%C3%A6k_Borde_46-1500x1000.jpg'
        />

        <p style={italicTextStyle}>
          Der kan bestilles spisning hver aften kl. 19, og efter maden kan man nyde vin
          eller kaffe i pejsestuen.
        </p>
        <StaticImage
          alt=''
          src='https://www.hornbaekhus.com/wp-content/uploads/2018/08/Galleri-16-1030x687.jpg'
        />

        <p style={italicTextStyle}>
          Om dagen byder Hornbæk by på hyggelige oplevelser i små butikker, smuk udsigt
          over Kattegat på stranden eller ved havnen, samt naturoplevelse blandt høje
          træer i skønne Hornbæk Plantage.
        </p>
        <StaticImage
          alt=''
          src='https://www.hornbaekhus.com/wp-content/uploads/2018/08/Hornbaek-1.jpg'
        />

        <p style={italicTextStyle}>
          Gavekortet gælder i 24 måneder og svarer til en overnatning for 2 personer i et
          dobbeltværelse incl. morgenmad.
        </p>

        <StaticImage
          alt=''
          src='https://www.hornbaekhus.com/wp-content/uploads/2018/08/Galleri-9-1030x687.jpg'
        />
        <StaticImage
          alt=''
          src='https://cf.bstatic.com/images/hotel/max1280x900/171/171577706.jpg'
        />

        <h3>
          Glædelig jul og de kærligste hilsener fra Leo, Anna, Jesper, Maria og Jacob
        </h3>
        <button
          type='button'
          onClick={toggleSnow}
          style={{ color: '#ff9999', cursor: 'pointer', border: 'none', fontSize: 12 }}
        >
          Slå sne {showSnow ? 'fra' : 'til'}
        </button>
      </ChristmasLayout>
    </>
  );
}
