AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Researcher",
    cardImage: "assets/images/experience-page/nyu.jpg",
    place: "Predictive Analytics Lab, NYU",
    time: "(September, 2024 - Present)",
    desp: " Led a team of 10 students in conducting Real-Time Big Data Analytics for the 2024 elections, analyzing sentiment from over 1 million YouTube live comments, Reddit and Twitter posts, and Google Trends using targeted searches. Utilized Vader Sentiment Analysis and NLTK to perform various NLP tasks before, during, and after the debates. Findings were published in multiple articles and gained media attention, being featured in outlets such as Washington Square News",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/quest_mark.jpeg",
    place: "NASA + CUNY",
    time: "(May, 2024 - Present)",
    desp: "Working under NASA RIA project on AI for Climate Change analyzing time series data of high resolution remote sensing imagery. Developed a self-learning ensemble model and a customized neural network architecture for pixel and object level analysis on Land Use Land Cover Satellite dataset achieving a 63% accuracy so far with prospect of further enhancements.",
  },
  {
    title: "SDE Intern",
    cardImage: "assets/images/experience-page/GMetriXR.jpg",
    place: "GMetriXR",
    time: "(Nov, 2021 - Jan, 2022)",
    desp: "DWOC winter of code mentee under Gmetri, wrote Jobaid examples of structure codes for live in-XR recursive tree structures (Rjson) players with Typescript, html, AWS",
  },
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/KrypC.png",
    place: "KrypC",
    time: "(Mar - Aug, 2023)",
    desp: "Developed and deployed smart contracts on Ethereum and other blockchain platforms leveraging KrypC Web3 SDK(Solidity, JS).",
  },
  {
    title: "Summer Research Fellowship Programme",
    cardImage: "assets/images/experience-page/IISc.jpg",
    place: "Indian Institute of Science, Bangalore",
    time: "(May - July, 2022)",
    desp: "• Worked on the implementation of the paper: Scalable computation of Extremum Graphs. • Successfully implemented an optimized web based tool for visualization of deep volumetric rendering using ray casting algorithms and high quality rendering of Extremum Graphs. • Used Javascript, WebGL, WebGPU API, Paraview, Kitware Library.",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IISc.jpg",
    place: "Indian Institute of Science, Bangalore",
    time: "(July - September, 2022)",
    desp: "• Worked around the optimization in rendering of 3D nodes and arcs with the abstract properties written to it using the paraview writers and vtk.js and optimization of frames. • Added functionalities to the web tool for better visualization including the opacity functions to the volumetric rendering of the tubes and spherical implementation with improved lightning functions. • Implemented support for multiple file readers (converting any polydata to vtp).",
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
