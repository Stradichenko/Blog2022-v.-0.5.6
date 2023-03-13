---
title: 'Algorithms and Operating systems'
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

# Book page type (do not modify).
type: 
# The `course` folder in the example above may be renamed. For example, we can rename it to `book` for writing a book, `docs` for software/project documentation, `notes` for creating a notebook, or `tutorials` for creating multi-page “how to” guides.

# This will enable Table of Content
toc: true

# Is this an unpublished draft?
draft: false

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
  caption: # 'Image credit: []()' or Photo by ---- on ----
  focal_point: #smart
  placement: 2
  preview_only: false

authors:
- admin

tags:
- 

categories:
- 
---
# Algorithms: data structures and algoritmic thinking
# Linux: Command line And computation management
# Gear up: managing software

Mariotti Gennomics lab
ALG.course.22!
marco.mariotti@ub.edu

## Why linux
The web clients are 42% android

Linux is used on 96.3% of top web servers.
90% of cloud infrastructure
100% of supercomputers

Bioinformatics: loves Unix-Like OS.

Bell labs (AT&T) develop UNIX, a porpietary OS. iN 1973: Unix v4 is written in C.
1983: GNU project is born to make free Unix-like OS by Richard Stallman
1989: WWW is created by... Jim Bernes at CERN.
1976: Apple is founded: Steve Jobs, Steve Wozniak
1988: Jobs creates NeXT launches NexSTEP OS created from BSD.
1996: Apple buys NeXTEP to make Mac OS X.

UNIX c. Unix v. Unix-like


## Evolution of Linux
- Modular
- A lot of distros
- mostly differ in appareance

- Drivers: modular parts that help the kernel to interact hardware.
The terminal is an emulator of the text console, text-only interface to the OS.

- WSL2: Window Subsystem for Linux 2, was created to supply the need of linux but not leaving Windows. Unfortunately is not as 

CTRL+l = clear
`./` current folder
All core bash options for programs are always onel leter and can be concatenated after `-`.
To quit the text visualizer from `man` we type q.

`find`

Linux CTRl+SHIFT+T

cd, ls, pwd, cat, man, mkdir, find

find . -type d,f,

`more` command is similar to `find` but with a look of a pager. Similar program is `less`.

`head` is to look the first 10 lines of a file.
`tail` gives te last 10 lines of a file.
`cat` would be the standard lines of elements.

`mv` and `cp` use the same structure




## Languanges, Modules
https://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/LATEST/

- Low-level languages are closer to macnhine code, meanwhile high-level.
- Languages are modular: which mean is like a russian doll of basic function

- Becoming a coder means to know how to split the problem, assses it and use pieces to build a solution.

### Commands spawn processes
- Source code: human readable, is _translated_ through a program (e.g. compiler, or interpreter), then passes through machine code, is run to "spawn" a process.

- A process may spwn another process, that is called a _child process_.

CTRL+C will interrupt the proble currently running.
To actually copy you can use in Linux CTRL+SHIFT+C/V to copy/paste.

## PID
Is extremely powerful to know the PID of a process, using something as `top` or `htop` to find a process and then use something as.
- A highly risky command is `killall`.
- CTRL+D will tell the computer to end the process of terminal of prompt.

- `grep` -c will count the number of lines.
- `tail` is extremely useful in use with `>>` because append would go to the ebdn od the line.
- `wc`

Using the outputs from `htop` is possible to PID se


`xargs` takes an _stdin_ and runs it as a commmand in a pipeline, followed by other function

find ./ -name FILENAME.EXT | xargs ln -s 
``


stdin can come from input or the person's input. That's what happen in 


## File permissions

chmod modifier file1 [file2... ]
The first letter can be`-` or `d`


### Using chmod
`-` means remove
`a` means all
`w` write
`x` execute

`chmod a-w` filename = all remove write
`chmod a+r`








## Other variables in bash

`$HOSTNAME`
`$HOME`
`$HOSTTYPE`
`$OLDPWD`
if you use tab and `$` bash can detect new variables.

cd with no instruction
cd - goes to `$OLDPWD`

### variables in bash
it's possible to create a new variable using = and not using spaces. then the variable can be called with `$` before name

###
To create a new program it's possible to 

### How to make an script available to the command line?

#### creat a bin file and then add it to $PATH.
#### Or create a symbolink.
This is an elegant solition so the scripts are cateogrized into folders, using `ln`. This would allow us to not create many files and have access to all of them.

`diff` # check this command


`which` is used to locate a specific exuecutable by the shell
```bash
which ls # would output /usr/bin/which
```
```bash
export PATH=/home/USER/bin:$PATH
```
why use export? Variables that are not exported are not affected by children processes. Everything that goes to bash.rc has to go with the export commnand.

In mac, `bash.rc` is called `~/.bash_profile/`

prompt and interactive mean the same.

The filetype is not mandatory is just a formality to indicate the software to run it.!!

`cd bin/`

`echo $PATH`


## The $(commandline) construct
The expression inside the parenthesis are evaluated firs and their value (=output) is put in its place. It goes to the right of the program. This will also give us freedom to on where to put the input.


Look back at command lines in the google docs:

HOMEWORK!!!!!!





## References