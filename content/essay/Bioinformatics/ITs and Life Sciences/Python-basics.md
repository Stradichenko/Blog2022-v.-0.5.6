---
title: 'Python basics'
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
# Python basics
print()
input()
def()
try()
except()
quit()

`return()`: returns the result or 'residual value' of an input. 

```python
# is not clear to me why return() is better than just printing.
```

## Loops and Iterations
Loops can be infinite unless we introduce an `iteration`, something that changes.
- `break` goes out a loop and out of while indentation. `break` is indented by itself.
- `continue` gets you out of the current iteration and re-do the loop.
- `while` is similar to `if` but at the end of the function rechecks the `iteration`.
- **Definite loops** are finite and go through all the lines. In this case we use mostly `for`. 
- `in` 
```python
for i in [5,4,3,2,1]:
	print (i)
print ('blastoff!')
```
In the following case, Python is being *implicit* about the elements to the group `in` _friends_
```python
friends = ['Steve', 'Michael', 'Rachel']:
for friend in friends:
	print("Hello ", friend)
print('donzo')
```

### Uses of loops
- filtering is to look for something in a set of data.
- `None` is an non-value that can fill a variable. It can be used temporarily as we wait for the variable to be filled.
- `is` and `is not` are similar to booleans but used for `True`, `False` and `None`
- To avoid failing in case of exception is possible to do `try` and that be followed by `except` to include what to do in case of bad input. This 
```python
num = 0
tot = 0.0
while True:
	sval = input ('Enter input number: ')
	if sval == 'done':
		break 
	try: # here this statement will make a pause to try the following in a safe environment and have a ready response.
		fval = float (sval)
	except:
		print('This is not a number')
		continue
	num = num + 1
	tot = tot + fval
quit()
```
Exercise: 5.2 Write a program that repeatedly prompts a user for integer numbers until the user enters 'done'. Once 'done' is entered, print out the largest and smallest of the numbers. If the user enters anything other than a valid number catch it with a try/except and put out an appropriate message and ignore the number. Enter 7, 2, bob, 10, and 4 and match the output below.
```python
largest = None
smallest = None
while True:
	num = input("Enter a number:")
	if num == "done":
		break
	try:
		inum = int(num)
	except:
		print('Invalid input')
	if smallest is None:
		smallest = inum
	elif  inum < smallest:
		smallest = inum
	if largest is None:
		largest = inum
	elif inum > largest:
		largest = inum
print("Maximum is", largest)
print("Minimum is", smallest)
```

### Executing code from a file
#!/usr/bin/python
Make your python file executable by setting the x execution bit.
chmod a+x file.py

## Opening files using open()
- returns a handle use to manipulate the file. A handle is a porthole, a connection.
- Mode is optional and should be 'r' to read and 'w' to write. This doesn't mean information is opened, just readable.
- handle = open(filename, mode)
```python
fhand = open('mbox.txt')
```
- A file handle is a sequence of strings where each line in the file is a string in the sequence.
- In this case `for/in` can treat a file handle and allows to iterate to print.
	- An easy way to create a line counter would be:
```python
fhand = open('')
count = 0
for line in fhand:
	count = count + 1
print('line count: ', count)
```
To read:
```python
fhand = open('')
inp = fhand.read()
print(len(inp))
```
Take into account that print adds a newline. This whitespace from the right-hand side of the string can be eliminated using rstrip():
```python
fhand = open('')
for line in fhand:
	line = line.rstrip()
	if line.startwith('From:'):
		print(line)
```
A way to skip lines would be:
```python
fhand = open('')
for line in fhand:
	line = line.rstrip()
	if not line.startwith('From:'):
		continue
	print(line)
```



## References