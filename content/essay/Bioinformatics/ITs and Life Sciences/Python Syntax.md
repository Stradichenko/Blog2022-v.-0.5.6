---
title: 'Critical Assessments in the field of Life Sciences'
cms_exclude: true
subtitle: Critical appraisal or assessment is systematic and explicit judgement of the risk of bias, results and applicability of systematic reviews or studies.

# Summary for listings and search engines
summary: The purpuse of this project is to enlist and analyze the results of the different _Critical Assessment_ competitions in current existence and review the usefulness and significance in the area of Life Sciences and particularly Health Sciences

linktitle: Updates on Critical Assessments

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
# Python Syntax
Python has many similarities to Java, C and Perl. But follow what is called the [Zen of Python](https://peps.python.org/pep-0020/).

 Both Python 2 and Python 3 are used throughout the globe. The most significant difference between the two is how you write a `print` statement. In Python 3, `print` has parentheses.

## Identifiers
used to identify variables, function, class and module. Identifiers start with a letter or underscore. They can use numbers but no spaces or special chars.

## Indentation
For control flow blocks, Python uses 1 tab or 4 spaces to delimit.

## Quotes in string
for string is possible to do only single quotes `''`, but if the string has single quotes within `' isn't marvelous?'` Python may produce an error, an alternative is to double quote it `""` or adding a backlash `\` right before it to treat it like a character an don't interpret it. Backlash is an 'escape' character that gives the next char an special meaning. For long segments of string is possible to do triple quote `"""` at the beginning and end of the multi-line string. Python interprets multiple lines as a single line with an special newline character `\n`. Other examples: `\t` for tab, `\\` for backlash and `\"` for double quote.
End of lines are automatically included in the string; this is preventable by adding `\` at the end of the line.
```python
print("""\
>dna1
atgatgatgaatgagtatatagga
atgatagatatagagaggggaaaa
>dna2
tttttggggggtttgtttccccccc
attttttgggtgttgttaatttaac
""")
### will print:
###>dna1
###atgatgatgaatgagtatatagga
###atgatagatatagagaggggaaaa
###>dna2
###tttttggggggtttgtttccccccc
###attttttgggtgttgttaatttaac
### instead of:
print("""
>dna1
atgatgatgaatgagtatatagga
atgatagatatagagaggggaaaa
>dna2
tttttggggggtttgtttccccccc
attttttgggtgttgttaatttaac
""")
### >dna1\natgatgatgaatgagtatatagga\natgatagatatagagaggggaaaa\n>dna2\ntttttggggggtttgtttccccccc\nattttttgggtgttgttaatttaac
```

## [Python-data-structure](Python-data-structure.md)

## References
- [String formatting](https://realpython.com/python-string-formatting/)
- [String formatting advanced](https://www.youtube.com/watch?v=vTX3IwquFkc)
- [Identifiers](https://www.youtube.com/watch?v=5C8y4g-EjiI)