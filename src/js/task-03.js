const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.setAttribute("style", "display: flex; gap: 20px; list-style: none");

const imgAddress = images.map((img) => {
  const liEls = document.createElement("li");
  const urlEls = document.createElement("img");
  urlEls.setAttribute("src", img.url);
  urlEls.setAttribute("alt", img.alt);
  urlEls.setAttribute("width", "100%");
  urlEls.setAttribute("height", "100%");

  liEls.insertAdjacentElement("afterbegin", urlEls);
  galleryEl.insertAdjacentElement("afterbegin", liEls);
});
