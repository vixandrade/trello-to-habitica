//habitica configs
var habiticaApiKey = '1adfa9da-c707-4e5b-8e3a-71f23b84e6aa';
var habiticaUserId = 'dcbefa9f-0b24-4a4e-bdf4-b4f2f985765e';
var headers = {
    'Accept': '*/*',
    'x-api-user': 'dcbefa9f-0b24-4a4e-bdf4-b4f2f985765e',
    'x-api-key': '1adfa9da-c707-4e5b-8e3a-71f23b84e6aa'
}

//trello configs
var trelloKey = '51a83e4743d294042b9d25a93cf4e0f4';
var trelloToken = '6305fe25e5baec673c0a69120b945c813656dda655bfd522cea7546196b75ca1';
var boardId = '5a6bae24c5791daa249ab471';
var initialListName = 'To Do';
var finalListName = 'Done';

//heroku configs
var heroku_api = 'https://trello-to-habitica-hk.herokuapp.com';

//mongo configs
var mongoHost = 'admin:admin@ds217898.mlab.com';
var mongPort = '17898';

var serverAddress = 'mongodb://' + mongoHost + ':' + mongPort;
var connectionString = serverAddress + "/trello-to-habitica";

var secret = 'developmentSecret';
var mongoDb = {
    uri: connectionString,
    options: {}
};

//mongodb://<dbuser>:<dbpassword>@ds217898.mlab.com:17898/trello-to-habitica

module.exports = {
    habitica_apiKey: habiticaApiKey,
    habitica_userId: habiticaUserId,
    trello_key: trelloKey,
    trello_token: trelloToken,
    trello_boardId: boardId,
    trello_headers: headers,
    heroku_api: heroku_api,
    initialListName: initialListName,
    finalListName: finalListName,
    secret: secret,
    mongoDb: mongoDb
};
