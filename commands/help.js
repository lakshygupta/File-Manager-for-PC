function helpFunc(dirPath){
    console.log(`
    Welcome to File Manager
    
    [ ManageMe ]
    
    List of All the commands:
        1.) manageme tree "directoryPath" 
        2.) manageme organize "directoryPath" 
        3.) manageme help

    Note :- For current working directory [cwd]:
                a.) manageme tree
                b.) manageme organize
    `);
}

module.exports={
    helpKey: helpFunc
}