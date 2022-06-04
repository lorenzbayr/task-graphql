let rawFeedback = [
  {
    id: 1,
    rating: 16,
    content:
      "Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc",
    user: 37,
    talk: 4,
  },
  {
    id: 2,
    rating: 81,
    content:
      "Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor",
    user: 43,
    talk: 15,
  },
  {
    id: 3,
    rating: 46,
    content:
      "arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus.",
    user: 17,
    talk: 19,
  },
  {
    id: 4,
    rating: 69,
    content:
      "litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel",
    user: 50,
    talk: 16,
  },
  {
    id: 5,
    rating: 55,
    content:
      "erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec",
    user: 43,
    talk: 3,
  },
  {
    id: 6,
    rating: 38,
    content:
      "Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus.",
    user: 45,
    talk: 7,
  },
  {
    id: 7,
    rating: 76,
    content:
      "feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum.",
    user: 38,
    talk: 9,
  },
  {
    id: 8,
    rating: 97,
    content:
      "lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    user: 49,
    talk: 19,
  },
  {
    id: 9,
    rating: 8,
    content:
      "Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus",
    user: 13,
    talk: 19,
  },
  {
    id: 10,
    rating: 12,
    content:
      "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc",
    user: 45,
    talk: 8,
  },
  {
    id: 11,
    rating: 5,
    content:
      "lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi.",
    user: 16,
    talk: 2,
  },
  {
    id: 12,
    rating: 37,
    content:
      "tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit",
    user: 35,
    talk: 13,
  },
  {
    id: 13,
    rating: 41,
    content:
      "eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem",
    user: 18,
    talk: 16,
  },
  {
    id: 14,
    rating: 95,
    content:
      "eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.",
    user: 22,
    talk: 1,
  },
  {
    id: 15,
    rating: 20,
    content:
      "lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur",
    user: 32,
    talk: 8,
  },
  {
    id: 16,
    rating: 22,
    content:
      "quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    user: 27,
    talk: 7,
  },
  {
    id: 17,
    rating: 85,
    content:
      "tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam",
    user: 31,
    talk: 12,
  },
  {
    id: 18,
    rating: 91,
    content:
      "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat",
    user: 18,
    talk: 6,
  },
  {
    id: 19,
    rating: 65,
    content:
      "arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut,",
    user: 42,
    talk: 9,
  },
  {
    id: 20,
    rating: 98,
    content:
      "non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget",
    user: 27,
    talk: 19,
  },
  {
    id: 21,
    rating: 55,
    content:
      "sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In",
    user: 36,
    talk: 10,
  },
  {
    id: 22,
    rating: 76,
    content:
      "Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales",
    user: 47,
    talk: 5,
  },
  {
    id: 23,
    rating: 49,
    content:
      "vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas",
    user: 17,
    talk: 13,
  },
  {
    id: 24,
    rating: 79,
    content:
      "lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis",
    user: 28,
    talk: 18,
  },
  {
    id: 25,
    rating: 99,
    content:
      "facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget",
    user: 26,
    talk: 17,
  },
  {
    id: 26,
    rating: 15,
    content:
      "semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam",
    user: 11,
    talk: 18,
  },
  {
    id: 27,
    rating: 57,
    content: "rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in,",
    user: 19,
    talk: 8,
  },
  {
    id: 28,
    rating: 38,
    content:
      "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse",
    user: 39,
    talk: 3,
  },
  {
    id: 29,
    rating: 61,
    content:
      "massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna",
    user: 25,
    talk: 15,
  },
  {
    id: 30,
    rating: 64,
    content:
      "Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum",
    user: 25,
    talk: 9,
  },
  {
    id: 31,
    rating: 79,
    content:
      "Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros.",
    user: 25,
    talk: 11,
  },
  {
    id: 32,
    rating: 47,
    content:
      "pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper",
    user: 34,
    talk: 3,
  },
  {
    id: 33,
    rating: 80,
    content:
      "aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem",
    user: 18,
    talk: 17,
  },
  {
    id: 34,
    rating: 27,
    content:
      "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt",
    user: 30,
    talk: 15,
  },
  {
    id: 35,
    rating: 27,
    content:
      "libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue",
    user: 22,
    talk: 17,
  },
  {
    id: 36,
    rating: 93,
    content:
      "Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque",
    user: 40,
    talk: 20,
  },
  {
    id: 37,
    rating: 71,
    content:
      "sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus.",
    user: 15,
    talk: 13,
  },
  {
    id: 38,
    rating: 73,
    content:
      "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean",
    user: 36,
    talk: 10,
  },
  {
    id: 39,
    rating: 33,
    content:
      "tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero",
    user: 44,
    talk: 1,
  },
  {
    id: 40,
    rating: 39,
    content:
      "sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis",
    user: 19,
    talk: 5,
  },
  {
    id: 41,
    rating: 84,
    content:
      "velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis",
    user: 40,
    talk: 7,
  },
  {
    id: 42,
    rating: 98,
    content:
      "id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc",
    user: 50,
    talk: 11,
  },
  {
    id: 43,
    rating: 87,
    content:
      "vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie",
    user: 29,
    talk: 4,
  },
  {
    id: 44,
    rating: 7,
    content:
      "lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus",
    user: 26,
    talk: 14,
  },
  {
    id: 45,
    rating: 64,
    content:
      "Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc",
    user: 39,
    talk: 6,
  },
  {
    id: 46,
    rating: 63,
    content:
      "Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
    user: 31,
    talk: 19,
  },
  {
    id: 47,
    rating: 81,
    content:
      "Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat",
    user: 16,
    talk: 3,
  },
  {
    id: 48,
    rating: 69,
    content:
      "at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit",
    user: 11,
    talk: 11,
  },
  {
    id: 49,
    rating: 86,
    content:
      "Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis.",
    user: 40,
    talk: 12,
  },
  {
    id: 50,
    rating: 78,
    content:
      "tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit",
    user: 40,
    talk: 14,
  },
  {
    id: 51,
    rating: 67,
    content:
      "vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus",
    user: 49,
    talk: 12,
  },
  {
    id: 52,
    rating: 59,
    content:
      "elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna",
    user: 14,
    talk: 10,
  },
  {
    id: 53,
    rating: 29,
    content:
      "sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu.",
    user: 48,
    talk: 14,
  },
  {
    id: 54,
    rating: 63,
    content:
      "Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula.",
    user: 33,
    talk: 19,
  },
  {
    id: 55,
    rating: 57,
    content:
      "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc",
    user: 49,
    talk: 15,
  },
  {
    id: 56,
    rating: 38,
    content:
      "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit.",
    user: 20,
    talk: 15,
  },
  {
    id: 57,
    rating: 35,
    content:
      "ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non",
    user: 32,
    talk: 6,
  },
  {
    id: 58,
    rating: 4,
    content:
      "in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris.",
    user: 32,
    talk: 13,
  },
  {
    id: 59,
    rating: 16,
    content:
      "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus.",
    user: 46,
    talk: 18,
  },
  {
    id: 60,
    rating: 41,
    content:
      "magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque",
    user: 34,
    talk: 10,
  },
  {
    id: 61,
    rating: 22,
    content:
      "dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis",
    user: 48,
    talk: 14,
  },
  {
    id: 62,
    rating: 92,
    content:
      "Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas",
    user: 32,
    talk: 12,
  },
  {
    id: 63,
    rating: 65,
    content:
      "Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc",
    user: 46,
    talk: 4,
  },
  {
    id: 64,
    rating: 93,
    content:
      "faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus.",
    user: 29,
    talk: 12,
  },
  {
    id: 65,
    rating: 77,
    content:
      "nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a",
    user: 40,
    talk: 20,
  },
  {
    id: 66,
    rating: 3,
    content:
      "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.",
    user: 31,
    talk: 1,
  },
  {
    id: 67,
    rating: 23,
    content:
      "a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede",
    user: 31,
    talk: 11,
  },
  {
    id: 68,
    rating: 20,
    content:
      "tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan",
    user: 47,
    talk: 2,
  },
  {
    id: 69,
    rating: 16,
    content:
      "leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a,",
    user: 15,
    talk: 10,
  },
  {
    id: 70,
    rating: 30,
    content:
      "ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum",
    user: 22,
    talk: 18,
  },
  {
    id: 71,
    rating: 7,
    content:
      "rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis",
    user: 46,
    talk: 13,
  },
  {
    id: 72,
    rating: 56,
    content:
      "Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit",
    user: 26,
    talk: 6,
  },
  {
    id: 73,
    rating: 94,
    content:
      "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio.",
    user: 47,
    talk: 17,
  },
  {
    id: 74,
    rating: 96,
    content:
      "Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris",
    user: 45,
    talk: 9,
  },
  {
    id: 75,
    rating: 4,
    content:
      "diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed",
    user: 45,
    talk: 1,
  },
  {
    id: 76,
    rating: 45,
    content:
      "elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus",
    user: 49,
    talk: 1,
  },
  {
    id: 77,
    rating: 69,
    content:
      "lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec",
    user: 14,
    talk: 5,
  },
  {
    id: 78,
    rating: 35,
    content:
      "Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus",
    user: 14,
    talk: 19,
  },
  {
    id: 79,
    rating: 87,
    content: "sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit",
    user: 12,
    talk: 3,
  },
  {
    id: 80,
    rating: 50,
    content:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec",
    user: 11,
    talk: 13,
  },
  {
    id: 81,
    rating: 68,
    content:
      "vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis",
    user: 22,
    talk: 17,
  },
  {
    id: 82,
    rating: 40,
    content: "aliquet magna a neque. Nullam ut nisi a odio semper",
    user: 26,
    talk: 5,
  },
  {
    id: 83,
    rating: 58,
    content:
      "In ornare sagittis felis. Donec tempor, est ac mattis semper, dui",
    user: 23,
    talk: 12,
  },
  {
    id: 84,
    rating: 14,
    content:
      "quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum.",
    user: 12,
    talk: 14,
  },
  {
    id: 85,
    rating: 80,
    content:
      "Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget",
    user: 35,
    talk: 1,
  },
  {
    id: 86,
    rating: 63,
    content:
      "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc",
    user: 37,
    talk: 19,
  },
  {
    id: 87,
    rating: 78,
    content:
      "consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec",
    user: 14,
    talk: 6,
  },
  {
    id: 88,
    rating: 96,
    content:
      "id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede",
    user: 31,
    talk: 4,
  },
  {
    id: 89,
    rating: 97,
    content:
      "lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi.",
    user: 18,
    talk: 13,
  },
  {
    id: 90,
    rating: 49,
    content:
      "quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
    user: 14,
    talk: 13,
  },
  {
    id: 91,
    rating: 44,
    content:
      "magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla",
    user: 43,
    talk: 2,
  },
  {
    id: 92,
    rating: 78,
    content:
      "metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet",
    user: 39,
    talk: 8,
  },
  {
    id: 93,
    rating: 2,
    content:
      "molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum",
    user: 38,
    talk: 1,
  },
  {
    id: 94,
    rating: 54,
    content:
      "non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer,",
    user: 20,
    talk: 19,
  },
  {
    id: 95,
    rating: 42,
    content:
      "rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum",
    user: 29,
    talk: 14,
  },
  {
    id: 96,
    rating: 27,
    content:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis.",
    user: 27,
    talk: 6,
  },
  {
    id: 97,
    rating: 13,
    content:
      "euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra",
    user: 23,
    talk: 18,
  },
  {
    id: 98,
    rating: 35,
    content:
      "facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum",
    user: 33,
    talk: 4,
  },
  {
    id: 99,
    rating: 89,
    content:
      "Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat",
    user: 21,
    talk: 1,
  },
  {
    id: 100,
    rating: 48,
    content:
      "pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit.",
    user: 45,
    talk: 20,
  },
];

const feedbacks = () => rawFeedback;
const setFeedback = (newFeedbacks) => {
  rawFeedback = newFeedbacks;
  return rawFeedback;
};

export { feedbacks, setFeedback };
