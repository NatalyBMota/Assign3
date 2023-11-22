import '../style.css';
//import './Header.css';
import React from 'react';

/*
let year = [];
for (let i = 0; i <= 100; i++) {
  let yr = 2023 - i;
  year.push(yr);
  console.log(year[i]);
}
*/

const userBirthYear = 1996;
//const userInput = new Array(1996, 1190);
const currentTime = new Date();
const currentYear = currentTime.getFullYear();
let msg;

const holidayStyle = {
  border: '3px solid red',
  backgroundColor: 'lightgreen',
  color: 'red'
}

if ((currentYear !== userBirthYear) && (userBirthYear > 16)) {
  msg = 'CONGRATS! you can apply for driver license! =)';
  holidayStyle.color = 'blue';
} else {
  msg = 'Sorry! You can NOT apply for a driver license! =(';
  holidayStyle.color = 'orange';
}

function Header() {
  return <header>
    <h1 style={holidayStyle} className="header">{msg}</h1>
  </header>;
}

/*
function Header() {
  return <header>
    <select name="birthYear">
      <option value="1999">1999</option>
      <option value="1988">1998</option>
      <option value="1987">1997</option>
      <option value="1986">1996</option>
      <option value="1985">1995</option>
      <option value="1984">1994</option>
      <option value="1981">1993</option>
      <option value="1982">1992</option>
      <option value="1981">1991</option>
      <option value="1980">1990</option>
      <option value="1989">1989</option>
      <option value="1988">1988</option>
      <option value="1987">1987</option>
      <option value="1986">1986</option>
      <option value="1985">1985</option>
      <option value="1984">1984</option>
      <option value="1981">1983</option>
      <option value="1982">1982</option>
      <option value="1981">1981</option>
      <option value="1980">1980</option>
    </select>
    <h1 style={holidayStyle} className="randomStyle">{msg}</h1>
    <p>some text....</p>
    <button>click me</button>
  </header>;
}
*/
/*
function Header() {
  return <header>
    <h1 spellCheck={true} style={{ color: "red" }}>A message from DMV. Your age is: {currentYear - userBirthYear}</h1>
    <h1 style={holidayStyle} className="randomStyle">{msg}</h1>
    <p>some text....</p>
    <button>click me</button>
  </header>;
}
*/
//const imgSrc="https://images.freeimages.com/images/large-previews/400/bird-at-zoo-1579028.jpg";
//const imgSrc = "./images/driver.jpg";

// this is a component
/*
function Header() {
  return <header>
    <h1 title={'This is a heading'} spellCheck={true}>A message from DMV. Your age is: {currentYear - userBirthYear}</h1>
    <h1 style={{ color: "red" }}>{msg}</h1>
    <h1 style={holidayStyle} className="randomStyle">{msg}</h1>
    <img src={imgSrc} alt="Some alt" />
    <p>some text....</p>
    <button>click me</button>
  </header>;
}
*/
export default Header;