---
title: 'Python Data Structure'
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
# Python Data Structure
Python as a dynamically typed language, its _values_ carry type information.
This section is particularly important since much of the bioinformatician's job is to understand data structures in databases so it can be manipulated.

- Inside a string: letters in a string can be called by `[]` after the string 
```python
vehicle = 'cars'
letter = vehicle[2]
print(letter) # resultting in printing _r_
```
And equations can be done within the string
```python
x = 3
w = fruit[x-1]
print(x) # should print r
```
- `len` gives the lenght of the string.
```
vehicle = 'cars'
x = len(vehicle)
print(x) # resultting in printing _r_
```

```python
# a good way to do a counter is to add + at the end and set a limit initially.

vehicle = 'cars'
index = 0
while index < len(vehicle):
	letter = vehicle[index]
	print(index, letter)
	index = index + 1
```

### String manipulation
- Going for [:] can give you the string from 0 up to, the superior limit.y
```python
fruits = 'avocado'
x = fruits
print(x[0:5])
# this will print avoc, not printing the letter a.
```
Negative numbers can be entered to read from right to left:
```python
fruits = 'avocado'
x = fruits
print(x[-1])
#o in avocadO
```
```python
# take into account that 
fruit = 'banana'
for all_members in fruit:
	print(all_members)
# this will print banana in sucession. Which means that everything after for will refer to the content in.
```
```python
# in operator can be used as a checker.
fruit = 'avocado'
'o' in fruit
# will print True
'n' in fruit
# will prin False. We can even do: 
if 'oca' in fruit:
	print('yes sir')
```

### String library
Since Python is an [OOP](Pillars-of-Object-Oriented-Progrmming-(OOP).md), the string class as other classes, has built-in functions set in the string library. The functions are invoked by the object method by appending the function to the string variable. Examples:
```python
content = 'Hello'
n = greet.upper()
print(n)
#HELLO
```
```python
fruit = 'avocado'
look = fruit.find('avo')
print(look)
# 0
look2 = fruit.find('z')
print(look2)
# -1, meaning he found nothing at all. Thiss function will initilly just print the first instance of the finding, say 'banana', 'na' will only register once. Even if the initial input is an string, the .find result is an integer.
```
```python
# search and replace
meet = 'Hi'
formal = meet.replace('Hi','Hello')
print(formal)
Hello
```
```python
# parse and extract, in this case a host from a string of information.
FROM Michael Bukowski, mbukow123123@gmail.com, time:111281781
data = 'FROM...'
inposition = data.find('@')
endpos = data.find(' ', inposition)
hostmail = data[inposition+1:endpos]
print(hostmail)
# it should print gmail.com. There is no one way to do this part of finding and stripping information. It honestly depend of the type of information available:
[](<data = "X-DSPAM-Confidence:    0.8475"
pos = data.find(':    ')
print(float(data[pos+5:]))>)
```
- Another useful thing is the rstrip() which removes _whitespaces_ or characters. In python a whitespace is considered: space, `\t` (horizontal tab), `\v` vertical tab, `\n` newline, `\r` carriage return and `\f` feed.

```
## Lists
The elements are surrounded by square brackets and the elements in the list are separated by commas. The elements can be any object. A list can be empty.
Lists have their own methods documented.
An easy way to create a list is:
```python
something = list()
something.append('book').append(99)
print(something)
# will print 'book', 99
```
We could ask if something is in a list by asking
```python
is 'book' in something
# True
```
We can also sort by:
```python
cast = ['Rachel', 'Ross', 'Monica', 'Phoebe', 'Joey']
cast.sort()
print(cast)
# ['Joey', 'Monica', 'Phoebe', 'Rachel', 'Ross']
```
It is possible to split a string using:
```python
line = 'hello                   world'
etc = line.split()
print(etc)
# will print ['hello', 'world']. When the delimiter is not specified, multiple spaces are treated as one delimiter.
# The delimiter can be stablished a follow:
superlist = 'yo;oi;hey'
print(superlist.split(';'))
# will print ['yo', 'oi', 'hey']
```
Strings are 'immutable', we cannot change the content of a string. We must make a new string. On the other hand lists are mutable, and can be changed with the index operator.
Range() returns a list of numbers that range from zero to one less than parameter.


## Dictionaries
A collection allows for many values in a single 'variable'. A list is a lineal collection of values that stay in order.
A dictionary is a 'bag' of values each with its own label or an associative array. They are like mini-databases, they are memory based key-value stores. 
- List index their entries based on the position in the list.
- Dictionaries have no order. So to index them is necessery and lookup "tag" or "key" `['tag']`.
- These dictionaries have different names on different programming languages.
- Dictionaries uses curly braces.
```python
# So we first need to create an empty dictionary to place information.
d = dict() # alternatively we can do d = {}
d ['age'] = 21
d ['course'] = 100
print(d)
# {'course': 100, 'age': 21}
# In this case we don't think of order as [:] but in tags.
```
| Name                   | Programming Language |
| ---------------------- | -------------------- |
| Associative arrays     | Perl/PHP             |
| Properties/Map/Hashmap | Java                 |
| Property Bag           | C#/.Net                     |
By adding integers to the same tag, they add up, and are stored as values.
- python throws an error when a reference key is not in the dictionary.
- In case a key doesn't exist a condition can be placed to check if a key exists:
```python
counts = dict()
names = ['mark', 'Steve', 'Diego', 'Jhonatan']
for name in names:
	if name not in counts:
		counts[name] = 1
	else:
		counts[name] = counts[name] + 1
print(counts)
```
 - This actually was the initial way to do it before the introduction 
In case we want to do a counting pattern we could:
```python
counts = dict()
print('Enter a line of text:')
line = input('')
words = line.split()
print('Words:', words)
print('Counting...')
for word in words:
	counts[word] = counts.get(word,0) + 1 # in this case, the dictionary method get() returns the value of the item with the specified key. the purpose of the second parameter of the **get()** method is to provide a default value if the key is not found.
print('Counts', counts)
```
```python
# In case of loops we can invoke the value by in a key by key[value]
counts = {'Chuck': 1, 'Martin': 125, 'Steve': 53}
for keys in count:
	print(key, counts[key])
# it should print:
# Steve 53
# Chuck 1
# Martin 125
```
- You can get a list of keys, values  or both, called items, from a dictionary through tuples:
```python
counts = {'Chuck': 1, 'Martin': 125, 'Steve': 53}
print('keys', counts.keys())
# ['Chuck', 'Martin', 'Steve']
print('values', counts.values())
# [1, 125, 53]
print('items', counts.items())
# ['Chuck': 1, 'Martin': 125, 'Steve': 53]
```
- In the case of for-in in python is possible to invoke the key and value at once like:
```python
counts = {'Chuck': 1, 'Martin': 125, 'Steve': 53}
for key,value in counts.items():
	print(key,value)
# Steve 53
# Chuck 1
# Martin 125
```
















![](https://upload.wikimedia.org/wikipedia/commons/1/10/Python_3._The_standard_type_hierarchy.png?1648576494017) | Statistics | Programming | | ----------------------------------------- | --------------- | | real-valued (interval scale, ratio scale) | floating | | count data | integer | | binary data | Boolean | | categorical data | enumerated type | | random vector | list or array | | random matrix | 2-d array | | random tree | tree |

## References