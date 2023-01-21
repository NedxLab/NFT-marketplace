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

const date = new Date();
var now = new Date().getTime();

const DummyData = [
  {
    id: 1,
    title: "Abstract Nature",
    owner: "Collins Olads",
    price: 5.1,
    imageId: Image9,
    image: Image18,
    countdown: new Date("Jan 5, 2027 11:37:25").getTime(),
    likes: 1056,
  },
  {
    id: 2,
    title: "Extraterrestrial",
    owner: "Kulay00",
    price: 4.3,
    imageId: Image1,
    image: Image17,
    countdown: new Date("Jan 5, 2024 15:07:45").getTime(),
    likes: 2290,
  },
  {
    id: 3,
    title: "Cute Animal",
    owner: "Django00",
    price: 2.9,
    imageId: Image2,
    image: Image16,
    countdown: new Date("Jan 5, 2024 3:27:55").getTime(),
    likes: 124,
  },
  {
    id: 4,
    title: "MetaVerser",
    owner: "Straffer",
    price: 3.1,
    imageId: Image3,
    image: Image15,
    countdown: new Date("Jan 5, 2024 8:57:07").getTime(),
    likes: 234,
  },
  {
    id: 5,
    title: "Artistic",
    owner: "ZukuVerse",
    price: 4.8,
    imageId: Image4,
    image: Image14,
    countdown: new Date("Jan 5, 2024 5:43:15").getTime(),
    likes: 514,
  },
  {
    id: 6,
    title: "Abstract Nature",
    owner: "Collins Olads",
    price: 5.1,
    imageId: Image5,
    image: Image13,
    countdown: new Date("Jan 5, 2024 10:47:59").getTime(),
    likes: 423,
  },
  {
    id: 7,
    title: "Abstract Nature",
    owner: "Collins Olads",
    price: 5.1,
    imageId: Image6,
    image: Image10,
    countdown: new Date("Jan 5, 2024 12:27:11").getTime(),
    likes: 423,
  },
  {
    id: 8,
    title: "Abstract Nature",
    owner: "Collins Olads",
    price: 5.1,
    imageId: Image7,
    image: Image12,
    countdown: new Date("Jan 5, 2024 19:11:23").getTime(),
    likes: 423,
  },
  {
    id: 9,
    title: "Abstract Nature",
    owner: "Collins Olads",
    price: 5.1,
    imageId: Image8,
    image: Image11,
    countdown: new Date("Jan 5, 2024 22:17:49").getTime(),
    likes: 403,
  },
];

export default DummyData;
