const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Shader Programming in Computer Graphics",
    authors:
      "Dev Pant, Ken Perlin",
    conferences:
      "Shader Programming animation",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/hw1_ss.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
    codeLink: "https://github.com/Sigsev-Dev/Sigsev-Dev.github.io/blob/master/graphics/hw1.html",  // Add link to code
    demoLink: "https://Sigsev-Dev.github.io/graphics/hw1.html",  // Add link to demo
  },

  {
    title: "Experimenting with Ray tracing and some cool effects",
    authors:
      "Dev Pant, Ken Perlin",
    conferences:
      "Ray Tracing",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/hw2_ss.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
    codeLink: "https://github.com/Sigsev-Dev/Sigsev-Dev.github.io/blob/master/graphics/hw2.html",  // Add link to code
    demoLink: "https://Sigsev-Dev.github.io/graphics/hw2.html",  // Add link to demo
  },
  {
    title: "Pretty Physics on reflection and refraction with light on Quadric Objects",
    authors:
      "Dev Pant, Ken Perlin",
    conferences:
      "Quadric objects and matrix transformations with ray intersection",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/hw4_ss.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
    codeLink: "https://github.com/Sigsev-Dev/Sigsev-Dev.github.io/blob/master/graphics/hw4.html",  // Add link to code
    demoLink: "https://Sigsev-Dev.github.io/graphics/hw4.html",  // Add link to demo
  },
];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      codeLink,  // Link to code
      demoLink,  // Link to demo
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CODE AND DEMO BUTTONS-->
                    <div class="d-flex" style="margin-right:5%;">
                        <a href="${codeLink}" target="_blank">  <!-- Add link to Code button -->
                            <button class="button button-accent button-small text-right button-abstract " type="button">
                                CODE
                            </button>
                        </a>
                        <a href="${demoLink}" target="_blank">  <!-- Add link to Demo button -->
                            <button class="button button-accent button-small text-right button-abstract " type="button">
                                DEMO
                            </button>
                        </a>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
