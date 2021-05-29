# File Manager for Windows, Linux and Mac
A Command line based File Manager tool which will organize your files in different directories based upon the extension of file.

## Working
This File manager is developed using NodeJS and modules used are file-system(fs) and path. Using the feature of path module in nodejs, It can work on all the operating systems.<br/>
It has 2 main commands.
1. ```manageme tree``` &#8594; Displays directory paths and files in each subdirectory.
2. ```manageme organize``` &#8594; Organize your files in the directory.

#### Organize command example 
It will create a directory named Organized files which has subdirectories in it.
- media directory will contain video files i.e. .mp4 and .mkv
- archives directory will contain zip and rar files
- and many more

```diff
- It will cut the files from original location and paste them in respective folders based on extension of files.
```
Don't Worry !! All files which has unique extensions or the extension types that are not recognised by this software will be found in others folder.

## How to install
- Clone this repository.
- Make sure you have latest version of ```Node.js LTS``` installed in your system.
- Open the CMD/Terminal in the folder and run the command ```npm link```
- It will make ```manageme``` as a global command on your system.
- That's it.

## Commands
After installation Now open the CMD/Terminal on desktop.
Commands are :-
1. ```manageme tree "directoryPath"``` &#8594; It will display directory paths and files for this Path location.
2. ```manageme organize "directoryPath"``` &#8594; It will organize your files in folders.
3. ```manageme help``` &#8594; To get all commands list.

#### Other way round is open CMD/Terminal in your Current Working Directory and directly type the above commands without writing directoryPath.
