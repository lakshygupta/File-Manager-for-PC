let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb", "msi"]
}
function organizeFunc(dirPath){
    // 1. input -> directory path given
    let destPath;
    if(dirPath == undefined){
        dirPath = process.cwd();
    }
    let doesExist = fs.existsSync(dirPath);
    if(doesExist){
        // 2. create -> organized_files -> directory
        destPath = path.join(dirPath,"organized files");
        if(fs.existsSync(destPath) == false){
            fs.mkdirSync(destPath);   
        }
    }else{
        console.log("Kindly enter the CORRECT path.");
        return;
    }
    organizerHelper(dirPath,destPath);
}

function organizerHelper(src, dest){
    // 3. identify categories of all the files present in that input directory  ->
    let childrenNames = fs.readdirSync(src);
    let childAddress; 
    for(let i=0;i<childrenNames.length;i++){
        childAddress = path.join(src,childrenNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // 4. copy / cut  files to that organized directory inside of any of category folder 
            let category = getCategory(childrenNames[i]);
            sendFiles(childAddress, dest, category);
        }
    }
}

function getCategory(name){
    let extension = path.extname(name);
    extension = extension.slice(1);
    for(let type in types){
        let currentType = types[type];
        for(let i=0;i<currentType.length;i++){
            if(extension == currentType[i]){
                return type;
            }
        }
    }
    return "others"
}

function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
}

module.exports={
    organizeKey:organizeFunc
}