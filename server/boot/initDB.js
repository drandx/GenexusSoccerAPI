var tournaments = [
  {id:'553434a3b4926ba3077d7f01', name: 'Torneo A', hexColor: '#F56495'},
  {id:'553434a3b4926ba3077d7f02', name: 'Torneo B', hexColor: '#40BBBD'},
  {id:'553434a3b4926ba3077d7f03', name: 'Torneo C', hexColor: '#8686D9'}
];

var groups = [
  {id:'553434a3b4926ba3077dgr01', name: 'Gurpo 1', tournamentId: '553434a3b4926ba3077d7f01'},
  {id:'553434a3b4926ba3077dgr07', name: 'Grupo 2', tournamentId: '553434a3b4926ba3077d7f02'},
  {id:'553434a3b4926ba3077dgr08', name: 'Grupo 1', tournamentId: '553434a3b4926ba3077d7f03'},
];

var teams = [
  {id:'553434a3b4926ba3077dte01', name: 'Boca Juniors', logoFile: 'bocaicon.gif'},
  {id:'553434a3b4926ba3077dte02', name: 'River Plate', logoFile: 'rivericon.gif'},
  {id:'553434a3b4926ba3077dte03', name: 'Club Libertad', logoFile: 'libertadicon.gif'},
  {id:'553434a3b4926ba3077dte04', name: 'SL de A', logoFile: 'almagroicon.gif'},
  {id:'553434a3b4926ba3077dte05', name: 'Danubio FC', logoFile: 'danubioicon.gif'},
  {id:'553434a3b4926ba3077dte06', name: 'Racing', logoFile: 'racingicon.gif'},
  {id:'553434a3b4926ba3077dte07', name: 'The Strongest', logoFile: 'strongesticon.gif'},
  {id:'553434a3b4926ba3077dte08', name: 'Sao Paulo FC', logoFile: 'saupauloicon.gif'},
  {id:'553434a3b4926ba3077dte09', name: 'U FC', logoFile: 'ufcicon.gif'},
  {id:'553434a3b4926ba3077dte10', name: 'Cerro Porteño', logoFile: 'cerroicon.gif'}
];

var games = [
  {id: '553434a3b4926ba3077dga01', eventDate: 'April 24, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr01', gameNumber: 1},
  {id: '553434a3b4926ba3077dga02', eventDate: 'April 24, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr01', gameNumber: 1},
  {id: '553434a3b4926ba3077dga03', eventDate: 'April 25, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr01', gameNumber: 2},
  {id: '553434a3b4926ba3077dga04', eventDate: 'April 25, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr07', gameNumber: 1},
  {id: '553434a3b4926ba3077dga05', eventDate: 'April 26, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr07', gameNumber: 2},
  {id: '553434a3b4926ba3077dga06', eventDate: 'May 01, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr07', gameNumber: 3},
  {id: '553434a3b4926ba3077dga07', eventDate: 'May 01, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr08', gameNumber: 1},
  {id: '553434a3b4926ba3077dga08', eventDate: 'May 05, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr08', gameNumber: 2},
  {id: '553434a3b4926ba3077dga09', eventDate: 'May 05, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr08', gameNumber: 2},
  {id: '553434a3b4926ba3077dga10', eventDate: 'June 21, 2015 05:00:00', groupId: '553434a3b4926ba3077dgr01', gameNumber: 1}
];

