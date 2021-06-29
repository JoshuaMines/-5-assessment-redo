const express = require("express");
const cors = require("cors");
const { INSPECT_MAX_BYTES } = require("buffer");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["you will win the lottery!", 
  "You may win the lottery!", 
  "You probably won't win the lottery",
  "Anything is possible, including winning the lottery",
  "ok statistically you're not going to win the lottery"
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

let place = ['slc', 'moroco', 'phoenix']; //Ann array of all the places, we will add and subtract from this array

app.get('/api/place/', function(req, res) { //A function that calls on the 'place' array
res.status(200).send(place); //displays the message as a new window (200) of our place array
});

app.post('/api/place', function(req, res) { //A function that will add another place to our place array
  const { newPlace } = req.body; //const {newPlace} 

  place.push(place); //push to place array 

  res.status(200).send(place); //send back place array after new place is added
})

app.delete('/api/place/:tgtIndex', function(req, res){ //to delete a place by index
  const tgtIndex = +req.params.tgtIndex; //target place by index
  place.splice(tgtIndex, 1);

  res.status(200).send(place) //send place list, used to cut out certain index place
})

app.listen(4000, () => console.log("Server running on 4000"));
