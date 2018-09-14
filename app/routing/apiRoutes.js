var friends = require("../data/friends.js");
var bodyParser = require("body-parser");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.use(bodyParser.json());

  app.post("/api/friends", function(req, res) {
    var bestBuddy = {
      name: "",
      photo: "",
      score: 5000
    };
    console.log("body: ");
    console.log(req.body);
    var score = req.body.scores;
    var score_diff = 0;

    for (var i = 0; i < friends.length; i++) {
      score_diff = 0;
      for (var j = 0; j < friends[i].scores[j]; j++) {
        score_diff += Math.abs(
          parseInt(score[j]) - parseInt(friends[i].scores[j])
        );
        console.log(score_diff);
        if (score_diff <= bestBuddy.score) {
          bestBuddy.name = friends[i].name;
          bestBuddy.photo = friends[i].photo;
          bestBuddy.score = score_diff;
        }
      }
    }

    friends.push(req.body);

    res.json(bestBuddy);
  });
};
