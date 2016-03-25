var fs = require('fs');
var path = require('path');

module.exports = function(dir, filterStr, callback){
    fs.readdir(dir, function(err, files){
        if(err) return callback(err);
        list = files.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list);
    })
}
