---
title: 'From bash to powershell for Bioinformatics'
cms_exclude: true
subtitle: From bash to powershell for Bioinformatics

# Summary for listings and search engines
summary: 

linktitle:

# Link this post with a project
projects: []

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

type: project

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
- 

categories:
- Bioinformatics
---

# From Bash to Powershell in bioinformatics
But, **why is Linux key to biology and bioinformatics?** Increasingly, the output of lab-based biology exists as large text files, for example the data files from sequencing machines. Linux has a range of powerful and flexible commands which can be used to edit and manipulate these files. Importantly, these commands can be combined to effectively produce new commands.

The title tries to acknowledge that Bash as a command-line language is important in bioinformatics, but it hasn't been updated since version 3.2 in 2006. The one to follow the updates is Powershell, which extents capabilities and is still being updated. Therefore this article focuses in the barebone of bash and some suggestions for implementation with Powershell.
Starting with definitions, for the absolute beginner is not rare to mix terms as Terminal, bash, zsh.
The confusion usually comes from the fact that most of these programming language are also their own shell (of the same name).

**Terminal**: is a software screen that relies information to the main memory (which is commonly a minimal interface).

### **Shell** 
Is a macro processor that executes commands.  The term macro processor means functionality where text and
symbols are expanded to create larger expressions.
Being the outermost layer, is a program that exposes the services of the operating system. They are generally command-line interface (CLI) or graphical user interface (GUI).

#### Unix shell
A Unix shell is both a command interpreter and a programming language. As a command interpreter, the shell provides the user interface to the rich set of GNU utilities. 

Files containing
commands can be created, and become commands themselves. These new commands have the same status as system commands in directories such as '/bin', allowing users or groups to establish custom environments to
automate their common tasks.

**Terminal emulator,** terminal application, is a computer program that emulates a video terminal within some other display architecture. Though typically synonymous with a shell the term terminal covers all remote terminals, including graphical interfaces.

Console was the term for the computer terminal.

### POSIX (Portable Operating Systems Interface)
,A family of open system standards based on Unix. Bash is primarily concerned with the Shell and Utilities portion of the POSIX 1003.1 standard. 
Unix used to be considered an operating system but nowadays is more about an standard and OS being considered '_Unix certified_', meaning that follows the Unix standard. This certification guarantees a set of services and behavior, which in turn warrants it to the user and therefore makes it usable.
An existing alternative in standards is SUS (Single Unix Specification), which is specific for Unix.

They in general are talked in the context of associated operating systems.
Linux and Unix have many similarities such as structure and commands. 

| Unix                     | Linux                           |
| ------------------------ | ------------------------------- |
| Unix macOS, Solaris, BSD | Ubuntu, Fedora, Debian, Android |

### [[Linux]]
In the case of Linux, it's defined by the kernel. And this is a commonality of all "distributions" which uses Linux's kernel. Linux came to be from the proprietary  licensing of Unix. Linux uses GNU GPL v.2. Linux is considered FOSS and Unix-like. 

## Powershell 
Introduced in 2005, takes the bash principles of the scripting syntax but passes information as rich-objects.

Terminal is the software that runs the shell, examples are bash for Mac and Powershell for Windows.

## **[[Bash]]**
There are many several types of shell available, each of which has a distinctive syntax. The first, the Thompson shell, was released in 1971 by Ken Thompson. However, this had many limitations leading Stephen Bourne to release his Bourne shell six years later, in 1977. Providing a more functional interaction with the operating system, the Bourne shell not only served as a CLI, but introduced variables, loops and control flows into shell scripts.

Unfortunately, the most widely used shells at that time were not freely available. In order to bridge this divide, Brian Fox developed the **B**ourne-**A**gain **Sh**ell (Bash) in 1988 for the GNU project.

From the official documentation:
> Bash is the shell, or command language interpreter, for the GNU operating system. The name is an acronym for the 'Bourne-Again SHell',
a pun on Stephen Bourne, the author of the direct ancestor of the current Unix shell 'sh', which appeared in the Seventh Edition Bell Labs Research version of Unix.


If you like a particular shell and want to make the change permanent (i.e. set in all future terminals by default), you can use the chsh command with the -s option (bypassing the editor) and the path to the interpreter you want to use.

Some of the shells that Bash has borrowed concepts from are the Bourne Shell ('sh'), the Korn Shell ('ksh'), and the C-shell ('csh' and its successor, 'tcsh')

Regarding specifically on how to learn bash I feel I'd be doing a dis-service not to refer the Bash documentation. The access in terminal would be: `chsh -s /bin/bash`

`bash`
`info bash`

In terms of becoming _inmediately effective_. I recommend: [[Speedrunning Sense in Bash]], where I try to sparknote on how to jump to action ASAP as a bioinformatician but understanding most of the principles.

