---
title: 'Speedrunning Sense in Bash'
cms_exclude: true
subtitle:

# Summary for listings and search engines
summary:

# This will show-up as a pop-up title
linktitle: 

# Link this post with a project
projects: []

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

type:

# Is this an unpublished draft?
draft: true

# Show this page in the Featured widget?
featured: false

# View.
#   1 = List
#   2 = Compact
#   3 = Card
view: 3

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: []()'
  focal_point: ""
  placement: 2
  preview_only: false

authors:
- admin

tags:
- speedrun

categories:
- bioinformatics
---
# Speedrunning Sense in Bash
As everything in the _speedrunning Sense_ category, the purpose of this posts is to bring the biggest amount of instructions with minimal amount of text, in the most pragmatic way possible.

Is not a cookbook since the core is comprehension over practicality.

OK

Everything that goes before prompt (this is prompt), is user name and current location of bash.
If you have COD and want a custom prompt, this is the way to do it.
The `$` in the prompt means you are an standard (not administrator or **root**)

The skills you want to run asap in Bash are:
- Who are you?: just write the `whoami`.
- where are you?: 
	- `pwd` or (**print working directory**) shows path/directory/folder
	- Just do `ls` (meaning _list storage_, meaning, _what's in the current folder?_). And could dh ls if you follow the command with the path. or show hidden files with `-a` and `-al` for extended information, or `-alh` for human readable numbers. 
		- Using `ls -ls` gives 7 columns:
			- Column 1: Column 1 gives details of file permissions. It consists of 10 characters. The first character indicates whether a file has a special status. Most commonly, when the character is a d, this means that the listed file is a directory. The next nine characters are split into three groups. Characters 2 to 4 indicate permissions for the owner of the file, characters 5 to 7 for the group owners of the file and characters 8 to 10 indicate permissions for all other users. In each case, if the first character is r, this means the user or group of users can read the file. If the second character is w, this means that the user or group of users can write to the file. Lastly, if the final character is x, this indicates that the file is executable by that user (i.e. it is a script or program they can run). Please note that directories are always executable if a user has permission to look at them.
			- Column 2: represents the number of links to a file.
			- Column 3: who owns the file
			- Column 4: show the group owning the file
			- Column 5: the size of the file/directory
			- Column 6: last modified date
			- Column 7: name file
	- `file` NAMEOFILE lets you find the extension.
- Who do you move?: as any WASD-user you'd like to move freely in space:
	- `cd` changes directory to the marked path. A faster way would be to start typing the characters to the new directory and press double tap to autocomplete. Successive tabs lets rotate options. This is really important because autocompletion can be used with any command to autocomplete files in current directory. Take into account that folders and files with spaces have to be ignored with a dash and a space: `\ `. 
		- To move one folder up us `cd ..`
		- To go back Home just add `cd` or `cd ` 
To the needs mentioned above, there's one caveat that can make moving really easy; that is, install ... The thing is that I'd would not implement this right away as a new user since I feel it could stunt the growth and allow misunderstandings. Still; once the basics are mastered, this is an impure tool that calls for practicality.

## Things you can do right now!
- To CREATE a file: `touch` and the name of file with extension (e.g `touch FILE123.txt`)
- To EDIT a file you can chose and editor and pick a file or create one (`nano FILE2.txt`). Text editors normally include vim, notepad++ and nano.
- In case you want to `clear` the screen, that's also a command.
- To PRINT a file just `cat` (concatenate) and select file with extension.
- To MOVE a file: `mv FILE.EXTENSION PATH/`, or instead of PATH/ simply add an `.` to move it to the current directory.
- To copy, is similar to `mv` but `cp` and name of the new copied file
- To remove a file `rm FILE.EXT` 
- To add a new user `adduser`, which is a command of the /sbin.
- To check for a file, say a user or a command `which` followed by the command/user.
- There are three commands used to change ownership and permissions of files. These are `chown`, which changes user ownership of a file, `chgrp`, which changes group ownership of a file, and `chmod`, which changes the permissions of a file.
	- This site demonstrates the meaning of each digit and can be used to ensure you set permissions correctly: https://chmod-calculator.com/ The second way to use chmod is known as symbolic mode. It uses a similar syntax but letters and symbols (+ and -) to set permissions. There are always three characters to the argument when running chmod in symbolic mode. The first character must always be a letter and can be one of u (user), g (group), o (others) or a (all i.e anyone covered by u, g or o). The second character is a symbol and can be either + to add a permission level or - to remove a permission level. The third character is a letter, which can be one of r (make files readable), w (make files writeable) or x (make files executable). As an example, chmod g+w file.txt will make file.txt writeable by anyone with group ownership.
- In doubt the manual can explain the commands: `man`.
- Not using a text editor like nano, Vim or Neovim, it's possible to navigate with commands such as `head` FILE to go to the 10 first lines of a file. or use `head -2` FILE to see the first 2 lines of code the last part of the document can be checked conversely with `tail`. 
Every file in a system has an index node (inode). The inode contains primarily: inode, file size, owner information, permission, file type, number of links. A symlink is a symbolic Linux/ UNIX link that points to another file or folder on your computer, or a connected file system. Symlinks can take two forms: **Soft links** are similar to shortcuts in Windows, and can point to another file or directory in any file system and is lightweight. It has a different inode. **Hard links** are also shortcuts for files and folders, but a hard link: has the same inode, same file sizes, is also edited when the original file is edited but preserved when the original file is deleted.
- To create a soft link the pattern is:
``` bash
ln -s /<path to file/folder to be linked> <path of the link to be created>
```
`ln` works with hard links by default, by removing the `-s`. For folders or files with special characters, like spaces, then use quotes around the paths.
- The `wc` is a useful tool for counting the number of lines, words and characters in a file. `wc -l` outputs the number of lines, `-w` the number of words. `-c`, characters.
- The `sort` command orders a list of items both alphabetically and numerically. The order can be reversed with `sort -r` FILE. The results can be embedded into another file by: `sort` FILE `>` NEWFILE. Using `-f` ignore
- whereas the `uniq` command removes adjacent duplicate lines in a list only if they are adjacent to each other. That’s why it’s used in conjunction with sort to remove non-adjacent lines.
`sort` FILENAME `| uniq`
- `grep` does pattern matching and globally search for a regular expression and print matching lines. `-F` searches for fixed strings rather than regular expressions.
- `sed` allows to replace a string in a file. With the following example as formula:
``` bash
sed 's/oldtext/newtext' file.text
```
Optionally it can saved into a new file:
```bash
sed 's/oldtext/newtext' oldfile.text > newfile.txt
```

## File Processing with AWK
AWK is a programming language. It is named after its three developers: Alfred Aho, Peter J Weinberger and Brian Kernighan.

It is particularly useful for processing text files and extracting data, particularly when a file is split into columns or delimited by a specific character (e.g. a comma). AWK is a standard package in most Linux releases as well as Mac OSX. AWK is generally written in upper case, although the command itself is lower case.

AWK can be used to write complex scripts and programs but, in this course, we will use it directly on the command line. It reads a file line by line and splits each line into columns according to a delimiter character. The default delimiter is a single space character.

In the command line is possible to invoke awk and then the formula. 
The following is an example:

```bash
awk -F "\t" '$2=="string" {print $0} || $4=="otherstring" file.txt
```

`""` in awk refers to the exact string. `$` and a number refer to a column. `''` is the command or order to achieve with AWK. `||` is used as OR boolean, `&&` is the AND boolean. AWK takes numeric values such as `>`, `<`. `FNR` represents the current line number.

## Environment variables 
In computer operating systems, an environment is an area that contains information about the behaviour of programs and applications.

By convention, LINUX environment variables are in uppercase.
**Environment variables** are system wide and are inherited by all system processes and shells.

**env** – This allows you to run another program in a custom environment without modifying the current one. When used without an argument it will print a list of the current environment variables.

**printenv** – This prints all the specified environment variables. For example, to display the value of the HOME environment variable type:




## References

[Beginner's Guide to the Bash Terminal](https://www.youtube.com/watch?v=s3ii48qYBxA)
[bashrc](https://cloudzy.com/knowledge-base/linux-bashrc/)

[the Linux File System explained in 1,233 seconds](https://www.youtube.com/watch?v=A3G-3hp88mo)