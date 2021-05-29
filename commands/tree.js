let fs = require("fs");
let path = require("path");
function treeFunc(dirPath){
    if(dirPath == undefined){
        treeHelper(process.cwd(),"");
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath,"");
        }else{
            console.log("Kindly enter the CORRECT path.");
            return;
        }
    }
}

function treeHelper(dirPath,indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile==true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    }else{
        let directoryName = path.basename(dirPath);
        console.log(indent+"└──"+directoryName);
        let childrens = fs.readdirSync(dirPath);
        for(let i=0;i<childrens.length;i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath,indent+"   ");
        }
    }
}

module.exports={
    treeKey:treeFunc
}