import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import Jockes from './components/Jockes';
import whiskerson from "./assets/whiskerson.png"; 
import fluffykins from "./assets/fluffykins.jpeg"; 
import felix from "./assets/felix.jpeg";
import pumpkin from "./assets/pumpkin.jpeg";
import card1 from "./assets/hero1.jpeg";
import card2 from "./assets/hero6.jpeg";
import card3 from "./assets/hero8.jpeg";
import star1 from "./assets/star1.jpeg";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card
          img={card1}
          star={star1}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
          status="SOLD OUT"
        />
        <Card
          img={card2}
          star={star1}
          rating="5.0"
          reviewCount={30}
          country="Rwanda"
          title="Learn Wedding Photography"
          price={125}
          status="ONLINE"
        />
        <Card
          img={card3}
          star={star1}
          rating="4.8"
          reviewCount={2}
          country="Canada"
          title="Group Mountain Biking"
          price={50}
          status="PENDING"
        />
      </div>

      <div className='contact'>
        <Contact 
          img={whiskerson} 
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact 
          img={fluffykins}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact 
          img={felix}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact 
          img={pumpkin}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
      
      <div className='jockes'>
        <Jockes
          setup="I got my daughter a fridge for her birthday." 
          punchline="I can't wait to see her face light up when she opens it." 
        />
        <Jockes
          setup="How did the hacker escape the police?" 
          punchline="He just ransomware!" 
        />
        <Jockes
          setup="Why don't pirates travel on mountain roads?" 
          punchline="Scurvy." 
        />
        <Jockes
          setup="Why do bees stay in the hive in the winter?" 
          punchline="Swarm." 
        />
        <Jockes
          setup="What's the best thing about Switzerland?" 
          punchline="I don't know, but the flag is a big plus!" 
        />
      </div>
    </>
  );
}

export default App;
