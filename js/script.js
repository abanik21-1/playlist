// Complete Day 1 goals here
// store your song titles, artist name, length, image and ink

let songTitles = ["DAYDREAM", "Zehnaseeb", "Every Summertime"];
console.log(songTitles);

let artistNames = ["John OFA Rhee", "Chinmayi, Shekhar Ravjian", "Niki"];
console.log(artistNames);

let songLength = ["3:43", "2:23", "3:22"];
console.log(songLength);

let songImg = [
  "https://i.scdn.co/image/ab67616d0000b273744174f599e2d0d5384c5421",
  "https://i.scdn.co/image/ab67616d0000b2732025db071cd9dd7e8023e01e",
  "https://images.genius.com/cd1767554b50e0c83a4234bb9a1b7220.1000x1000x1.png",
];
console.log(songImg);

let songLink = [
  "https://www.youtube.com/watch?v=9IVzPNWRbYE",
  "https://www.youtube.com/watch?v=gjtJ4YgHiXY",
  "https://www.youtube.com/watch?v=a0OHkWX7B-E",
];
console.log(songLink);

// Complete the Day 2 goals inside this function

function displaySongInfo() {
  let songNames = ["DAYDREAM", "Zehnaseeb", "Every Summertime"];
  $(".songNames").click(function () {
    songNames.forEach(function (music) {
      $(".songs").append("<li>" + music + "</li>");
    });
  });

  let artistNamess = ["John OFA Rhee", "Chinmayi, Shekhar Ravjian", "Niki"];
  $(".artistNamess").click(function () {
    artistNamess.forEach(function (music) {
      $(".artists").append("<li>" + music + "</li>");
    });
  });

  let songLengthh = ["3:43", "2:23", "3:22"];
  $(".songLengthh").click(function () {
    songLengthh.forEach(function (music) {
      $(".lengths").append("<li>" + music + "</li>");
    });
  });

  let songImages = ["3:43", "2:23", "3:22"];
  $(".songImages").click(function () {
    songImages.forEach(function (music) {
      $(".images").append("<li>" + music + "</li>");
    });
  });

  let songLlinks = ["3:43", "2:23", "3:22"];
  $(".songLlinks").click(function () {
    songLlinks.forEach(function (music) {
      $(".links").append("<li>" + music + "</li>");
    });
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

// Complete Day 3 goals inside this function

function addSongInfo() {
  let sName = $(".song").val();
  let sArtist = $(".artist").val();
  let sLength = $(".length").val();
  let sLink = $(".link").val();
  let sImage = $(".image").val();
};

  let InputSong = {
    name: "sName",
    artist: "sArtist",
    length: "sLength",
    image: "sLink",
    link: "sImage",
  };

  InputSong.push(InputSong);


$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();

// Day 4 Goal 1: Refactor your arrays so all your song information is stored in Objects

let firstsong = {
  name: "DAYDREAM",
  artist: "Mohn OFA Rhee",
  length: "3:43",
  image: "https://i.scdn.co/image/ab67616d0000b273744174f599e2d0d5384c5421",
  link: "https://www.youtube.com/watch?v=9IVzPNWRbYE",
};

let secondsong = {
  name: "Zehnaseeb",
  artist: "Chinmayi, Shekhar Ravjian",
  length: "2:23",
  image: "https://i.scdn.co/image/ab67616d0000b2732025db071cd9dd7e8023e01e",
  link: "https://www.youtube.com/watch?v=gjtJ4YgHiXY",
};

let thirdsong = {
  name: "Every Summertime",
  artist: "Niki",
  length: "3.22",
  image: "https://images.genius.com/cd1767554b50e0c83a4234bb9a1b7220.1000x1000x1.png",
  link: "https://www.youtube.com/watch?v=a0OHkWX7B-E",
};


//Day 5 Goal 1: Refactor your loops so all your song information displays correctly on the page
//[ ] Update your click handler so the input values are saved in as values in a new Object
//[ ] Update your .push() so the input Object is added to your array of Objects
//[ ] Update your loops based on your new array of Objects
  