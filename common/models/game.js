var loopback = require('loopback');

module.exports = function (Game) {
    Game.getGameResults = function (next)
    {
        var gameResults = [];
        var gameFull = [];
        Game.find({include:[{group:'tournament'},{gameParticipants:'team'}],order:'groupId'}, function (err, games)
        {
            games.forEach(function (game) {
                game = JSON.parse(JSON.stringify(game));
                
                var groupObj = {id:game.group.id, name:game.group.name};
                var tournamentObj = {id:game.group.tournament.id, name:game.group.tournament.name, hexColor: game.group.tournament.hexColor};
                
                var participantObjs = [];
                game.gameParticipants.forEach(function(item)
                {
                    var teamObj = {id: item.team.id, name: item.team.name, logoFile: item.team.logoFile}
                    var participantObj = {id: item.id, score: item.score, isLocal: item.isLocal, team: teamObj};
                    participantObjs.push(participantObj);
                });
                
                var gameobj = {group: groupObj, tournament: tournamentObj, gameParticipants: participantObjs};
                
                gameResults.push(gameobj);
                gameFull.push(game);
            });

            next(null, gameResults);

        });


    };

    loopback.remoteMethod(Game.getGameResults,
            {
                description: 'Returns all the game results of each tournament',
                accepts: [],
                returns: {arg: 'results', type: 'object'},
                http: {path: '/gameResults', verb: 'get'}
            });
};
