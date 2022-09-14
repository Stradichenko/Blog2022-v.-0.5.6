---
title: 'The Linux File System'
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
# The Linux File System

> Everything is a file

The most basic definition of a file in Linux is that it is a named collection of data which appears to the user as a contiguous block of information.

'/' also known as root.

- '/bin': is the binary commands folder for essential commands.
- '/sbin': or super bin. These commands are only available to superusers.
- '/usr': user directory.
- '/boot': booting files.
- '/var': log files and application files.
- '/tmp': files in here are deleted after rebooting the system.
- '/lib': shared library files.
- '/home': is the location for users.
- '/root': location for the root user.
- '/dev': is the location for devices files.
- '/etc': for many file configurations, including network.
- '/mnt': designed to mount drives such as usb, but they have to be mounted manually.
- '/media': designed to mount drives automatically

Each file has an individual owner (most often the user who created it) and a wider set of owners belonging to a particular Unix group. A Unix group is a set of users who have permission to access particular software or particular files. To check group type `groups`


## References
[Explain "In Linux and UNIX, everything is a file](https://askubuntu.com/questions/1103937/explain-in-linux-and-unix-everything-is-a-file#:~:text=The%20%22Everything%20is%20a%20file,filesystem%20layer%20in%20the%20kernel.)