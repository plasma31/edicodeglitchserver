const { c, cpp, node, python, java } = require('compile-run');
var codeEditor = {
    "run": function (req, res) {
        let obj = req.body;
        let codestr = obj.code;
        let inp = obj.stdin;
        if(req.body.stdin){
            node.runSource(codestr,{stdin: inp,compileTimeout:10000,timeout:20000}).then(success => {
                if(success){
                    success.actualOutput = success.stdout;
                }
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
            node.runSource(codestr,{compileTimeout:10000,timeout:20000}).then(success => {
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