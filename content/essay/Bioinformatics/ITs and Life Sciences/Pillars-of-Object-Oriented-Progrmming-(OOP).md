---
title: 'Pillars of Object Oriented Programming (OOP)'
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
- Python

categories:
- Bioinformatics
---
# Pillars of Object Oriented Programming (OOP) with Python
We can easily check the class object by using the type() command.
```python
x = 1
print(type(x))
# <class'int'>
```
Invoking an built-in function or method (object method), is by appending .method(), like so:
```python
string = "hello"
print(string.upper())
#HELLO
```
And depend entirely on the type or class of the object.
A way to know the methods available is by using dir() function:
```python
content = 'Hello Martin' # an string class
dir(content)
# ['capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', ...]
```

## Custom classes

## References
- [Python Object Oriented Programming (OOP) - For Beginners](https://www.youtube.com/watch?v=JeznW_7DlB0)
- 