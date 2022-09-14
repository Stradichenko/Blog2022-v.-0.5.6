---
title: 'Python for Bioinformatics'
cms_exclude: true
subtitle: Python for Bioinformatics

# Summary for listings and search engines
summary:

linktitle:

# Link this post with a project
projects: [ITs and Life Sciences]

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

# Python for Bioinformatics
Since Python can do an array of functions, and is hard to stablish a ceiling of general mastering of Python, for the purposes of an bioinformatician, this and other related articles are meant for the absolute beginner to achieve:
- A general understanding of Python as a multifunctional tool.
- To be able to use [BioPython](https://biopython.org/), PyCogent, Biskit, Galaxy, PyMOL.
Is a  multi-paradigm programming language invented by Guido var Rossum in 1991.

- People that understand python are called _pythonistas_.

Is:
- Open Source
-  Multi-paradigm: Interpreter Language, scripting language, Object-oriented language
- Has a large number of libraries,
- Highly portable
	- Automatic memory management 
- Dynamically typed language.



### Background
Named after the BBC show “Monty Python’s Flying Circus”.
Python is an scripting language, which means a vaguely/loosely/lightweight typed programming language, contrary to programming language. 

Created by Guido van Rossum to be agreeable, fun and accesible.

==Scripting languages are interpreter-based languages, which mean is read line-by-line!==. Also means _implicit data declaration._ Limited support for graphic design, application development, eas to integrate.

On the other hand programming languages are compiler based, explicit declaration of datatypes, rich support for app development, garphic design or game development.

You write your Python code in a text file with a name like hello.py. How does that code Run? There is program installed on your computer named "python3" or "python", and its job is looking at and running your Python code. This type of program is called an "[interpreter](https://docs.python.org/3/tutorial/interpreter.html)".


The types of scripting languages are: client side or server side.
**Client-side scripting languages** (such as Javascript, jQuery, Typescript, VBScript, Ajax, LiveScript) in these cases we will need to run in the browser and have an interpretation called _indents_, on the other hand **Server-side scripting languages** run in the web server or backend: more like Python, ASP, PHP, CGI.


Python allows you to split your program into modules that can be reused in other Python programs.

Programs written in Python are typically much shorter than equivalent C, C++, or Java programs, for several reasons:
-  the high-level data types allow you to express complex operations in a single statement;
-  statement grouping is done by indentation instead of beginning and ending brackets.
-  no variable or argument declarations are necessary.
- Is extensible.


#### Legacy
The changes from python2 to python3 are very minimal. The print state is now the print function so it goes form:

print "hello world"
to 
print("hello world")

Other change is going from raw_input to input.

## Programming language paradigms
There are two patterns
1. Imperative paradigms: 
	1. Object-oriented (C++, Java)
	2. Procedural-oriented: C, Pascal
	3. Parallel-processing
2. Declarative paradigms
	1. Logical (PROLOG(PRO))
	2. Functional (LISP)
	3. Database

==Python is multiparadigm programming.==


### File extensions
-  Before version 3.0
	- .py: regular scripts
	- .py3: (rarely used) python3 script
	- .pyc: compiled bytecode (or) compiled scripts
	- .pyd: Windows dll file
	- .pyo: optimized .pyd
- After 3.0
	- .pyw: python script for Windows
	- .pyz: python script archiver (compressed or zip formatted)


## Python and IDE (development environment)s
Also known as a code _editor_, there is just not one option, IDLE, VsCode, IPython. Among those dedicated to Python, the most popular is called PyCharm. PyCharm provides code analysis, graphical debugger, unit tester and integration with version control systems, ideal for web development with the Django framework.

### Script Mode
Also known as Developer mode in .py extension.

The common tool is IDLE (Integrated Development Learning Environment)

The file usually start with a **shebang (#!)**, such as: telling the files location. eg. "#!/bin/python"

">>>" this is know as triple cheveron.

#### Python Comments
- Single line comments: they start by "#"
	- Multi-line comment: they start and end by triple quotes """.

## Anaconda Python distribution
Is a framework with many packages and a package manager called **Conda**. This framework has two popular IDEs:
- SPYDER (Scientific python development environment)
- Jupiter Notebook (or Ipython Notebook): IDE is an open sources web app created for interactive and shared code with interactive widgets, livecode, plot, narrative text, equations.

### Debugging in Python




### Pillars of Object-oriented Programming (OOP)
Before object-oriented, we had procedural programming which stored data in functions.

High function dependency is called spaghetti-code. That's when object-oriented comes to play: related variables and functions become units (**objects**). Functions are called method and variables are properties.
- **Encapsulation**: this is the property of grouping properties (make, model, color) and methods (start(), stop(), move()) into objects. As an advantage this require fewer parameters since properties replace them in the function. And makes it readably available.  (Reduce complexity + increase reusability)
- **Abstraction**: A lot of the process occurring within the objects, making a simpler interface and reducing the impact of change (Reduce complexity + isolate impact of changes)
- **Inheritance**: is a mechanism to reduce redundant code by templanting an element and allowing others objects inherit the properties of the element.
- **Polymorphism**: is a technique to eliminate switch/case statements

[Python Syntax](Python%20Syntax.md)
[Python-basics](Python-basics.md)

### [[Biopython]]

## Activities in bioinformatics using Pything

[DNA-sequencing-with-python](DNA-sequencing-with-python.md)

## References
- [Object-oriented Programming in 7 mins](https://www.youtube.com/watch?v=pTB0EiLXUC8)
- [Glossary](https://docs.python.org/3/glossary.html#glossary)
- [Top libraries for Python](https://careerkarma.com/blog/python-for-bioinformatics/)
- [Python interpreter](https://docs.python.org/3/tutorial/interpreter.html)
- [General article on Python](https://careerkarma.com/blog/python-for-bioinformatics/)