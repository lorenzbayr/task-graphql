let rawTalks = [
  {
    id: 1,
    title: "pede, ultrices",
    abstract:
      "imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan",
    start: "2021-06-24 17:54:06",
    duration: 60,
    type: "PRESENTATION",
    speaker: 8,
    participants: "30, 29, 34, 31, 38, 49, 28, 43, 23, 16, 14, 32, 47, 21",
  },
  {
    id: 2,
    title: "Aliquam adipiscing lobortis risus.",
    abstract:
      "metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
    start: "2021-06-23 11:22:48",
    duration: 45,
    type: "LIGHTNING_TALK",
    speaker: 7,
    participants:
      "20, 43, 33, 48, 34, 41, 47, 19, 11, 40, 46, 32, 35, 17, 16, 45",
  },
  {
    id: 3,
    title: "sociis natoque penatibus",
    abstract:
      "consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus.",
    start: "2021-06-23 02:09:35",
    duration: 60,
    type: "PRESENTATION",
    speaker: 1,
    participants: "33, 19, 16, 44, 42, 11, 35, 26, 17, 23, 45, 39, 29",
  },
  {
    id: 4,
    title: "faucibus orci",
    abstract:
      "massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    start: "2021-06-23 18:25:34",
    duration: 60,
    type: "WORKSHOP",
    speaker: 7,
    participants: "42, 34, 20, 40, 13, 25, 37, 46, 45, 48, 47, 35, 23, 44, 11",
  },
  {
    id: 5,
    title: "at, nisi.",
    abstract:
      "odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales",
    start: "2021-06-22 07:47:08",
    duration: 90,
    type: "PRESENTATION",
    speaker: 4,
    participants: "37, 46, 49, 12, 38, 34, 35, 44, 11, 45, 19",
  },
  {
    id: 6,
    title: "Nullam feugiat",
    abstract:
      "fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede.",
    start: "2021-06-24 00:31:18",
    duration: 60,
    type: "PRESENTATION",
    speaker: 4,
    participants:
      "43, 19, 29, 44, 32, 42, 38, 50, 15, 12, 13, 47, 34, 25, 11, 49",
  },
  {
    id: 7,
    title: "ac, feugiat non, lobortis",
    abstract:
      "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non",
    start: "2021-06-23 22:26:20",
    duration: 45,
    type: "WORKSHOP",
    speaker: 10,
    participants:
      "36, 19, 31, 28, 14, 29, 49, 40, 18, 27, 23, 12, 20, 22, 46, 11, 50, 30",
  },
  {
    id: 8,
    title: "Cras sed leo.",
    abstract:
      "consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.",
    start: "2021-06-22 08:19:14",
    duration: 45,
    type: "PRESENTATION",
    speaker: 6,
    participants: "19, 21, 24, 27, 30, 20, 44, 48, 41, 36, 39, 11, 15, 28",
  },
  {
    id: 9,
    title: "mollis vitae, posuere",
    abstract:
      "ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget",
    start: "2021-06-24 23:58:36",
    duration: 45,
    type: "PRESENTATION",
    speaker: 7,
    participants:
      "25, 31, 39, 12, 22, 40, 33, 37, 46, 50, 44, 49, 19, 32, 15, 14, 17",
  },
  {
    id: 10,
    title: "Etiam vestibulum massa rutrum",
    abstract:
      "libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet",
    start: "2021-06-22 15:13:37",
    duration: 45,
    type: "WORKSHOP",
    speaker: 6,
    participants:
      "34, 16, 38, 15, 39, 13, 41, 45, 25, 19, 46, 22, 31, 50, 33, 28, 48, 14",
  },
  {
    id: 11,
    title: "lorem tristique aliquet.",
    abstract:
      "eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus.",
    start: "2021-06-25 14:58:04",
    duration: 90,
    type: "WORKSHOP",
    speaker: 7,
    participants: "17, 39, 37, 24, 47, 38, 23, 35, 43, 32, 25, 45, 19, 44, 42",
  },
  {
    id: 12,
    title: "posuere, enim nisl elementum",
    abstract:
      "Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent",
    start: "2021-06-24 06:46:19",
    duration: 60,
    type: "LIGHTNING_TALK",
    speaker: 3,
    participants: "21, 25, 14, 19, 48, 13, 31, 15, 16, 35, 41, 29, 46",
  },
  {
    id: 13,
    title: "bibendum sed,",
    abstract:
      "eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
    start: "2021-06-22 23:38:05",
    duration: 60,
    type: "LIGHTNING_TALK",
    speaker: 6,
    participants: "15, 31, 14, 13, 22, 19, 11, 44, 40, 42, 17, 34, 30, 49",
  },
  {
    id: 14,
    title: "amet, faucibus ut,",
    abstract:
      "eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam",
    start: "2021-06-22 06:17:53",
    duration: 90,
    type: "LIGHTNING_TALK",
    speaker: 8,
    participants: "26, 22, 30, 41, 18, 13, 39, 28, 47, 48",
  },
  {
    id: 15,
    title: "massa. Suspendisse",
    abstract:
      "dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla",
    start: "2021-06-23 21:05:00",
    duration: 60,
    type: "LIGHTNING_TALK",
    speaker: 3,
    participants:
      "28, 27, 38, 26, 50, 19, 42, 22, 13, 12, 36, 39, 35, 40, 47, 29, 17",
  },
  {
    id: 16,
    title: "Nulla tincidunt, neque",
    abstract:
      "risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris,",
    start: "2021-06-21 22:16:00",
    duration: 45,
    type: "WORKSHOP",
    speaker: 2,
    participants: "22, 43, 41, 33, 14, 29, 45, 16, 50, 36, 12, 15",
  },
  {
    id: 17,
    title: "eu enim. Etiam",
    abstract:
      "nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim,",
    start: "2021-06-24 14:19:15",
    duration: 45,
    type: "PRESENTATION",
    speaker: 2,
    participants:
      "47, 15, 48, 35, 41, 28, 12, 50, 38, 16, 39, 22, 32, 33, 13, 31, 17, 30",
  },
  {
    id: 18,
    title: "varius orci,",
    abstract:
      "magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies",
    start: "2021-06-24 04:30:24",
    duration: 90,
    type: "PRESENTATION",
    speaker: 2,
    participants: "20, 43, 29, 24, 30, 48, 31, 18, 50, 44, 32, 46",
  },
  {
    id: 19,
    title: "felis eget varius ultrices,",
    abstract:
      "eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula",
    start: "2021-06-23 06:11:44",
    duration: 45,
    type: "PRESENTATION",
    speaker: 9,
    participants: "39, 19, 41, 12, 31, 14, 28, 11, 47, 21, 50, 26, 35, 23",
  },
  {
    id: 20,
    title: "magna. Nam",
    abstract:
      "cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est",
    start: "2021-06-24 18:16:44",
    duration: 60,
    type: "PRESENTATION",
    speaker: 1,
    participants:
      "46, 11, 24, 47, 16, 49, 17, 42, 23, 43, 14, 22, 29, 38, 19, 33, 36, 48, 32",
  },
];

const talks = () => rawTalks;
const setTalks = (newTalks) => {
  rawTalks = [...newTalks];
  return rawTalks;
};

export { talks, setTalks };
