let rawTalks = [
    {
        "autoincrement": 1,
        "title": "scelerisque mollis.",
        "abstract": "lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu",
        "start": "2021-06-23 23:46:14",
        "duration": 45,
        "type": "WORKSHOP",
        "speaker": 2,
        "participants": "20, 13, 46, 41, 44, 19, 12, 25, 17, 16, 32"
    },
    {
        "autoincrement": 2,
        "title": "massa lobortis",
        "abstract": "euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu.",
        "start": "2021-06-24 01:23:08",
        "duration": 90,
        "type": "WORKSHOP",
        "speaker": 6,
        "participants": "31, 22, 42, 34, 35, 20, 50, 21, 18, 13, 37, 33, 23"
    },
    {
        "autoincrement": 3,
        "title": "vitae purus",
        "abstract": "Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id,",
        "start": "2021-06-24 04:43:33",
        "duration": 90,
        "type": "LIGHTNING_TALK",
        "speaker": 7,
        "participants": "24, 46, 39, 17, 36, 45, 21, 11, 20, 37, 44, 29, 27, 47, 16, 50, 48, 25, 30"
    },
    {
        "autoincrement": 4,
        "title": "justo sit",
        "abstract": "ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec",
        "start": "2021-06-22 15:03:36",
        "duration": 45,
        "type": "LIGHTNING_TALK",
        "speaker": 5,
        "participants": "17, 15, 48, 40, 12, 23, 30, 20, 45, 35, 24, 16, 36, 42, 28, 38, 49, 27, 29"
    },
    {
        "autoincrement": 5,
        "title": "eu, euismod ac, fermentum",
        "abstract": "vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis,",
        "start": "2021-06-23 13:05:26",
        "duration": 90,
        "type": "PRESENTATION",
        "speaker": 1,
        "participants": "36, 50, 15, 18, 33, 49, 27, 42, 34, 35, 45, 11"
    },
    {
        "autoincrement": 6,
        "title": "enim diam vel arcu.",
        "abstract": "Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus",
        "start": "2021-06-24 08:51:49",
        "duration": 60,
        "type": "LIGHTNING_TALK",
        "speaker": 2,
        "participants": "36, 20, 23, 28, 41, 25, 37, 44, 27, 19"
    },
    {
        "autoincrement": 7,
        "title": "posuere vulputate, lacus.",
        "abstract": "cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus",
        "start": "2021-06-23 02:36:07",
        "duration": 45,
        "type": "LIGHTNING_TALK",
        "speaker": 5,
        "participants": "41, 23, 19, 21, 14, 36, 45, 30, 35, 48, 25, 37, 34"
    },
    {
        "autoincrement": 8,
        "title": "accumsan neque et",
        "abstract": "vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque.",
        "start": "2021-06-25 10:16:10",
        "duration": 45,
        "type": "PRESENTATION",
        "speaker": 10,
        "participants": "14, 29, 31, 12, 16, 46, 35, 42, 15, 48, 37, 47, 33, 38, 25, 13, 20, 44, 17, 22"
    },
    {
        "autoincrement": 9,
        "title": "hymenaeos. Mauris ut",
        "abstract": "rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et",
        "start": "2021-06-23 18:13:30",
        "duration": 45,
        "type": "LIGHTNING_TALK",
        "speaker": 2,
        "participants": "43, 45, 15, 25, 28, 34, 19, 47, 42, 33, 49, 20, 50, 37, 24, 46, 23"
    },
    {
        "autoincrement": 10,
        "title": "blandit at, nisi. Cum",
        "abstract": "luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
        "start": "2021-06-22 08:49:20",
        "duration": 45,
        "type": "WORKSHOP",
        "speaker": 9,
        "participants": "19, 15, 35, 30, 37, 31, 42, 28, 11, 43, 45, 33, 13"
    },
    {
        "autoincrement": 11,
        "title": "adipiscing elit.",
        "abstract": "nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus",
        "start": "2021-06-24 04:15:02",
        "duration": 60,
        "type": "WORKSHOP",
        "speaker": 2,
        "participants": "27, 37, 38, 50, 36, 19, 12, 44, 29, 22, 32, 47, 48, 35, 17, 14, 26, 15, 16"
    },
    {
        "autoincrement": 12,
        "title": "sed dui. Fusce",
        "abstract": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat",
        "start": "2021-06-24 13:39:46",
        "duration": 45,
        "type": "WORKSHOP",
        "speaker": 1,
        "participants": "50, 12, 21, 49, 47, 29, 16, 40, 25, 34, 17"
    },
    {
        "autoincrement": 13,
        "title": "Donec vitae erat",
        "abstract": "Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna.",
        "start": "2021-06-24 20:08:03",
        "duration": 45,
        "type": "WORKSHOP",
        "speaker": 1,
        "participants": "12, 11, 37, 48, 31, 47, 39, 36, 18, 45, 30, 40, 15, 35, 34, 16, 46, 38, 17"
    },
    {
        "autoincrement": 14,
        "title": "nisi nibh lacinia",
        "abstract": "egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
        "start": "2021-06-25 11:06:52",
        "duration": 45,
        "type": "PRESENTATION",
        "speaker": 4,
        "participants": "21, 17, 39, 50, 22, 14, 34, 35, 38, 46, 42, 28, 49, 23, 29, 19, 15, 40, 31, 36"
    },
    {
        "autoincrement": 15,
        "title": "molestie tellus. Aenean egestas",
        "abstract": "purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt",
        "start": "2021-06-24 04:51:59",
        "duration": 60,
        "type": "LIGHTNING_TALK",
        "speaker": 7,
        "participants": "36, 47, 25, 20, 27, 16, 12, 34, 11, 19, 38, 48, 28, 39, 21, 33, 50, 43, 15, 45"
    },
    {
        "autoincrement": 16,
        "title": "dolor egestas rhoncus. Proin",
        "abstract": "Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus",
        "start": "2021-06-24 22:05:57",
        "duration": 45,
        "type": "LIGHTNING_TALK",
        "speaker": 7,
        "participants": "31, 38, 36, 25, 12, 40, 18, 19, 33, 43, 15, 49, 34, 26, 39"
    },
    {
        "autoincrement": 17,
        "title": "Mauris non dui nec",
        "abstract": "Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est,",
        "start": "2021-06-23 20:36:39",
        "duration": 45,
        "type": "PRESENTATION",
        "speaker": 6,
        "participants": "17, 47, 31, 45, 30, 50, 21, 14, 42, 19, 26, 34"
    },
    {
        "autoincrement": 18,
        "title": "sed tortor.",
        "abstract": "Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque",
        "start": "2021-06-23 19:59:54",
        "duration": 45,
        "type": "WORKSHOP",
        "speaker": 9,
        "participants": "26, 15, 14, 45, 38, 47, 28, 30, 17, 13, 31"
    },
    {
        "autoincrement": 19,
        "title": "dolor sit amet,",
        "abstract": "Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec,",
        "start": "2021-06-25 07:09:41",
        "duration": 90,
        "type": "WORKSHOP",
        "speaker": 9,
        "participants": "20, 15, 24, 16, 21, 44, 47, 38, 35, 31, 29, 40, 25"
    },
    {
        "autoincrement": 20,
        "title": "Maecenas mi",
        "abstract": "nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla",
        "start": "2021-06-24 11:55:51",
        "duration": 90,
        "type": "PRESENTATION",
        "speaker": 6,
        "participants": "24, 27, 45, 31, 21, 18, 13, 50, 11, 34, 40, 23"
    }
];

const talks = () => rawTalks;
const setTalks = (newTalks) => {
    rawTalks = [...newTalks];
    return rawTalks;
};

export { talks, setTalks };
