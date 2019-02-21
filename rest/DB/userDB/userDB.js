
let Datastore = require('nedb');
let db = new Datastore({ mockUser: '/mockUser.json' });

db.loadDatabase(function (err) {
    console.log(err);
});

module.exports = {
    authenticate(_users) {
        return new Promise((resolve, reject) => {
           db.insert({
                "UserName": "john.doe@email.com",
                "CellPhone" : "",
                "Name": "John Doe"
                }, function (err, newDocs) {
                    if(err) {
                        reject(err);
                    }
                    resolve(newDocs);
            });
            /*db.find({}, (err, docs) => {
                if(err) {
                    reject(err);
                }
                resolve(docs);
            });*/
        });
    }
}