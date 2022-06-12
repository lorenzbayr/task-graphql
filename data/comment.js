let rawComments = [
  {
    id: 1,
    content:
      "commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer",
    author: 34,
    thumbsUpBy: "1, 31",
    talk: 13,
    answertTo: "null",
  },
  {
    id: 2,
    content:
      "ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum.",
    author: 37,
    thumbsUpBy: "",
    talk: 8,
    answertTo: "null",
  },
  {
    id: 3,
    content:
      "vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue",
    author: 42,
    thumbsUpBy: "",
    talk: 19,
    answertTo: "null",
  },
  {
    id: 4,
    content:
      "ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing.",
    author: 50,
    thumbsUpBy: "13, 5",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 5,
    content:
      "ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat",
    author: 46,
    thumbsUpBy: "",
    talk: 5,
    answertTo: "null",
  },
  {
    id: 6,
    content:
      "ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis",
    author: 33,
    thumbsUpBy: "",
    talk: 4,
    answertTo: "null",
  },
  {
    id: 7,
    content:
      "vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula.",
    author: 13,
    thumbsUpBy: 42,
    talk: 4,
    answertTo: "null",
  },
  {
    id: 8,
    content:
      "fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede.",
    author: 12,
    thumbsUpBy: 42,
    talk: 3,
    answertTo: "null",
  },
  {
    id: 9,
    content:
      "malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices.",
    author: 29,
    thumbsUpBy: 7,
    talk: 4,
    answertTo: "null",
  },
  {
    id: 10,
    content:
      "magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id,",
    author: 13,
    thumbsUpBy: 3,
    talk: 17,
    answertTo: "null",
  },
  {
    id: 11,
    content:
      "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed",
    author: 23,
    thumbsUpBy: "",
    talk: 14,
    answertTo: "null",
  },
  {
    id: 12,
    content:
      "tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus",
    author: 22,
    thumbsUpBy: 50,
    talk: 7,
    answertTo: "null",
  },
  {
    id: 13,
    content:
      "felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a",
    author: 28,
    thumbsUpBy: "",
    talk: 5,
    answertTo: "null",
  },
  {
    id: 14,
    content:
      "eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque",
    author: 26,
    thumbsUpBy: 3,
    talk: 17,
    answertTo: "null",
  },
  {
    id: 15,
    content:
      "enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus",
    author: 23,
    thumbsUpBy: 48,
    talk: 16,
    answertTo: "null",
  },
  {
    id: 16,
    content:
      "faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis",
    author: 48,
    thumbsUpBy: "10, 14",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 17,
    content:
      "magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna.",
    author: 21,
    thumbsUpBy: "",
    talk: 4,
    answertTo: "null",
  },
  {
    id: 18,
    content:
      "eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel",
    author: 46,
    thumbsUpBy: "",
    talk: 4,
    answertTo: "null",
  },
  {
    id: 19,
    content:
      "justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec,",
    author: 46,
    thumbsUpBy: "",
    talk: 15,
    answertTo: "null",
  },
  {
    id: 20,
    content:
      "eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna",
    author: 36,
    thumbsUpBy: "",
    talk: 14,
    answertTo: "null",
  },
  {
    id: 21,
    content:
      "mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
    author: 34,
    thumbsUpBy: "",
    talk: 18,
    answertTo: "null",
  },
  {
    id: 22,
    content:
      "aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam",
    author: 24,
    thumbsUpBy: "8, 13",
    talk: 14,
    answertTo: "null",
  },
  {
    id: 23,
    content:
      "sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus",
    author: 28,
    thumbsUpBy: 9,
    talk: 6,
    answertTo: "null",
  },
  {
    id: 24,
    content:
      "non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    author: 20,
    thumbsUpBy: "",
    talk: 9,
    answertTo: "null",
  },
  {
    id: 25,
    content:
      "nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus",
    author: 21,
    thumbsUpBy: "15, 41",
    talk: 5,
    answertTo: "null",
  },
  {
    id: 26,
    content:
      "parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris",
    author: 43,
    thumbsUpBy: 40,
    talk: 15,
    answertTo: "null",
  },
  {
    id: 27,
    content:
      "sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh.",
    author: 19,
    thumbsUpBy: "",
    talk: 14,
    answertTo: "null",
  },
  {
    id: 28,
    content:
      "interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis.",
    author: 42,
    thumbsUpBy: "",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 29,
    content:
      "Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna",
    author: 23,
    thumbsUpBy: "35, 9",
    talk: 2,
    answertTo: "null",
  },
  {
    id: 30,
    content:
      "aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales.",
    author: 29,
    thumbsUpBy: 12,
    talk: 14,
    answertTo: "null",
  },
  {
    id: 31,
    content:
      "pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi",
    author: 21,
    thumbsUpBy: "4, 10",
    talk: 13,
    answertTo: "null",
  },
  {
    id: 32,
    content:
      "Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean",
    author: 29,
    thumbsUpBy: "",
    talk: 5,
    answertTo: "null",
  },
  {
    id: 33,
    content:
      "accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa.",
    author: 40,
    thumbsUpBy: "2, 49",
    talk: 2,
    answertTo: "null",
  },
  {
    id: 34,
    content:
      "nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus.",
    author: 20,
    thumbsUpBy: "30, 48",
    talk: 16,
    answertTo: "null",
  },
  {
    id: 35,
    content:
      "ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras",
    author: 28,
    thumbsUpBy: 37,
    talk: 17,
    answertTo: "null",
  },
  {
    id: 36,
    content:
      "placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas",
    author: 49,
    thumbsUpBy: "47, 10",
    talk: 7,
    answertTo: "null",
  },
  {
    id: 37,
    content:
      "gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum",
    author: 47,
    thumbsUpBy: 42,
    talk: 8,
    answertTo: "null",
  },
  {
    id: 38,
    content:
      "lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed",
    author: 49,
    thumbsUpBy: "43, 45",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 39,
    content:
      "vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus.",
    author: 36,
    thumbsUpBy: 33,
    talk: 8,
    answertTo: "null",
  },
  {
    id: 40,
    content:
      "scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus",
    author: 30,
    thumbsUpBy: "",
    talk: 11,
    answertTo: "null",
  },
  {
    id: 41,
    content:
      "ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc",
    author: 25,
    thumbsUpBy: "28, 42",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 42,
    content:
      "in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat",
    author: 18,
    thumbsUpBy: 16,
    talk: 9,
    answertTo: "null",
  },
  {
    id: 43,
    content:
      "Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis",
    author: 21,
    thumbsUpBy: "34, 27",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 44,
    content:
      "augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et",
    author: 29,
    thumbsUpBy: 36,
    talk: 14,
    answertTo: "null",
  },
  {
    id: 45,
    content:
      "ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
    author: 35,
    thumbsUpBy: 4,
    talk: 19,
    answertTo: "null",
  },
  {
    id: 46,
    content:
      "imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet",
    author: 21,
    thumbsUpBy: 41,
    talk: 6,
    answertTo: "null",
  },
  {
    id: 47,
    content:
      "Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in,",
    author: 43,
    thumbsUpBy: 42,
    talk: 12,
    answertTo: "null",
  },
  {
    id: 48,
    content:
      "ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum.",
    author: 11,
    thumbsUpBy: 8,
    talk: 14,
    answertTo: "null",
  },
  {
    id: 49,
    content:
      "arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque",
    author: 50,
    thumbsUpBy: 6,
    talk: 1,
    answertTo: "null",
  },
  {
    id: 50,
    content:
      "Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris",
    author: 27,
    thumbsUpBy: "",
    talk: 5,
    answertTo: "null",
  },
  {
    id: 51,
    content:
      "Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur",
    author: 24,
    thumbsUpBy: 48,
    talk: 18,
    answertTo: "null",
  },
  {
    id: 52,
    content:
      "euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer",
    author: 40,
    thumbsUpBy: "8, 7",
    talk: 16,
    answertTo: "null",
  },
  {
    id: 53,
    content:
      "purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum",
    author: 14,
    thumbsUpBy: "",
    talk: 6,
    answertTo: "null",
  },
  {
    id: 54,
    content:
      "dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam",
    author: 35,
    thumbsUpBy: "",
    talk: 12,
    answertTo: "null",
  },
  {
    id: 55,
    content:
      "nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
    author: 25,
    thumbsUpBy: "",
    talk: 13,
    answertTo: "null",
  },
  {
    id: 56,
    content:
      "fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut",
    author: 34,
    thumbsUpBy: "",
    talk: 10,
    answertTo: "null",
  },
  {
    id: 57,
    content:
      "cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at,",
    author: 48,
    thumbsUpBy: 17,
    talk: 14,
    answertTo: "null",
  },
  {
    id: 58,
    content:
      "Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce",
    author: 13,
    thumbsUpBy: "",
    talk: 8,
    answertTo: "null",
  },
  {
    id: 59,
    content:
      "nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra.",
    author: 42,
    thumbsUpBy: 27,
    talk: 19,
    answertTo: "null",
  },
  {
    id: 60,
    content:
      "tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim.",
    author: 43,
    thumbsUpBy: "25, 39",
    talk: 6,
    answertTo: "null",
  },
  {
    id: 61,
    content:
      "tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero",
    author: 13,
    thumbsUpBy: "31, 15",
    talk: 11,
    answertTo: "null",
  },
  {
    id: 62,
    content:
      "leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend,",
    author: 50,
    thumbsUpBy: 14,
    talk: 2,
    answertTo: "null",
  },
  {
    id: 63,
    content:
      "sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec",
    author: 21,
    thumbsUpBy: "",
    talk: 2,
    answertTo: "null",
  },
  {
    id: 64,
    content:
      "Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse",
    author: 11,
    thumbsUpBy: "",
    talk: 4,
    answertTo: "null",
  },
  {
    id: 65,
    content:
      "magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
    author: 19,
    thumbsUpBy: "",
    talk: 17,
    answertTo: "null",
  },
  {
    id: 66,
    content:
      "Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero",
    author: 15,
    thumbsUpBy: 33,
    talk: 9,
    answertTo: "null",
  },
  {
    id: 67,
    content:
      "hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor.",
    author: 42,
    thumbsUpBy: "",
    talk: 5,
    answertTo: "null",
  },
  {
    id: 68,
    content:
      "non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem",
    author: 43,
    thumbsUpBy: "",
    talk: 20,
    answertTo: "null",
  },
  {
    id: 69,
    content:
      "sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus.",
    author: 15,
    thumbsUpBy: 37,
    talk: 8,
    answertTo: "null",
  },
  {
    id: 70,
    content:
      "auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a,",
    author: 49,
    thumbsUpBy: 21,
    talk: 19,
    answertTo: "null",
  },
  {
    id: 71,
    content:
      "nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna",
    author: 38,
    thumbsUpBy: 12,
    talk: 3,
    answertTo: "null",
  },
  {
    id: 72,
    content:
      "euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum.",
    author: 12,
    thumbsUpBy: "",
    talk: 8,
    answertTo: "null",
  },
  {
    id: 73,
    content:
      "risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In",
    author: 28,
    thumbsUpBy: "47, 42",
    talk: 11,
    answertTo: "null",
  },
  {
    id: 74,
    content:
      "Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem",
    author: 47,
    thumbsUpBy: "5, 10",
    talk: 9,
    answertTo: "null",
  },
  {
    id: 75,
    content:
      "nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante.",
    author: 32,
    thumbsUpBy: "11, 20",
    talk: 11,
    answertTo: "null",
  },
  {
    id: 76,
    content:
      "Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum",
    author: 47,
    thumbsUpBy: 6,
    talk: 13,
    answertTo: "null",
  },
  {
    id: 77,
    content:
      "Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna.",
    author: 40,
    thumbsUpBy: "",
    talk: 2,
    answertTo: "null",
  },
  {
    id: 78,
    content:
      "feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum",
    author: 14,
    thumbsUpBy: 42,
    talk: 15,
    answertTo: "null",
  },
  {
    id: 79,
    content:
      "rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor",
    author: 23,
    thumbsUpBy: "",
    talk: 17,
    answertTo: "null",
  },
  {
    id: 80,
    content:
      "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis",
    author: 38,
    thumbsUpBy: "",
    talk: 4,
    answertTo: "null",
  },
  {
    id: 81,
    content:
      "vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo",
    author: 47,
    thumbsUpBy: 37,
    talk: 10,
    answertTo: "null",
  },
  {
    id: 82,
    content:
      "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo.",
    author: 26,
    thumbsUpBy: 28,
    talk: 2,
    answertTo: "null",
  },
  {
    id: 83,
    content:
      "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a",
    author: 19,
    thumbsUpBy: 42,
    talk: 14,
    answertTo: "null",
  },
  {
    id: 84,
    content:
      "faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac",
    author: 29,
    thumbsUpBy: 19,
    talk: 12,
    answertTo: "null",
  },
  {
    id: 85,
    content:
      "hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
    author: 28,
    thumbsUpBy: 38,
    talk: 9,
    answertTo: "null",
  },
  {
    id: 86,
    content:
      "nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam",
    author: 25,
    thumbsUpBy: "",
    talk: 13,
    answertTo: "null",
  },
  {
    id: 87,
    content:
      "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in,",
    author: 32,
    thumbsUpBy: "",
    talk: 3,
    answertTo: "null",
  },
  {
    id: 88,
    content:
      "metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis",
    author: 40,
    thumbsUpBy: "",
    talk: 14,
    answertTo: "null",
  },
  {
    id: 89,
    content:
      "cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
    author: 29,
    thumbsUpBy: "",
    talk: 11,
    answertTo: "null",
  },
  {
    id: 90,
    content:
      "tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus",
    author: 35,
    thumbsUpBy: "18, 41",
    talk: 20,
    answertTo: "null",
  },
  {
    id: 91,
    content:
      "vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris",
    author: 45,
    thumbsUpBy: "",
    talk: 18,
    answertTo: "null",
  },
  {
    id: 92,
    content:
      "Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
    author: 50,
    thumbsUpBy: "50, 31",
    talk: 2,
    answertTo: "null",
  },
  {
    id: 93,
    content:
      "augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem",
    author: 22,
    thumbsUpBy: 16,
    talk: 9,
    answertTo: "null",
  },
  {
    id: 94,
    content:
      "vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a",
    author: 47,
    thumbsUpBy: "37, 31",
    talk: 9,
    answertTo: "null",
  },
  {
    id: 95,
    content:
      "posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class",
    author: 19,
    thumbsUpBy: 30,
    talk: 8,
    answertTo: "null",
  },
  {
    id: 96,
    content:
      "sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse",
    author: 18,
    thumbsUpBy: "10, 2",
    talk: 4,
    answertTo: "null",
  },
  {
    id: 97,
    content:
      "amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque.",
    author: 48,
    thumbsUpBy: "",
    talk: 6,
    answertTo: "null",
  },
  {
    id: 98,
    content:
      "tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit",
    author: 31,
    thumbsUpBy: "33, 19",
    talk: 2,
    answertTo: "null",
  },
  {
    id: 99,
    content:
      "et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et,",
    author: 19,
    thumbsUpBy: 13,
    talk: 3,
    answertTo: "null",
  },
  {
    id: 100,
    content:
      "vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo",
    author: 31,
    thumbsUpBy: 13,
    talk: 3,
    answertTo: "null",
  },
  {
    id: 101,
    content:
      "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus.",
    author: 37,
    thumbsUpBy: "7, 24",
    talk: "null",
    answertTo: 88,
  },
  {
    id: 102,
    content:
      "eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis",
    author: 17,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 71,
  },
  {
    id: 103,
    content:
      "sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem",
    author: 37,
    thumbsUpBy: 26,
    talk: "null",
    answertTo: 3,
  },
  {
    id: 104,
    content:
      "ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo",
    author: 43,
    thumbsUpBy: "36, 47",
    talk: "null",
    answertTo: 62,
  },
  {
    id: 105,
    content:
      "elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien,",
    author: 12,
    thumbsUpBy: 24,
    talk: "null",
    answertTo: 81,
  },
  {
    id: 106,
    content:
      "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id",
    author: 28,
    thumbsUpBy: "46, 49",
    talk: "null",
    answertTo: 26,
  },
  {
    id: 107,
    content:
      "euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus",
    author: 40,
    thumbsUpBy: 34,
    talk: "null",
    answertTo: 84,
  },
  {
    id: 108,
    content:
      "placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc",
    author: 14,
    thumbsUpBy: 28,
    talk: "null",
    answertTo: 72,
  },
  {
    id: 109,
    content:
      "vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue",
    author: 43,
    thumbsUpBy: "25, 23",
    talk: "null",
    answertTo: 89,
  },
  {
    id: 110,
    content:
      "sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
    author: 19,
    thumbsUpBy: 11,
    talk: "null",
    answertTo: 19,
  },
  {
    id: 111,
    content:
      "Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean",
    author: 33,
    thumbsUpBy: 15,
    talk: "null",
    answertTo: 30,
  },
  {
    id: 112,
    content:
      "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at",
    author: 20,
    thumbsUpBy: 16,
    talk: "null",
    answertTo: 98,
  },
  {
    id: 113,
    content:
      "dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna.",
    author: 23,
    thumbsUpBy: 49,
    talk: "null",
    answertTo: 68,
  },
  {
    id: 114,
    content:
      "vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris",
    author: 35,
    thumbsUpBy: "47, 42",
    talk: "null",
    answertTo: 16,
  },
  {
    id: 115,
    content:
      "eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.",
    author: 38,
    thumbsUpBy: 45,
    talk: "null",
    answertTo: 87,
  },
  {
    id: 116,
    content:
      "arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc",
    author: 50,
    thumbsUpBy: 26,
    talk: "null",
    answertTo: 38,
  },
  {
    id: 117,
    content:
      "nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis",
    author: 42,
    thumbsUpBy: "11, 25",
    talk: "null",
    answertTo: 17,
  },
  {
    id: 118,
    content:
      "vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc",
    author: 24,
    thumbsUpBy: 37,
    talk: "null",
    answertTo: 78,
  },
  {
    id: 119,
    content:
      "quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,",
    author: 26,
    thumbsUpBy: "45, 28",
    talk: "null",
    answertTo: 26,
  },
  {
    id: 120,
    content:
      "nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
    author: 17,
    thumbsUpBy: "27, 22",
    talk: "null",
    answertTo: 19,
  },
  {
    id: 121,
    content:
      "ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque.",
    author: 11,
    thumbsUpBy: "46, 1",
    talk: "null",
    answertTo: 97,
  },
  {
    id: 122,
    content:
      "pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
    author: 11,
    thumbsUpBy: 39,
    talk: "null",
    answertTo: 54,
  },
  {
    id: 123,
    content:
      "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit",
    author: 41,
    thumbsUpBy: "45, 49",
    talk: "null",
    answertTo: 83,
  },
  {
    id: 124,
    content:
      "sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In",
    author: 40,
    thumbsUpBy: "45, 4",
    talk: "null",
    answertTo: 99,
  },
  {
    id: 125,
    content:
      "ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor",
    author: 27,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 70,
  },
  {
    id: 126,
    content:
      "enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla",
    author: 13,
    thumbsUpBy: "32, 20",
    talk: "null",
    answertTo: 52,
  },
  {
    id: 127,
    content:
      "aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend,",
    author: 17,
    thumbsUpBy: "8, 2",
    talk: "null",
    answertTo: 83,
  },
  {
    id: 128,
    content:
      "lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu",
    author: 25,
    thumbsUpBy: 15,
    talk: "null",
    answertTo: 79,
  },
  {
    id: 129,
    content:
      "Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est,",
    author: 43,
    thumbsUpBy: 19,
    talk: "null",
    answertTo: 40,
  },
  {
    id: 130,
    content:
      "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna.",
    author: 49,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 35,
  },
  {
    id: 131,
    content:
      "nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.",
    author: 47,
    thumbsUpBy: 14,
    talk: "null",
    answertTo: 6,
  },
  {
    id: 132,
    content:
      "magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat",
    author: 13,
    thumbsUpBy: 1,
    talk: "null",
    answertTo: 42,
  },
  {
    id: 133,
    content:
      "viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.",
    author: 22,
    thumbsUpBy: 2,
    talk: "null",
    answertTo: 33,
  },
  {
    id: 134,
    content:
      "mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris",
    author: 30,
    thumbsUpBy: 50,
    talk: "null",
    answertTo: 77,
  },
  {
    id: 135,
    content:
      "ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor",
    author: 48,
    thumbsUpBy: 6,
    talk: "null",
    answertTo: 24,
  },
  {
    id: 136,
    content:
      "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh",
    author: 27,
    thumbsUpBy: 13,
    talk: "null",
    answertTo: 48,
  },
  {
    id: 137,
    content:
      "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer",
    author: 11,
    thumbsUpBy: "7, 23",
    talk: "null",
    answertTo: 16,
  },
  {
    id: 138,
    content:
      "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a,",
    author: 18,
    thumbsUpBy: "9, 41",
    talk: "null",
    answertTo: 20,
  },
  {
    id: 139,
    content:
      "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant",
    author: 40,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 22,
  },
  {
    id: 140,
    content:
      "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus",
    author: 38,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 61,
  },
  {
    id: 141,
    content:
      "velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu",
    author: 47,
    thumbsUpBy: 3,
    talk: "null",
    answertTo: 45,
  },
  {
    id: 142,
    content:
      "posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere",
    author: 34,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 63,
  },
  {
    id: 143,
    content:
      "diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus",
    author: 21,
    thumbsUpBy: 34,
    talk: "null",
    answertTo: 29,
  },
  {
    id: 144,
    content:
      "convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies",
    author: 44,
    thumbsUpBy: 17,
    talk: "null",
    answertTo: 81,
  },
  {
    id: 145,
    content:
      "Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat",
    author: 20,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 12,
  },
  {
    id: 146,
    content:
      "mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.",
    author: 14,
    thumbsUpBy: 50,
    talk: "null",
    answertTo: 56,
  },
  {
    id: 147,
    content:
      "Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem",
    author: 16,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 31,
  },
  {
    id: 148,
    content:
      "per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
    author: 42,
    thumbsUpBy: 2,
    talk: "null",
    answertTo: 90,
  },
  {
    id: 149,
    content:
      "magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna",
    author: 31,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 14,
  },
  {
    id: 150,
    content:
      "congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
    author: 23,
    thumbsUpBy: "27, 12",
    talk: "null",
    answertTo: 75,
  },
  {
    id: 151,
    content:
      "augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula.",
    author: 18,
    thumbsUpBy: 41,
    talk: "null",
    answertTo: 31,
  },
  {
    id: 152,
    content:
      "eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam",
    author: 50,
    thumbsUpBy: "17, 39",
    talk: "null",
    answertTo: 10,
  },
  {
    id: 153,
    content:
      "lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna,",
    author: 42,
    thumbsUpBy: 45,
    talk: "null",
    answertTo: 25,
  },
  {
    id: 154,
    content:
      "Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque",
    author: 27,
    thumbsUpBy: 34,
    talk: "null",
    answertTo: 29,
  },
  {
    id: 155,
    content:
      "dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem",
    author: 49,
    thumbsUpBy: "7, 32",
    talk: "null",
    answertTo: 38,
  },
  {
    id: 156,
    content:
      "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.",
    author: 49,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 22,
  },
  {
    id: 157,
    content:
      "sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a,",
    author: 27,
    thumbsUpBy: "12, 6",
    talk: "null",
    answertTo: 26,
  },
  {
    id: 158,
    content:
      "diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula.",
    author: 27,
    thumbsUpBy: "9, 37",
    talk: "null",
    answertTo: 95,
  },
  {
    id: 159,
    content:
      "mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras",
    author: 26,
    thumbsUpBy: 26,
    talk: "null",
    answertTo: 76,
  },
  {
    id: 160,
    content:
      "quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus.",
    author: 20,
    thumbsUpBy: 37,
    talk: "null",
    answertTo: 99,
  },
  {
    id: 161,
    content:
      "In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae",
    author: 41,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 47,
  },
  {
    id: 162,
    content:
      "Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus.",
    author: 27,
    thumbsUpBy: 48,
    talk: "null",
    answertTo: 50,
  },
  {
    id: 163,
    content:
      "fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu",
    author: 48,
    thumbsUpBy: 43,
    talk: "null",
    answertTo: 36,
  },
  {
    id: 164,
    content:
      "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam",
    author: 20,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 90,
  },
  {
    id: 165,
    content:
      "pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing",
    author: 15,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 47,
  },
  {
    id: 166,
    content:
      "Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec,",
    author: 19,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 58,
  },
  {
    id: 167,
    content:
      "sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris.",
    author: 11,
    thumbsUpBy: 24,
    talk: "null",
    answertTo: 60,
  },
  {
    id: 168,
    content:
      "ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus.",
    author: 45,
    thumbsUpBy: 49,
    talk: "null",
    answertTo: 70,
  },
  {
    id: 169,
    content:
      "interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus",
    author: 33,
    thumbsUpBy: "40, 28",
    talk: "null",
    answertTo: 7,
  },
  {
    id: 170,
    content:
      "dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit",
    author: 24,
    thumbsUpBy: "6, 33",
    talk: "null",
    answertTo: 29,
  },
  {
    id: 171,
    content:
      "Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus",
    author: 20,
    thumbsUpBy: "40, 48",
    talk: "null",
    answertTo: 72,
  },
  {
    id: 172,
    content:
      "parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec",
    author: 12,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 17,
  },
  {
    id: 173,
    content:
      "Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit.",
    author: 45,
    thumbsUpBy: 17,
    talk: "null",
    answertTo: 65,
  },
  {
    id: 174,
    content:
      "egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam",
    author: 20,
    thumbsUpBy: 19,
    talk: "null",
    answertTo: 89,
  },
  {
    id: 175,
    content:
      "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus",
    author: 20,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 72,
  },
  {
    id: 176,
    content:
      "lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
    author: 14,
    thumbsUpBy: 1,
    talk: "null",
    answertTo: 63,
  },
  {
    id: 177,
    content:
      "netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus",
    author: 40,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 69,
  },
  {
    id: 178,
    content:
      "Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu",
    author: 37,
    thumbsUpBy: 41,
    talk: "null",
    answertTo: 47,
  },
  {
    id: 179,
    content:
      "a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a,",
    author: 50,
    thumbsUpBy: 31,
    talk: "null",
    answertTo: 34,
  },
  {
    id: 180,
    content:
      "Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae",
    author: 27,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 68,
  },
  {
    id: 181,
    content:
      "laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor",
    author: 31,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 47,
  },
  {
    id: 182,
    content:
      "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus",
    author: 46,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 50,
  },
  {
    id: 183,
    content:
      "ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat.",
    author: 11,
    thumbsUpBy: "35, 32",
    talk: "null",
    answertTo: 54,
  },
  {
    id: 184,
    content:
      "odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing",
    author: 49,
    thumbsUpBy: "32, 36",
    talk: "null",
    answertTo: 60,
  },
  {
    id: 185,
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer",
    author: 49,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 86,
  },
  {
    id: 186,
    content:
      "ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec",
    author: 17,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 98,
  },
  {
    id: 187,
    content:
      "non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum",
    author: 20,
    thumbsUpBy: "16, 17",
    talk: "null",
    answertTo: 17,
  },
  {
    id: 188,
    content:
      "justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada.",
    author: 41,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 20,
  },
  {
    id: 189,
    content:
      "Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie",
    author: 50,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 53,
  },
  {
    id: 190,
    content:
      "pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora",
    author: 39,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 52,
  },
  {
    id: 191,
    content:
      "scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus,",
    author: 25,
    thumbsUpBy: 21,
    talk: "null",
    answertTo: 8,
  },
  {
    id: 192,
    content:
      "Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies",
    author: 12,
    thumbsUpBy: "3, 43",
    talk: "null",
    answertTo: 11,
  },
  {
    id: 193,
    content:
      "lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In",
    author: 14,
    thumbsUpBy: 40,
    talk: "null",
    answertTo: 62,
  },
  {
    id: 194,
    content:
      "magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae",
    author: 20,
    thumbsUpBy: "20, 47",
    talk: "null",
    answertTo: 70,
  },
  {
    id: 195,
    content:
      "Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula",
    author: 31,
    thumbsUpBy: "37, 31",
    talk: "null",
    answertTo: 90,
  },
  {
    id: 196,
    content:
      "lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes,",
    author: 40,
    thumbsUpBy: "19, 1",
    talk: "null",
    answertTo: 84,
  },
  {
    id: 197,
    content:
      "sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
    author: 11,
    thumbsUpBy: 2,
    talk: "null",
    answertTo: 59,
  },
  {
    id: 198,
    content:
      "eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum",
    author: 23,
    thumbsUpBy: "5, 30",
    talk: "null",
    answertTo: 81,
  },
  {
    id: 199,
    content:
      "mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus",
    author: 11,
    thumbsUpBy: "38, 35",
    talk: "null",
    answertTo: 79,
  },
  {
    id: 200,
    content:
      "egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla",
    author: 49,
    thumbsUpBy: "",
    talk: "null",
    answertTo: 94,
  },
];

const comments = () => rawComments;
const setComments = (newComments) => {
  rawComments = [...newComments];
  return rawComments;
};

export { comments, setComments };
