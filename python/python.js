const { c, cpp, node, python, java } = require('compile-run');

var codeEditor = {
    "run": function (req, res) {
        let obj = req.body;
        let codestr = obj.code;
        let inp = obj.stdin;
        if(req.body.stdin){
            python.runSource(codestr,{stdin: inp,executionPath:'python3'}).then(success => {
                success.input = inp;
                let err,mainerror,str;                
                if(success.stderr){
                    err=success.stderr;
                    str=err.split(/,\s*/);
                    mainerror=str.splice(1,str.length); 
                    success.stderr=mainerror.join();
                }
                res.send(success);
            }).catch(error => {
                res.send(error);
            });
        }else{
            python.runSource(codestr,{executionPath: 'python3'}).then(success => {
                let err,mainerror,str;                
                if(success.stderr){
                    err=success.stderr;
                    str=err.split(/,\s*/);
                    mainerror=str.splice(1,str.length); 
                    success.stderr=mainerror.join();
                }
                res.send(success);
            }).catch(error => {
                res.send(error);
            });
        }
    }
    
}

module.exports = codeEditor;