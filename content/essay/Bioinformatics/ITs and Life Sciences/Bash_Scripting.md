---
title: 'Bash Scripting'
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
- 
---
# Bash Scripting

The most typical file type for bash scripting is .sh

A file needs to be initially executable, by giving the proper permissions and by making it executable. Permissions are granted through chmod command, and executable through +x

+x chmod [PATH][FILENAME][FILETYPE]



## Basics
One way to invoke the interpreter is to provide the absolute path in the shebang: the problem is that is not portable to other file systems if we use an absolute path. An alternative is to use the following format to pick an relative path executable in PATH:

#!/usr/bin/env bash

- bash is commented with #. 

### Variables
They are created with `=` . There must not be blank spaces
```bash
name="Caroline"
```
To amend for whitespace which gets interpreted by bash, it’s good practice to wrap the variable name in curly brackets and encase it in double quotes:
```bash
salut="Good morning,"
echo "${salut}"
```
When a variable is called must have `$` :
```bash
echo "${name}"
# Caroline
```
In Bash, variables don’t have to be declared. What we mean by this is that if you try to access a variable that doesn’t exist, you won’t see an error, just a blank value.

#### Variable scope
There are **Global** and **Local** variables. Local variable only exist in the current script. Global or **Environment variables** on the other hand, are available to all shells. An example is `pwd`:
```bash
echo "${PWD}"
# will print the path
```
It's possible to make a local variable global by using the `export` command:
```bash
#!/usr/bin/env bash

export myname="Patricia"

```
Then we would have the variable to be called globally.

#### Arrays
Bash can also store variable arrays and share other similarities with software as python: 
```bash
array=("value 1" "value 2" "value 3")
```
Each value in an array is k
nown as an **element**. Each element in an array is referenced by a numerical index. This index starts at 0:
```bash
echo "${array[0]}"
# value 1
```

We can return all of the values in our array by using the **@** symbol:
```bash
echo "${array[@]}"
value 1 value 2 value 3
```

To count the number of elements in our array, we can prepend the array name with the # sign. In this case, we have 3 elements in our array:
```bash
echo "${#array[@]}"
3
```

#### Input 
We primarily use the function `read`, to ask the user for input. An example.

```bash
#!/usr/bin/env bash
echo "enter your name"
read name
echo "Hello ${name}"

```
`read` can also take multiple inputs.
`read` has many options, including `-p`, which allows a message to be displayed befor the input is read. And allows for shorter lines. `-s` hides the user input, in case is a password.

#### CLI arguments
A command line argument is a parameter that we can supply to our Bash script at execution. They allow a user to dynamically affect the actions your script will perform or the output it will generate.

To pass an argument to your Bash script, your just need to write it after the name of your script:

```bash
./fruit.sh my_argument
```
Which is intrepreted as the variables that are used as inputs $1, $2... and so on.

#### Conditional statements
Modern Bash syntax for conditional expressions encases our comparative expression inside double square brackets.
We can write our **if statements** in several ways:

```bash
if [[ condition ]]
then
		command
fi
```
So, if the expression within the square brackets returns _true_, then the code found between **then** and **fi** will be executed. If the expression returns _false_, the script will ignore (i.e. not execute) any code which lies between **then** and **fi**. Notice that we end our if statement with **fi** which is **if** spelt backwards.
‘;’ to allow **then** to be on the same line as the conditional expression:
```bash
if [[condition]]; then
		command
fi
```
Other commands that can be used are else-then AND/OR.

#### File and variable operators
When we process files in our Bash scripts, it is often useful to check that they exist or whether they’re empty before the rest of our script proceeds. File operators allow us to perform checks on files and give us the opportunity to handle errors gracefully.
Below are some of the most commonly used file operators.
Returns true if the file exists:
```bash
[[ -e ${file} ]]
```
Returns true if the file exists and is a directory:
```bash
[[ -d ${directory} ]]
```
Returns true if the file exists and is a regular file:
```bash
[[ -f ${file} ]]
```
Returns true if the file exists and is readable:
```bash
[[ -r ${file} ]]
```
Returns true if the file exists and has a file size > 0:
```bash
[[ -s ${file} ]]
```

We can also use conditional expressions to perform sanity checks on our variables.
For example, checking whether a value has been assigned to a particular variable (e.g. **var**):
```
[[ -v ${var} ]]
```
Or, to check that the variable length is greater than 0:
```
[[ -n ${string} ]]
```
Or, that the length of the variable is 0:
```
[[ -z ${string} ]]
```

## References