AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "SDE Intern",
    cardImage: "assets/images/experience-page/quest_mark.jpeg",
    place: "GMetriXR",
    time: "(Nov, 2021 - Jan, 2022)",
    desp: "DWOC winter of code mentee under Gmetri, wrote Jobaid examples of structure codes for live in-XR recursive tree structures (Rjson) players with Typescript, html, AWS",
  },
  {
    title: "Software Engineering Intern",
    cardImage: "KrypC.png",
    place: "KrypC",
    time: "(Mar - Aug, 2023)",
    desp: "Developed and deployed smart contracts on Ethereum and other blockchain platforms leveraging KrypC Web3 SDK(Solidity, JS).",
  },
  {
    title: "Summer Research Fellowship Programme",
    cardImage: "IISc.jpg",
    place: "Indian Institute of Science, Bangalore",
    time: "(May - July, 2022)",
    desp: "Implemented an optimized web based tool for visualization of deep volumetric rendering using ray casting algorithms and high quality rendering of Extremum Graphs using React, JavaScript, HTML and CSS.",
  },
  {
    title: "Research Intern",
    cardImage: "IISc.jpg",
    place: "Indian Institute of Science, Bangalore",
    time: "(Aug - Sept, 2022)",
    desp: "Developed and deployed smart contracts on Ethereum and other blockchain platforms leveraging KrypC Web3 SDK(Solidity, JS).",
  },
  {
    title: "Research Intern",
    cardImage: "NYU.png",
    place: "Indian Institute of Science, Bangalore",
    time: "(Aug - Sept, 2022)",
    desp: "Developed and deployed smart contracts on Ethereum and other blockchain platforms leveraging KrypC Web3 SDK(Solidity, JS).",
  },
  {
    title: "Society Head",
    cardImage: "assets/images/experience-page/IIITR.png",
    place: "IIIT Ranchi",
    time: "(May 2020 - May 2023)",
    desp:"<li>Community Coordinator for Society of Blockchain-crypto-cyber_security @ House of Geeks , IIIT Ranchi</li><li> Member of community of Competitve Coding @ house of Geeks, IIIT Ranchi</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "TDefi Bizthon",
    subtitle: "Finalist",
    image: "assets/images/experience-page/quest_mark.jpeg",
    desp: " A B2B idea for a high-level third-party application that can initiate secure communication among various banks’ open APIs whilesolving the problem of on-demand identity management along with removing the issuerelated to security in open banking systems.",
  },
  {
    title: "Jack The Hack",
    subtitle: "Finalist",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Developed and lead a team on the project for supply chain asset tracker using Hyperledger Fabric with QR code integration.",
  },
  {
    title: "Smart India Hackathon",
    subtitle: "Finalist",
    image: "assets/images/experience-page/SIH.png",
    desp: " Secure Online meetings for organisations for restricted access integrating MAC ad. and IP check passed through SHA256 with a multi language Neural Network NSFW chat moderation system for the chat app.",
  }

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
