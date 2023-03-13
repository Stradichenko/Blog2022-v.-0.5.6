---
title: 'PERL'
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
PERL is a high-level programming language created by Larry Wall and was initially released in 1987.


PERL is somewhat easier regarding versions and packages.

## Abstraction layer
In the abstraction layer we convert binary (01) into an integer system which in turn can mean anything and is given to programming interfaces. 
An algorithm is a set of finite steps to find a solution. Which doesn't mean that there's always a solution.
Variables can be changed in every step.

```mermaid
graph TD;
Specifications --> Design;
Design --> Implementation;
Implementation --> Testing; 
Testing --> Debugging;
Debugging --> Maintenance;
```

Scripts are written and need the compiler.
But the program are written 

## Low v. High & Compiled v. Interpreted
The level of compiling implies how much work is left to the assembler to translate into meaningful content.

`#!/usr/bin/perl` Is the shebang for PERL.
In a interpreter language, debbuging and testing is faster.

Local Perl guru
MAN pages and PERLDOC
books

TMTOWTDI
"There's more than One way to do it".
Laziness: The quality that makes you go to great effort to reduce overall energy expenditure.
Impatience: the anger you feel when your computer is being lazy.
Hubris: ptoe quality that makes you write and maintain programs, so other people don't say bad things.


Writing code Code
- Structure: PERL is not interested in _newlines_.
- Naming
- Comments
- Being `strict` which is a command to make strict evaluation of variables.

So a typical script would go as:
```perl
#!/usr/bin/perl
print "Hello World! \n";
```


If the program file is not in the standard $PATH, it will not run unless the path is specified.


## Variables and Control Structure
NAME$a;
NAME$a = VARIABLE

### Basic data strucutres in PERL
`$` = $calar values It could be a number, character, string, or object. 
`@` = @rrays of scalars, with indexed values, which means the array has a numbered position.
`%` = %ash variables: 
`\` = references

A "block" has 2 or statements and is in {}.
Since PERL uses scalar informations there are some predefined values that are considered FALSE values:
- integer valua: 0
- the floating point value 0.0
- the string '0' of zero length
- The empty (null) string ''
- THe empty list ()
- The special undefined value: undef
  in numerin context undef ==0

`my ` must be used to declare a variable.



```perl
use strict;
use warnings;

my $x = 15;
my $i = 1;
my $j = 2;

while {$j <= $i + 
  $i = $i $j;
  $j = $j + 1k # this is the increment (var) for the loop

};

print "X =
```
























## References
https://softwareengineering.stackexchange.com/questions/238033/what-does-it-mean-when-data-is-scalar

https://compgen.bio.ub.edu/~jabril/teaching/MBI2223_PER/
user: bioinformatics
password: atg01tga

https://stackoverflow.com/questions/13258223/assembly-understanding-ldi-for-high-and-low-bytes