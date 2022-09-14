---
title: 'Bash notes'
cms_exclude: true
subtitle: Bash notes

# Summary for listings and search engines
summary: 

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

# Bash notes

## Syntax
### Shell operation
- Comments are inserted as '#'
- The shell reads and break an input, parses the tokens into commands, perform the expansions and redirections, executes and optionally wait the command to complete and collect its exit status.

### Quoting
Removes the special meaning of characters and words. These are:
- escape characters: non-quoted 'backslash', preserves the literal value of the next character.
	- '\newline' is the exception and if not-quoted, is treated as line continuation
- Single quote: (''), preserves the exact value of the engulfed characters.
- Double quote: (""), preserves the exact value with the exception of '&', '''', '\'.
	- When history expansion is enabled: '!' too.
	- '\' retains special meaning when is followed by '$', '''', '""', '\' or 'newline'
		- In '""' '\' followed by one of these characters are removed.
	- history expansion will be performed unless '!' in double quotes si escaped using backslash.
	- """" is possible if preceded by a backslash.
	- '*' and '@', have special meaning in double quotes.
- ANSI-C quoting:


