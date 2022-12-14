const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "UI/UX",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Marketing officer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "Bill Smith",
    job: "sales executive",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];

var prevbtn = document.getElementById("prev-btn");
var nextbtn = document.getElementById("next-btn");
var randombtn = document.getElementById("random-btn");
var img = document.getElementById("img");
var writerName = document.getElementById("name");
var desgination = document.getElementById("desgination");
var info = document.getElementById("info");
let currentState = 0;
window.addEventListener("DOMContentLoaded", function () {
  let person = reviews[currentState];
  img.src = person.img;
  writerName.innerText = person.name;
  desgination.innerText = person.job;
  info.innerText = person.text;
});

prevbtn.addEventListener("click", function () {
  currentState--;
  if (currentState < 0) {
    currentState = reviews.length - 1;
  }
  let person = reviews[currentState];
  img.src = person.img;
  writerName.innerText = person.name;
  desgination.innerText = person.job;
  info.innerText = person.text;
});
nextbtn.addEventListener("click", function () {
  currentState++;
  if (currentState > reviews.length - 1) {
    currentState = 0;
  }
  let person = reviews[currentState];
  img.src = person.img;
  writerName.innerText = person.name;
  desgination.innerText = person.job;
  info.innerText = person.text;
});

randombtn.addEventListener("click", function () {
  let value = Math.floor(Math.random() * reviews.length);
  let person = reviews[value];
  img.src = person.img;
  writerName.innerText = person.name;
  desgination.innerText = person.job;
  info.innerText = person.text;
});
