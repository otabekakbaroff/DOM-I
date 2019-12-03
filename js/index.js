const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

/////////////////////////////////////////////NAVIGATIONS/////////////////////////////////////
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav=document.querySelector("nav");
let navChildren=document.querySelectorAll("nav a");
navChildren[0].textContent=siteContent.nav["nav-item-1"];
navChildren[1].textContent=siteContent.nav["nav-item-2"];
navChildren[2].textContent=siteContent.nav["nav-item-3"];
navChildren[3].textContent=siteContent.nav["nav-item-4"];
navChildren[4].textContent=siteContent.nav["nav-item-5"];
let a=document.createElement("a");
a.innerHTML="AppendChild";
nav.appendChild(a);
let a2=document.createElement("a");
a2.textContent="PrependChild"
nav.prepend(a2);

for(let i=0; i<navChildren.length; i++){
  navChildren[i].style.color="DarkGreen";
}












// document.body.style.backgroundColor='red';
// let navChildren=document.querySelector("nav").children;
// let counter=0;
// Array.from(navChildren).forEach(function(item){
//   let newArray=[];
//   for(let x in siteContent.nav){
//     if(siteContent.nav[x]==="img/logo.png"){
//       break;
//     }
//     newArray.push(siteContent.nav[x]);
//   }
//   item.innerHTML=newArray[counter];
//   item.style.color="#00ff00";
//   counter++;
// });

//////////////////////////////////////////////////////////////////////////////////////////////








//////////////////////////////SECTION CLASS CTA///////////////////////////////////////////////
let h1=document.querySelector("h1");
// h1.innerHTML="DOM <br> IS <br> AWESOME";
h1.innerHTML=siteContent.cta['h1'];

let topImg=document.querySelector('.cta').lastElementChild;
topImg.src=siteContent.cta['img-src'];

let button=document.querySelector('button');
button.innerHTML=siteContent.cta['button'];

////////////////////////////////////////////////////////////////////////////////////////////






///////////////////////////MAIN CONTENT///////////////////////////////////////////////////
let features=document.querySelector(".top-content").firstElementChild.firstElementChild;
let featureParagraph=document.querySelector(".top-content").firstElementChild.lastElementChild;

features.innerHTML=siteContent["main-content"]['features-h4'];
featureParagraph.innerHTML=siteContent["main-content"]['features-content'];

let about=document.querySelector(".top-content").lastElementChild.firstElementChild;
let aboutParagraph=document.querySelector(".top-content").lastElementChild.lastElementChild;

about.innerHTML=siteContent["main-content"]['about-h4'];
aboutParagraph.innerHTML=siteContent["main-content"]['about-content'];

let midImage=document.getElementById("middle-img");
midImage.src=siteContent["main-content"]['middle-img-src'];

let services=document.querySelector('.bottom-content').firstElementChild.firstElementChild;
let servicesParagraph=document.querySelector('.bottom-content').firstElementChild.lastElementChild;

services.innerHTML=siteContent["main-content"]['services-h4'];
servicesParagraph.innerHTML=siteContent["main-content"]['services-content'];



let product=document.querySelector(".bottom-content").children[1].firstElementChild;
let productParagraph=document.querySelector(".bottom-content").children[1].lastElementChild;

product.innerHTML=siteContent["main-content"]['product-h4'];
productParagraph.innerHTML=siteContent["main-content"]['product-content'];




let vision=document.querySelector('.bottom-content').lastElementChild.firstElementChild;
let visionParagraph=document.querySelector('.bottom-content').lastElementChild.lastElementChild;


vision.innerHTML=siteContent["main-content"]['vision-h4'];
visionParagraph.innerHTML=siteContent["main-content"]['vision-content'];

////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////CONTACT////////////////////////////////////////////////

let contact=document.querySelector('.contact').children[0];
let paragraphOne=document.querySelector('.contact').children[1];
let paragraphTwo=document.querySelector('.contact').children[2];
let paragraphThree=document.querySelector('.contact').children[3];


contact.innerHTML=siteContent["contact"]['contact-h4'];
paragraphOne.innerHTML=siteContent["contact"]['address'];
paragraphTwo.innerHTML=siteContent["contact"]['phone'];
paragraphThree.innerHTML=siteContent["contact"]['email'];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////







///////////////////////////////////////////////FOOTER/////////////////////////////////////////////////////////////


let footer=document.querySelector("footer");
footer.innerHTML=siteContent["footer"]['copyright'];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



