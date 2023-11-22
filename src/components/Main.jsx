import '../style.css'
//import './Main.css';

import React from 'react';
import Table from './Table.jsx';

const image = {
  src: "images/driver.jpg",
  alt: "image of driving",
  title: "lady driving a car",
  id: "drivingPic"
};

function Main() {
  return <main>
    <img src={image.src} alt={image.alt} title={image.title} id={image.id} />
    <Table />
  </main>;
}

/*
let imgSource = "images/driver.jpg";

function Main() {
  return <main>
    <div id="picture">
      <img src={imgSource} alt="image of driving" />
    </div>
    <Table />
  </main>;
}
*/
export default Main;