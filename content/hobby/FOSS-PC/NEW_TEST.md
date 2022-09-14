---
title: 'NEW_EST'
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
type: docs
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
# New test notebook... It should link properly? Maybe?

## New link way: same folder + relative path + wikilinks

[[../Keyboards/from-electronics-to-qmk]] ------> Relative paths don't work...

## same folder + relative path + markdown links 

[from-electronics-to-qmk](../Keyboards/from-electronics-to-qmk.md)
This is the path it generates: https://krotanote.netlify.app/hobby/foss-pc/Keyboards/from-electronics-to-qmk.md
--- Are detect but dont work

## Vault folder + relative path + markdown link
[from-electronics-to-qmk](../Keyboards/from-electronics-to-qmk.md)

I hate this alternative
[[NEWNOTE2]]

[NEWNOTE2](../../../../../NEWNOTE2.md)

NEWFILEWITH: same folder + relative path + markdown

[[test3]]

[test3](test3.md)

SAME FOLDER+ABSOLUTE+MARKDOWN

[NEWNOTE2](NEWNOTE2.md)

[test3](Obsidian%20Database/blog/content/hobby/FOSS-PC/test3.md)

[Improving-the-shell-experience](Improving-the-shell-experience.md)

[from-electronics-to-qmk](Obsidian%20Database/blog/content/hobby/Keyboards/from-electronics-to-qmk.md) --- Absolute paths generate 20% as a newline... why?


SAME FOLDER
SAME FOLDER+SHORTEST+MARKDOWN

[test3](test3.md)

[from-electronics-to-qmk](from-electronics-to-qmk.md)

NOSPACESPATH+SAME+ABSOLUTE+MARKDOWNLINKS

[from-electronics-to-qmk](obsidian-database/blog/content/hobby/Keyboards/from-electronics-to-qmk)

[from-electronics-to-qmk](obsidian-database/blog/content/hobby/Keyboards/from-electronics-to-qmk.md)

This last one preserves .md term

FOR SOME REASON IT KEEPS PUSHING THE PATH OF THIS LINK.

[[DELETENOTE]]

[DELETENOTE](obsidian-database/blog/content/hobby/FOSS-PC/DELETENOTE.md)

https://krotanote.netlify.app/hobby/foss-pc/deletenote/


... THIST TIME THE TYPE HAS BEEN CHANGED

FOR SOME REASON IT KEEPS PUSHING THE PATH OF THIS LINK.

[[DELETENOTE]]

[DELETENOTE](obsidian-database/blog/content/hobby/FOSS-PC/DELETENOTE.md)

https://krotanote.netlify.app/hobby/foss-pc/deletenote/

THIS HUGO THEME WILL TAKE THE PATH OF FILES AS ORIGIN BUT WILL INTERPRET THE SUGGESTED PATH OF





Link from page
https://krotanote.netlify.app/hobby/keyboards/from-electronics-to-qmk/

USAGE OF RELREF???

## References
For another day

https://github.com/warengonzaga/css-text-portrait-builder