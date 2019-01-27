
var friendsArray = require("../data/friends");


module.exports = function(app) {


    app.get("/api/friends", function(req, res) {

        res.json(friendsArray);
    });


    app.post("/api/friends", function(req, res) {
        console.log("-----------------------------------")
        console.log("receiving newpersonData....")
        console.log(req.body);

        var myScore = req.body.score;
        // My Best Friend
        var bestFriendScore = 100;
        var bestFriendName = "";
        var bestFriendPhoto = "";

        for (i = 0; i < friendsArray.length; i++) {
            var currentDiff = 0;
            var friendScore = friendsArray[i].score;
            console.log(friendScore);

            for (j = 0; j < 10; j++) {
                currentDiff += Math.abs(myScore[j] - friendScore[j])
                console.log('dif', currentDiff);
            }

            // Determine if current friend is best friend
            if (currentDiff < bestFriendScore) {
                bestFriendScore = currentDiff;
                console.log(currentDiff);
                bestFriendName = friendsArray[i].name
                bestFriendPhoto = friendsArray[i].photo
            }
        }

        friendsArray.push(req.body);
        res.json({ name: bestFriendName, photo: bestFriendPhoto });
    });
}