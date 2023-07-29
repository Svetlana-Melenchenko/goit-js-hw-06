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

// const galleryList = document.querySelector(".gallery");

// galleryList.style.display = "flex";
// galleryList.style.flexWrap = "wrap";
// galleryList.style.justifyContent = "center";
// galleryList.style.listStyle = "none";
// galleryList.style.padding = "0";

// images.forEach((image) => {
//   const listItem = document.createElement("li");

//   listItem.classList.add("gallery-item");
//   console.dir(listItem);

//   const imgElem = document.createElement("img");
//   imgElem.src = image.url;
//   imgElem.alt = image.alt;

//   listItem.style.margin = "10px";
//   listItem.style.width = "300px";
//   listItem.style.height = "300px";
//   listItem.style.overflow = "hidden";

//   imgElem.style.width = "100%";
//   imgElem.style.height = "100%";
//   imgElem.style.objectFit = "cover";

//   listItem.appendChild(imgElem);

//   galleryList.appendChild(listItem);
//   console.dir(galleryList);
// });

const galleryList = document.querySelector(".gallery");
galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.justifyContent = "center";
galleryList.style.listStyle = "none";
galleryList.style.padding = "0";

const galleryItems = images.map((image) => {
  return `
    <li class="gallery-item" style="margin: 10px; width: 250px; height: 250px; overflow: hidden;">
      <img src="${image.url}" alt="${image.alt}" style="width: 100%; height: 100%; object-fit: cover;">
    </li>
  `;
});

galleryList.insertAdjacentHTML("beforeend", galleryItems.join(""));
