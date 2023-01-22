import React from "react";
import Image1 from "../Assets/ape.jpeg";
import Image2 from "../Assets/vomit.jpeg";
import Image3 from "../Assets/bored.png";
import Image4 from "../Assets/chef.jpg";
import Image5 from "../Assets/ciga.jpg";
import Image6 from "../Assets/girl.jpeg";
import Image7 from "../Assets/girlhome.jpeg";
import Image8 from "../Assets/green.jpeg";
import Image9 from "../Assets/hatape.jpeg";
import Image10 from "../Assets/smoke.jpg";
import Image11 from "../Assets/skeleton.png";
import Image12 from "../Assets/smile.jpeg";
import Image13 from "../Assets/save.jpg";
import Image14 from "../Assets/run.jpeg";
import Image15 from "../Assets/monaape.jpeg";
import Image16 from "../Assets/paint.jpg";
import Image17 from "../Assets/Rectangle18.png";
import Image18 from "../Assets/Rectangle14-3.png";
import cart1 from "../Assets/cart1.jpeg";
import cart2 from "../Assets/cart2.jpg";
import cart3 from "../Assets/cart3.jpg";
import cart4 from "../Assets/cart4.jpeg";
import cart5 from "../Assets/cart5.png";
import cart6 from "../Assets/cart6.jpeg";
import cart7 from "../Assets/cart7.jpeg";
import cart8 from "../Assets/cart8.jpeg";
import cart9 from "../Assets/cart9.jpg";
import cart10 from "../Assets/cart10.jpg";
import cart11 from "../Assets/cart11.jpeg";
import cart12 from "../Assets/cart12.jpg";
import cart13 from "../Assets/cart13.jpg";
import cart14 from "../Assets/cart14.jpeg";
import cart15 from "../Assets/cart15.jpeg";

const date = new Date();
var now = new Date().getTime();

const DummyData = [
  {
    id: 1,
    title: "Smoking Ape",
    owner: "Sofia kheloud",
    price: 5.1,
    imageId: Image9,
    pic: cart1,
    image: Image18,
    countdown: new Date("Jan 5, 2027 11:37:25").getTime(),
    likes: Math.floor(666 * Math.random()),
  },
  {
    id: 2,
    title: "Extraterrestrial",
    owner: "Kulay00 poil",
    price: 4.3,
    imageId: Image1,
    pic: cart2,
    image: Image17,
    countdown: new Date("Jan 5, 2024 15:07:45").getTime(),
    likes: Math.floor(9093 * Math.random()),
  },
  {
    id: 3,
    title: "Rainbow Man",
    owner: "paul danger",
    price: 2.9,
    imageId: Image2,
    pic: cart3,
    image: Image16,
    countdown: new Date("Jan 5, 2024 3:27:55").getTime(),
    likes: Math.floor(1290 * Math.random()),
  },
  {
    id: 4,
    title: "MetaVerser",
    owner: "jaul Straffer",
    price: 3.1,
    imageId: Image3,
    pic: cart4,
    image: Image15,
    countdown: new Date("Jan 5, 2024 8:57:07").getTime(),
    likes: Math.floor(5000 * Math.random()),
  },
  {
    id: 5,
    title: "Artistic",
    owner: "de'ZukuVerse",
    price: 4.8,
    imageId: Image4,
    pic: cart5,
    image: Image14,
    countdown: new Date("Jan 5, 2024 5:43:15").getTime(),
    likes: Math.floor(1003 * Math.random()),
  },
  {
    id: 6,
    title: "black mamba",
    owner: "de'paul rio",
    price: 5.1,
    imageId: Image5,
    pic: cart6,
    image: Image13,
    countdown: new Date("Jan 5, 2024 10:47:59").getTime(),
    likes: Math.floor(700 * Math.random()),
  },
  {
    id: 7,
    title: "Abstract Nature",
    owner: "Last Igbo Man",
    price: 5.1,
    imageId: Image6,
    pic: cart7,
    image: Image10,
    countdown: new Date("Jan 5, 2024 12:27:11").getTime(),
    likes: Math.floor(14003 * Math.random()),
  },
  {
    id: 8,
    title: "Abstract jungation",
    owner: "Thor Rauffer",
    price: 5.1,
    imageId: Image7,
    pic: cart8,
    image: Image12,
    countdown: new Date("Jan 5, 2024 19:11:23").getTime(),
    likes: Math.floor(8796 * Math.random()),
  },
  {
    id: 9,
    title: "Green Lantern",
    owner: "james crypt",
    price: 5.1,
    imageId: Image8,
    pic: cart9,
    image: Image11,
    countdown: new Date("Jan 5, 2024 22:17:49").getTime(),
    likes: Math.floor(9003 * Math.random()),
  },
  {
    id: 10,
    title: "Jungle Man",
    owner: "vladmir putin",
    price: 5.1,
    imageId: cart10,
    pic: cart11,
    image: cart12,
    countdown: new Date("Jan 5, 2024 2:48:09").getTime(),
    likes: Math.floor(990 * Math.random()),
  },
  {
    id: 11,
    title: "Catty Ape",
    owner: "donald pump",
    price: 5.1,
    imageId: cart13,
    pic: cart14,
    image: cart15,
    countdown: new Date("Jan 5, 2024 11:53:01").getTime(),
    likes: Math.floor(903 * Math.random()),
  },
];

export default DummyData;
