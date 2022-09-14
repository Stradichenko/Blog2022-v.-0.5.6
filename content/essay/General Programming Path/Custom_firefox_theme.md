---
title: 'Custom Firefox Theme'
cms_exclude: true
subtitle: We will learn some CSS while creating a custom CSS file for a Firefox theme.

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
draft: falase

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
# Custom Firefox Theme


[userChrome.css](https://www.userchrome.org/)


[](<here's instruction that i had written in another repo of mine

Place both chrome and startpage in .mozilla/firefox/PROFILE/ to use them. You can get the location of your PROFILE dir in about:profiles. Set the startpage for Home in preferences and restart.

the chrome dir contains 2 types of files.

userChrome.css and userContent.css for the UI and the default homepage respectively.

userChrome.xml and userChrome.js for setting the New tab page to a custom page.

If you are using FF 69+ you need to enable this first: about:config %3E toolkit.legacyUserProfileCustomizations.stylesheets > true

For the startpage: To enable the newtab startpage functionality open userChrome.js and then change const mypage = "file:///home/debasis/.mozilla/firefox/sawjo289.default-esr/startpage/index.html"; Put the path of your index.html in the quotation.>)
## References
- [How to make Firefox look awesome with FirefoxCSS](https://www.youtube.com/watch?v=mRhtjQz7gzc)
- [r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS/top/?t=all)
- [FirefoxCSS Store](https://firefoxcss-store.github.io/)