In Bash single line comments start with '#'/


Cmd

Powershell is a new approach that extends the functionality of Bash

There's also **Zsh** as a command-line language, I guess. 

**Prompt**

CLIs processes commands in the form of lines of text.


A terminal is the end of a line. A terminal emulator is the use of a computer machine to provide the function of a terminal in software.


Minimal terminal emulators

There's also the option of *minimal* terminal emulators.

But why use terminals?:
- Terminals allow for easy use of commands
- Comfortable interaction with CLI.
- History of commands.
- Easier to admin multiple computers
- Remote command 
- Custom commands.

Testing
As there isn't much of a bash ecosystem, there also isn't really a de facto leader in the bash testing area. For these examples we are using bats. You should be able to install it from your favorite package manager, on macOS with homebrew.



In Windows is called command prompt, in Linux is called a shell and is just called Python interpreter.


### Glossary
Glossary of less known terms used in this course

**argument** - generally, arguments are options controlling how functions and commands should operate on specific data

**bash** - Bourne Again Shell (Bash). A shell developed by Brian Fox in 1988.

**bioinformatics** - the science of collecting and analysing complex biological data.

**command** - a type of input, typically given in a terminal, which instructs the system to perform a given task.

**CRAN** - the Comprehensive R Archive Network. Provides access to mirrors, a set of sites spread worldwide, for downloading R and related packages

**csv file** - comma-separated values file. In these files, a “comma” delimiter is used to separate items of the same line

**.csv** - extension of a csv file

**data frame** - a group of vectors organised together in a list. In other words, a data frame is a data set containing data organized in columns and rows

**exit status/code** - value returned by a command or process to it’s caller.

**function** - a set of statements allowing to perform a task

**getwd()** - get your current working directory in R

**GUI** - a graphical user interface through which users interact with electronic devices

**help() or ?** - help() is a function and “?” an operator in R to provide help

**install.packages()** - install new R packages

**kernel** - the computer program at the core of an operating system. The kernel has control of everything in the system

**library()** - load a package that has been previously installed

**list** - a set of objects of any class, linked together

**loop** - process by which code can be repeated multiple times.

**MLST** - multilocus sequence typing. A technique in microbiology for isolating microbial species using the DNA sequences of housekeeping genes.

**mode** - the property of an object in R, such as numeric, character, logical, etc…

**object** - a variable or a data set or any form of item containing information created or used in R. More generally, anything that has a “mode” is an object in R (data frames, vectors, lists, etc…)

**package** - a collection of functions and commands written in order to achieve a certain goal in R, and allowing users to easily query their data using specific commands and arguments for each package

**QC** - quality control. In DNA sequencing, ensuring that the sequenced data is suitable to use in further analyses.

**script** - a form of computer program, typically a file, which contains a collection of commands.

**setwd()** - set your working directory

**shell** - generic name for an application or program which provides access to the underlying system resources.

**string** - a one dimensional array of characters

**terminal** - a GUI-based interface into which users can type commands and print text output

**text editor** - a computer program for editing plain text files. This differs from a word processor, which includes text formatting.

**text file** - a computer file in which data is stored in a particular structure of successive lines. When used for more complex purposes, it is generally structured in lines for the entries and in columns or “fields” for different conditions. All elements in these entries are delimited from one another by “separators” (spaces, tabulation, etc…)

**UNIX** - is an operating system developed by Bell Laboratories of AT&T, and is an example of a multi-tasking, multi-user operating system

**user** - the individual accessing system resources.

**variable**

-   a string of characters that is used to denote some value stored within the computer and may be changed during execution of a programme
-   an object in R that stores data in a specified manner, and can be used to easily manipulate the data

**vector** - the simplest structure of data in R, consisting of elements called components



# References
- [Unix v. Linux](youtube.com/watch?v=hy4OeVCLGZ4)
- [Genera data on powershell](https://www.youtube.com/watch?v=nahtw_csB5w)
- [Basics of Bash](https://www.youtube.com/watch?v=oxuRxtrO2Ag)
- [Terminal emulator](https://superuser.com/questions/96628/why-are-things-like-gnome-terminal-called-terminal-emulators-instead-of-just)
- [Uses of terminals](https://www.youtube.com/watch?v=1YxHXBsVNGQ)
- [Pash](https://binpash.github.io/web/)
- [Bash in 100 Seconds](https://www.youtube.com/watch?v=I4EWvMFj37g)
- [Terms explanations](https://www.youtube.com/watch?v=hMSByvFHOro)
- [Biskit official website](http://biskit.pasteur.fr/)
- [Bioinformatics for Biologists: An Introduction to Linux, Bash Scripting, and R](https://www.futurelearn.com/courses/linux-for-bioinformatics)