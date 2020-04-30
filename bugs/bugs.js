var utils = require('../utils/utils');
var path = "/bugs/";

var bugs = {

    add: function(req,res){
        let bugs = req.body;
        utils.addObject(path,bugs).then(success => {
            res.send({"msg":"Added Successfully"});
        }).catch(error => {
            res.send(error);
        })
    }
}
module.exports = bugs;
