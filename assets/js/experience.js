AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Winter Intern",
    cardImage: "assets/images/experience-page/?.jpeg",
    place: "GMetriXR",
    time: "(Nov, 2021 - Jan, 2022)",
    desp: "DWOC winter of code mentee under Gmetri, no code xr platform for open source developers",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Soon to come",
    time: "(Mar - Aug, 2022)",
    desp: "Working/ applying to open source work for GSoC '22",
  },
  {
    title: "Society Head",
    cardImage: "assets/images/experience-page/IIITR.png",
    place: "IIIT Ranchi",
    time: "(2020 - Present)",
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
    image: "assets/images/experience-page/?.jpeg",
    desp: " A B2B idea for..",
  },
  {
    title: "Jack The Hack",
    subtitle: "Finalist",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Developed and lea..",
  },
  {
    title: " ",
    subtitle: " ",
    image: " ",
    desp: " ",
  },
  {
    title: " ",
    subtitle: " ",
    image: " ",
    desp: " ",
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
