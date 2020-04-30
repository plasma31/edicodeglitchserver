const { c, cpp, node, python, java } = require('compile-run');
var codeEditor = {
    "run": function (req, res) {
        //damn
        let obj = req.body;
        let codestr = obj.code;
        let inp = obj.stdin;
        if(req.body.stdin){
            cpp.runSource(codestr,{stdin: inp,compileTimeout:10000,timeout:10000}).then(success => {
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
            cpp.runSource(codestr,{compileTimeout:10000,timeout:10000}).then(success => {
                let err,mainerror,str;
                if(success.stderr){
                    err=success.stderr;
                    str=err.split(/,\s*/);
                    mainerror=str.splice(1,str.length); 
                    success.stderr=mainerror.join();
                }
                // console.log(typeof(error));
                res.send(success);
            }).catch(error => {
                res.send(error);
            });
        }
    }
    
}

module.exports = codeEditor;