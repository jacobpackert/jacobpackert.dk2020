import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const textStyle = {
  fontSize: '1.2rem',
};
const italicTextStyle = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
};

const Index = ({ location }) => (
  <Layout location={location} hidefooter>
    <SEO title='Tillykke MB 🎂' />
    <h1>Mehran Zandians persiske køkken</h1>
    <h3>
      Oplev det farverige persiske køkken i selskab med den kogebogsaktuelle Mehran
      Zandian. Lær at tilberede alt fra små delikate ”mazzeh” til kejserlige juvelris med
      aromatisk lamme-kebab, iranske pickles, auberginedip og meget mere.
    </h3>
    <StaticImage
      alt=''
      src='https://meyers.dk/media/10121/meyers_persisk_mehran_zandian.jpg?anchor=center&mode=crop&quality=80&width=1000&rnd=132164018790000000'
    />
    <ul>
      <li>18 deltagere</li>
      <li>5 timer </li>
      <li>Nørrebrogade 52 C, 2200 København N</li>
    </ul>
    <h2>BESKRIVELSE</h2>
    <p style={textStyle}>
      En persisk middag kan virke overdådig, nærmest teatralsk, med sine farverige
      risretter, grillet lam, gryderetter, dips, salater og søde sager. Ofte spiser man
      det hele nærmest samtidig, så der er god tid til at drikke og danse. Her lader vi
      dog dansen vige til fordel for en grundig indføring i det persiske køkken.
    </p>
    <h4>Hvad lærer du?</h4>
    <p style={textStyle}>
      Vi smager på persiske pickles som sprøde saltede babyagurker, syltede vilde
      skalotteløg og eddikesyltede hvidløg.
    </p>
    <p style={textStyle}>
      Du lærer at lave ”mâste moosir” – en aromatisk yoghurtdip med vilde skalotteløg, der
      er godt tilbehør til grillretter – som vi også kommer omkring – og vi laver en
      delikat og fyldig aubergine omelet.
    </p>
    <p style={textStyle}>
      Du lærer at lave en af de meste populære ”mazzeh” (små-ret) fra bjergene ved det
      kaspiske hav – ”zeytoon parvardeh” med oliven, friske krydderurter og syrlig
      granatæblemelasse.
    </p>
    <p style={textStyle}>
      Ris er ikke bare ris. Potentialet for smag og konsistens er enormt, når man
      behandler de løse og lange rissorter med den omhu og respekt, som er typisk for det
      persiske køkken. Vi tilbereder ”juvelris” – langtidsdampede, aromatiske ris med
      pistacienødder, safran, rosenvand, rosiner, blancheret appelsinskal m.m. Du lærer
      blandt andet at opnå en perfekt ”tah-dig” – en karamelliseret, velsmagende bund, som
      dannes ved den langsomme dampning.
    </p>
    <p style={textStyle}>
      Vi griller en variant af persisk lammekebab. Vi tilbereder andre klassiske retter
      som ”Zereshk polo ba morgh” – kylling i safransauce med berberis – og lammeragout
      med selleri og soltørret lime.
    </p>
    <p style={textStyle}>
      Søde sager skal der til, f.eks. ”toot”, som er morbærformet marcipankonfekt med
      rosenvand og pistacienødder, der hører det persiske nytår til, og ”Bastani akbar
      mashti” der er en safranis med orkiderod og rosenvand.
    </p>
    <p style={textStyle}>
      Bemærk: Menuen vil variere med sæsonen og Mehrans inspiration.
    </p>
    <h3>Hvad får du?</h3>
    <ul>
      <li>Et overdådigt persisk måltid</li>
      <li>Drikkevarer – vin, vand, te og kaffe – er inkluderet gennem hele kurset</li>
      <li>Opskrifter med hjem, så du kan genskabe retterne i dit eget køkken</li>
      <li>Omsorg fra værtinde og opvasker, så du kan koncentrere dig om madlavningen</li>
    </ul>
    <h2>Om Mehran Zandian</h2>
    <p style={italicTextStyle}>
      Mehran er autodidakt kok, grafisk designer og aktuel med kogebogen ”Mine persiske
      livretter” fra People’sPress, udgivet i 2018. Mehran kom til Danmark som 16-årig
      efter at have vokset op i 70’ernes Iran. Det var en tid, hvor iranske kvinder kunne
      cykle i bikini på promenaderne ved det kaspiske hav. Mehran har i Danmark drevet
      food truck med moderne persisk street food.
    </p>
    <h2>Tirsdag d. 12. januar kl. 17:00 - 22:00</h2>
    <br />
    <p>Tillykke med fødselsdagen, søde MB 🎂</p>
    <p>Kh din JP 😘</p>
  </Layout>
);

export default Index;
