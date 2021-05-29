#!/usr/bin/env node
let helpcmd = require("./commands/help");
let treecmd = require("./commands/tree");
let orgcmd = require("./commands/organize");

let inpArr = process.argv.slice(2);

let command = inpArr[0];    

switch (command) {
    case "tree":
        treecmd.treeKey(inpArr[1]);
        break;
    case "organize":
        orgcmd.organizeKey(inpArr[1]);
        console.log("Files are organized successfully.")
        break;
    case "help":
        helpcmd.helpKey(inpArr[1]);
        break;
    default:
        console.log("Please Input right command");
        break;
}