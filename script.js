"use strict";

const animals = {
  "Лев": {
    img: "https://i.pinimg.com/564x/63/a0/35/63a0357940e912b4511def04be3d2ad9.jpg",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur sunt sequi suscipit repellat inventore dolore ratione soluta adipisci voluptatibus? Consectetur corporis nisi aut quis pariatur quidem facere, quod maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione possimus, neque id, vel dignissimos amet dolor natus aliquid necessitatibus harum exercitationem. Exercitationem sapiente nulla tempora aut animi eligendi veniam!"
  },
  "Тигр": {
    img: "https://i.pinimg.com/564x/63/a0/35/63a0357940e912b4511def04be3d2ad9.jpg",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur sunt sequi suscipit repellat inventore dolore ratione soluta adipisci voluptatibus? Consectetur corporis nisi aut quis pariatur quidem facere, quod maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione possimus, neque id, vel dignissimos amet dolor natus aliquid necessitatibus harum exercitationem. Exercitationem sapiente nulla tempora aut animi eligendi veniam!"
  },
  "Зубр": {
    img: "https://i.pinimg.com/564x/63/a0/35/63a0357940e912b4511def04be3d2ad9.jpg",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur sunt sequi suscipit repellat inventore dolore ratione soluta adipisci voluptatibus? Consectetur corporis nisi aut quis pariatur quidem facere, quod maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione possimus, neque id, vel dignissimos amet dolor natus aliquid necessitatibus harum exercitationem. Exercitationem sapiente nulla tempora aut animi eligendi veniam!"
  },
  "Лиса": {
    img: "https://i.pinimg.com/564x/63/a0/35/63a0357940e912b4511def04be3d2ad9.jpg",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur sunt sequi suscipit repellat inventore dolore ratione soluta adipisci voluptatibus? Consectetur corporis nisi aut quis pariatur quidem facere, quod maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione possimus, neque id, vel dignissimos amet dolor natus aliquid necessitatibus harum exercitationem. Exercitationem sapiente nulla tempora aut animi eligendi veniam!"
  },
  "Пингвин": {
    img: "https://i.pinimg.com/564x/63/a0/35/63a0357940e912b4511def04be3d2ad9.jpg",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur sunt sequi suscipit repellat inventore dolore ratione soluta adipisci voluptatibus? Consectetur corporis nisi aut quis pariatur quidem facere, quod maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione possimus, neque id, vel dignissimos amet dolor natus aliquid necessitatibus harum exercitationem. Exercitationem sapiente nulla tempora aut animi eligendi veniam!"
  },
};

function openDescription(el){
  const parent = el.parentNode;
  const p = parent.querySelector("p");
  if (parent.classList.contains("show")) {
    p.setAttribute("style", `max-height: 3rem`);
    parent.classList.remove("show") 
    return;
  }

  const clone = p.cloneNode(true);
  clone.style.position = 'absolute';
  clone.style.opacity = 0;
  clone.style.maxHeight = '100%';
  parent.appendChild(clone);
  p.setAttribute("style", `max-height: ${clone.clientHeight}px`);
  parent.classList.add("show");
  clone.remove();
}

window.addEventListener("load", () => {
  for (const name in animals) {
    const info = animals[name];
    const parent = document.querySelector(".animals");

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", name);
    const img = document.createElement("img");
    img.setAttribute("src", info.img);
    img.setAttribute("alt", name);
    card.appendChild(img);
    const h2 = document.createElement("h2");
    h2.innerText = name;
    card.appendChild(h2);
    const p = document.createElement("p");
    p.innerText = info.descr;
    card.appendChild(p);
    const button = document.createElement("button");
    const button_span = document.createElement("span");
    button_span.innerHTML = "&#10095";
    button.setAttribute("onclick", `openDescription(this)`);
    button.innerText = "learn more";
    button.appendChild(button_span);
    card.appendChild(button);

    parent.appendChild(card);
  }
})

function clearResult() {
  const els = document.querySelectorAll(".search-wrapper ul li");
  els.forEach((el) => {
    el.remove();
  })
}
document.querySelector(".search").addEventListener("keyup", (event) => {
  const searchString = event.target.value.replace(/\s/g, '').toLowerCase();
  if (!searchString) return;
  const parent = document.querySelector(".search-wrapper ul");
  parent.querySelectorAll("li").forEach((el) => {
    el.remove();
  })

  let results = [];
  document.querySelectorAll(".card").forEach((card) => {
    if(card.id.toLowerCase().includes(searchString)) {
      results.push(card.id);
    }
  })
  results.map((el) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("onclick", `navigate(this)`);
    a.innerText = el;
    li.appendChild(a);
    parent.appendChild(li);
  })
  
  if (event.key == "Enter") {
      navigate({innerText: results[0]})
      clearResult();
  } 
})


window.onclick = function(event) {if (!event.target.matches('.search-wrapper ul')) clearResult()}

function navigate(el) {
  location.href = `#${el.innerText}`;
  document.getElementById(el.innerText).setAttribute("style", `outline-color: #0f81e6;`);
  setInterval(() => {
    document.getElementById(el.innerText).setAttribute("style", `outline-color: #0f82e600`);
  }, 1500);
}




const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});