var gameParticipants = [
  {isLocal: true, score: 0, gameId: '553434a3b4926ba3077dga01', teamId: '553434a3b4926ba3077dte01'},
  {isLocal: false, score: 1, gameId: '553434a3b4926ba3077dga01', teamId: '553434a3b4926ba3077dte02'},
  {isLocal: true, score: 3, gameId: '553434a3b4926ba3077dga02', teamId: '553434a3b4926ba3077dte04'},
  {isLocal: false, score: 2, gameId: '553434a3b4926ba3077dga02', teamId: '553434a3b4926ba3077dte05'},
  {isLocal: true, score: 2, gameId: '553434a3b4926ba3077dga03', teamId: '553434a3b4926ba3077dte10'},
  {isLocal: false, score: 1, gameId: '553434a3b4926ba3077dga03', teamId: '553434a3b4926ba3077dte09'},
  {isLocal: true, score: 0, gameId: '553434a3b4926ba3077dga04', teamId: '553434a3b4926ba3077dte05'},
  {isLocal: false, score: 0, gameId: '553434a3b4926ba3077dga04', teamId: '553434a3b4926ba3077dte07'},
  {isLocal: true, score: 3, gameId: '553434a3b4926ba3077dga05', teamId: '553434a3b4926ba3077dte01'},
  {isLocal: false, score: 3, gameId: '553434a3b4926ba3077dga05', teamId: '553434a3b4926ba3077dte06'},
  {isLocal: true, score: 5, gameId: '553434a3b4926ba3077dga06', teamId: '553434a3b4926ba3077dte03'},
  {isLocal: false, score: 0, gameId: '553434a3b4926ba3077dga06', teamId: '553434a3b4926ba3077dte04'},
  {isLocal: true, score: 2, gameId: '553434a3b4926ba3077dga07', teamId: '553434a3b4926ba3077dte09'},
  {isLocal: false, score: 1, gameId: '553434a3b4926ba3077dga07', teamId: '553434a3b4926ba3077dte08'},
  {isLocal: true, score: 1, gameId: '553434a3b4926ba3077dga08', teamId: '553434a3b4926ba3077dte10'},
  {isLocal: false, score: 1, gameId: '553434a3b4926ba3077dga08', teamId: '553434a3b4926ba3077dte01'},
  {isLocal: true, score: 2, gameId: '553434a3b4926ba3077dga09', teamId: '553434a3b4926ba3077dte05'},
  {isLocal: false, score: 2, gameId: '553434a3b4926ba3077dga09', teamId: '553434a3b4926ba3077dte04'},
  {isLocal: true, score: 0, gameId: '553434a3b4926ba3077dga10', teamId: '553434a3b4926ba3077dte02'},
  {isLocal: false, score: 1, gameId: '553434a3b4926ba3077dga10', teamId: '553434a3b4926ba3077dte01'}
]

module.exports = function(app) {
  var dataSource = app.dataSources.db;
  
  dataSource.automigrate('Tournament', function(err) {
    if (err) throw err;
    var Model = app.models.Tournament;
    var count = tournaments.length;
    tournaments.forEach(function(tournament) {
        Model.create(tournament, function(er, result) {
          if (er) return;
          console.log('Record created: ', result);
          count--;
          if (count === 0) {
            console.log('done creating tournaments');
          }
      });
    });
  });

  dataSource.automigrate('Group', function(err) {
    if (err) throw err;
    var Model = app.models.Group;
    var count = groups.length;
    groups.forEach(function(group) {
        Model.create(group, function(er, result) {
          if (er) return;
          console.log('Record created: ', result);
          count--;
          if (count === 0) {
            console.log('done creating groups');
          }
      });
    });
  });

  dataSource.automigrate('Team', function(err) {
    if (err) throw err;
    var Model = app.models.Team;
    var count = teams.length;
    teams.forEach(function(team) {
        Model.create(team, function(er, result) {
          if (er) return;
          console.log('Record created: ', result);
          count--;
          if (count === 0) {
            console.log('done creating teams');
          }
      });
    });
  });

  dataSource.automigrate('Game', function(err) {
    if (err) throw err;
    var Model = app.models.Game;
    var count = games.length;
    games.forEach(function(game) {
        Model.create(game, function(er, result) {
          if (er) return;
          console.log('Record created: ', result);
          count--;
          if (count === 0) {
            console.log('done creating games');
          }
      });
    });
  });

  dataSource.automigrate('GameParticipant', function(err) {
    if (err) throw err;
    var Model = app.models.GameParticipant;
    var count = games.length;
    gameParticipants.forEach(function(gameParticipant) {
        Model.create(gameParticipant, function(er, result) {
          if (er) return;
          console.log('Record created: ', result);
          count--;
          if (count === 0) {
            console.log('done creating gameParticipants');
          }
      });
    });
  });


};