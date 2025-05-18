
// Массив жанров для фильтрации
export const categories = [
  "приключения",
  "фэнтези",
  "комедия",
  "драма",
  "романтика",
  "научная фантастика",
  "боевик",
  "сверхъестественное",
  "школа",
  "психология"
];

// Данные о комиксах
export const comicsData = [
  {
    id: 1,
    title: "Моя геройская академия",
    image: "https://m.media-amazon.com/images/I/81Ta0OSlPZL._AC_UF1000,1000_QL80_.jpg",
    genres: ["приключения", "боевик", "фэнтези"],
    description: "История о юноше Изуку Мидории, который родился без сверхспособностей в мире, где 80% населения обладает ими. Несмотря на это, он мечтает стать величайшим героем.",
    popular: true,
    new: false,
    pages: [
      "https://cm.blazefast.co/57/5b/575b1d8c89a8ee57be47e183c06a6c4a.jpg",
      "https://cm.blazefast.co/11/87/11872438f5a0b48281981dbacefbcad5.jpg",
      "https://cm.blazefast.co/ce/45/ce4574fa9b6cacf5d79f3b2c05d8fe65.jpg",
      "https://cm.blazefast.co/9e/32/9e32f1ab4d5c9e7e1ed2d4f84a570fb8.jpg"
    ]
  },
  {
    id: 2,
    title: "Токийский гуль",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0273e80242d80b0e5c6c4399f5f707e6.jpe",
    genres: ["боевик", "психология", "сверхъестественное"],
    description: "В Токио существуют гули — существа, питающиеся человеческой плотью. Студент Канеки Кен случайно знакомится с девушкой-гулем. После инцидента его жизнь кардинально меняется.",
    popular: false,
    new: true,
    pages: [
      "https://cm.blazefast.co/c5/04/c504126e7227166cc18c80b70f844400.jpg",
      "https://cm.blazefast.co/7a/c2/7ac2f0aec8ed280c30eaa9a9bc6c9add.jpg",
      "https://cm.blazefast.co/7c/c5/7cc5c2e5c50c3b3559f76bc4d7e7f73a.jpg",
      "https://cm.blazefast.co/62/64/6264fd4fa0e406dc5a1fa7517a10e507.jpg"
    ]
  },
  {
    id: 3,
    title: "Клинок, рассекающий демонов",
    image: "https://img1.ak.crunchyroll.com/i/spire3/1d951bce3cd34ebd9c0dec5c362343741633897077_full.jpg",
    genres: ["боевик", "сверхъестественное", "приключения"],
    description: "После того, как его семья была убита демонами, а сестра превратилась в демона, Танджиро Камадо становится истребителем демонов, чтобы вернуть сестре человеческий облик.",
    popular: true,
    new: true,
    pages: [
      "https://cm.blazefast.co/49/81/4981fb66ab6f5c007ca66c34dfb4673d.jpg",
      "https://cm.blazefast.co/f2/4c/f24cc1a5e0d79eaa9e3e5a0a047cd3c3.jpg",
      "https://cm.blazefast.co/e2/aa/e2aa8c5ea6d671e23ff097c298adb68d.jpg",
      "https://cm.blazefast.co/12/36/1236214afddea9c61cbc0c2cf814a0e4.jpg"
    ]
  },
  {
    id: 4,
    title: "Атака титанов",
    image: "https://m.media-amazon.com/images/M/MV5BMGY3Mzg3M2UtNzYxNi00ZDYzLTlhMTQtMjkzZTA2MWQ2NTMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    genres: ["боевик", "драма", "фэнтези"],
    description: "Человечество находится на грани исчезновения из-за гигантских существ, пожирающих людей. Eren Yeager и его друзья вступают в борьбу за выживание после трагедии в родном городе.",
    popular: true,
    new: false,
    pages: [
      "https://cm.blazefast.co/48/d1/48d1e6e4e3e068aac57a6c09621d0241.jpg",
      "https://cm.blazefast.co/a9/0c/a90c708cc3a06ed5ad38f51a0e7e0cdb.jpg",
      "https://cm.blazefast.co/9a/f4/9af425a4db6eabd4386c09e60337025c.jpg",
      "https://cm.blazefast.co/d1/4e/d14ec35ee41fd7fb6451ddf5be97fc84.jpg"
    ]
  },
  {
    id: 5,
    title: "Человек-Бензопила",
    image: "https://m.media-amazon.com/images/I/81s8xJUzWGL._AC_UF1000,1000_QL80_.jpg",
    genres: ["боевик", "психология", "сверхъестественное"],
    description: "Главный герой Денджи заключает контракт с демоном-бензопилой и обретает способность превращаться в человека-бензопилу, чтобы сражаться с демонами.",
    popular: false,
    new: true,
    pages: [
      "https://cm.blazefast.co/82/c9/82c99b65ad81fab38ef8e9fa0a332dc9.jpg",
      "https://cm.blazefast.co/b4/b0/b4b0f48094680dab8b1d54eb4d17d748.jpg",
      "https://cm.blazefast.co/8c/50/8c502b8518f9e6e4f6d82ec5e9b1cd64.jpg",
      "https://cm.blazefast.co/3c/44/3c44a8b1a2a44d6b6c98c30e42d7c173.jpg"
    ]
  },
  {
    id: 6,
    title: "Ванпанчмен",
    image: "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    genres: ["комедия", "боевик", "научная фантастика"],
    description: "История о Сайтаме, супергерое, который может победить любого противника одним ударом, но страдает от скуки из-за отсутствия достойных соперников.",
    popular: true,
    new: false,
    pages: [
      "https://cm.blazefast.co/95/a9/95a95ad04bc78e6a7ca5e62dd9dc1a18.jpg",
      "https://cm.blazefast.co/a7/b9/a7b9cf4e5d1e01a9844eff901c957963.jpg",
      "https://cm.blazefast.co/65/52/6552a3fe3ea81e7733a144a5f2e15c80.jpg",
      "https://cm.blazefast.co/a0/14/a014caaf54d444bcb1e08a865c5a9bfe.jpg"
    ]
  },
  {
    id: 7,
    title: "Наруто",
    image: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["приключения", "боевик", "фэнтези"],
    description: "История молодого ниндзя Наруто Узумаки, который мечтает стать Хокаге — сильнейшим ниндзя и лидером своей деревни.",
    popular: true,
    new: false,
    pages: [
      "https://cm.blazefast.co/e4/fa/e4fa2d2ac3e2fe3fc0e003e0d8afb7b0.jpg",
      "https://cm.blazefast.co/76/7b/767be36a5b0f09a9b23b9a956d82c9e8.jpg",
      "https://cm.blazefast.co/f7/ca/f7ca8257e04cf9a7a4c5f536c954c9b3.jpg",
      "https://cm.blazefast.co/a9/22/a922ab1da6005868a94355351ce91c97.jpg"
    ]
  },
  {
    id: 8,
    title: "Хоримия",
    image: "https://m.media-amazon.com/images/M/MV5BNTZiODQ0N2QtZWY0Zi00Y2VkLWI0N2MtMTc0YzYwM2NlZWQ0XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg",
    genres: ["романтика", "комедия", "школа"],
    description: "Романтическая история о взаимоотношениях Кёко Хори и Идзуми Миямуры, которые выходят за рамки их школьных персон.",
    popular: false,
    new: true,
    pages: [
      "https://cm.blazefast.co/3c/81/3c811be1a7453b4a0b61a24b7ead90e4.jpg",
      "https://cm.blazefast.co/4a/9d/4a9d7bb8c9f0f13e8f5ec1e34a35eb90.jpg",
      "https://cm.blazefast.co/18/be/18be91df5a74f00a92e84f02d1df3af3.jpg",
      "https://cm.blazefast.co/79/fb/79fbd0b75cc62a6d1bcbbc00e8a82cb3.jpg"
    ]
  },
  {
    id: 9,
    title: "Сага о Винланде",
    image: "https://m.media-amazon.com/images/M/MV5BZjJlYzgzOWUtODk2ZS00NWNmLWE1ZTktODBkOWUxYjFmMDk2XkEyXkFqcGdeQXVyMTMxMTYzNTI1._V1_.jpg",
    genres: ["приключения", "драма", "боевик"],
    description: "История о юном викинге Торфинне, который жаждет отомстить за смерть отца и отправляется в путешествие, меняющее его взгляды на мир.",
    popular: true,
    new: true,
    pages: [
      "https://cm.blazefast.co/a8/4e/a84e75b63a09fdbd5e6df7aae2ff4bde.jpg",
      "https://cm.blazefast.co/0c/db/0cdb06ec4ca0c0e9707c244e18d8bdbc.jpg",
      "https://cm.blazefast.co/11/ac/11accd52b9e40a3d125d88dbd33d0da2.jpg",
      "https://cm.blazefast.co/98/9a/989a3e22a02f90fbcf7cde4fd0c27b4c.jpg"
    ]
  }
];

// Функция для получения случайного комикса
export function getRandomComic() {
  const randomIndex = Math.floor(Math.random() * comicsData.length);
  return comicsData[randomIndex];
}
