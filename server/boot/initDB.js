var tournaments = [
  {id:'553434a3b4926ba3077d7f01', name: 'Torneo A', hexColor: '#F56495'},
  {id:'553434a3b4926ba3077d7f02', name: 'Torneo B', hexColor: '#40BBBD'},
  {id:'553434a3b4926ba3077d7f03', name: 'Torneo C', hexColor: '#8686D9'}
];

var groups = [
  {id:'553434a3b4926ba3077dgr01', name: 'Gurpo 1', tournamentId: '553434a3b4926ba3077d7f01'},
  {id:'553434a3b4926ba3077dgr07', name: 'Grupo 1', tournamentId: '553434a3b4926ba3077d7f02'},
  {id:'553434a3b4926ba3077dgr08', name: 'Grupo 1', tournamentId: '553434a3b4926ba3077d7f03'},
];

var teams = [
  {id:'553434a3b4926ba3077dte01', name: 'Boca Juniors', logoFile: '5.gif'},
  {id:'553434a3b4926ba3077dte02', name: 'River Plate', logoFile: '17.gif'},
  {id:'553434a3b4926ba3077dte03', name: 'Club Libertad', logoFile: '69.gif'},
  {id:'553434a3b4926ba3077dte04', name: 'SL de A', logoFile: '19.gif'},
  {id:'553434a3b4926ba3077dte05', name: 'Danubio FC', logoFile: '72.gif'},
  {id:'553434a3b4926ba3077dte06', name: 'Racing', logoFile: '16.gif'},
  {id:'553434a3b4926ba3077dte07', name: 'The Strongest', logoFile: '74.gif'},
  {id:'553434a3b4926ba3077dte08', name: 'Sao Paulo FC', logoFile: '75.gif'},
  {id:'553434a3b4926ba3077dte09', name: 'U FC', logoFile: '76.gif'},
  {id:'553434a3b4926ba3077dte10', name: 'Cerro Porteño', logoFile: '77.gif'}
];

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


};