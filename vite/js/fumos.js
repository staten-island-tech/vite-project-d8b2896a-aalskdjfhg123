
export const fumos = [
  {
    card: `<div class="card">
    <img src="/reimu1.jpg" alt="reimu v1" class="card-img">
      <div class="card-content">
        <p class="card-title">Reimu</p>
        <p class="card-description">$40</p>
      </div> `, //the card, this is the thing being inserted into the html
    name: "Reimu", //inserting the card would be possible with template literals, but it looks nicer as fumo.card, plus on a smaller scale like this I think it's alright
    //for larger and more complex projects template literals would probably be better
    version: 1,
    type: "regular",
    price: 40,  //these are used to sort the cards
  },

  {
    card: `<div class="card">
    <img src="/marisa1.jpg" alt="marisa v1" class="card-img">
      <div class="card-content">
        <p class="card-title">Marisa</p>
        <p class="card-description">$40</p>
      </div> `,
    name: "Marisa",
    version: 1,
    type: "regular",
    price: 40,
  },

  {
    card: `<div class="card">
    <img src="/suwako1.jpg" alt="suwako v1" class="card-img">
      <div class="card-content">
        <p class="card-title">Suwako</p>
        <p class="card-description">$40</p>
      </div> `,
    name: "Suwako",
    version: 1,
    type: "regular",
    price: 40
  },

  {
    card: `<div class="card">
    <img src="/satori deka.jpg" alt="satori deka" class="card-img">
      <div class="card-content">
        <p class="card-title">Satori(deka)</p>
        <p class="card-description">$110</p>
      </div> `,
    name: "Satori deka",
    version: 1,
    type: "deka",
    price: 110
  },
  {
    card: `<div class="card">
    <img src="/reimu1.5.jpg" alt="reimu v1.5" class="card-img">
      <div class="card-content">
        <p class="card-title">Reimu(ver.1.5)</p>
        <p class="card-description">$40</p>
      </div> `,
    name: "Reimu 1.5",
    version: 1.5,
    type: "regular",
    price: 40,
  },
  {
    card: `<div class="card">
    <img src="/marisa1.5.jpg" alt="marisa v1.5" class="card-img">
      <div class="card-content">
        <p class="card-title">Marisa(ver.1.5)</p>
        <p class="card-description">$40</p>
      </div> `,
    name: "Marisa 1.5",
    version: 1.5,
    type: "regular",
    price: 40,
  },
  {
    card: `<div class="card">
    <img src="/flandre deka.jpg" alt="flandre 1.5 deka" class="card-img">
      <div class="card-content">
        <p class="card-title">Flandre(deka ver. 1.5)</p>
        <p class="card-description">$110</p>
      </div> `,
    name: "Flandre deka 1.5",
    version: 1.5,
    type: "deka",
    price: 110
  },
  {
    card: `<div class="card">
    <img src="/shion1.jpg" alt="shion v1" class="card-img">
      <div class="card-content">
        <p class="card-title">Shion</p>
        <p class="card-description">$40</p>
      </div> `,
    name: "Shion",
    version: 1,
    type: "regular",
    price: 40,
  },
  {
    card: `<div class="card">
    <img src="/youmu strap.jpg" alt="youmu strap" class="card-img">
      <div class="card-content">
        <p class="card-title">Youmu(plush strap)</p>
        <p class="card-description">$20</p>
      </div> `,
    name: "Youmu strap",
    version: 0,
    type: "strap",
    price: 20,
  },
  {
    card: `<div class="card">
    <img src="/yukari strap.jpg" alt="yukari strap" class="card-img">
      <div class="card-content">
        <p class="card-title">Yukari(plush strap)</p>
        <p class="card-description">$20</p>
      </div> `,
    name: "Yukari strap",
    version: 0,
    type: "strap",
    price: 20,
  },
  {
    card: `<div class="card">
    <img src="/suwako1.5.jpg" alt="suwako v1.5" class="card-img">
      <div class="card-content">
        <p class="card-title">Suwako(ver.1.5)</p>
        <p class="card-description">$40</p>
      </div> `,
    name: "Suwako 1.5",
    version: 1.5,
    type: "regular",
    price: 40,
  },
  {
    card: `<div class="card">
    <img src="/sakuya deka.jpg" alt="sakuya deka" class="card-img">
      <div class="card-content">
        <p class="card-title">Sakuya(deka)</p>
        <p class="card-description">$110</p>
      </div> `,
    name: "Sakuya deka",
    version: 1,
    type: "deka",
    price: 110
  },

]

