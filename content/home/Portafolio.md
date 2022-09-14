---
# A section created with the Portfolio widget.
# This section displays content from `content/project/`.
# See https://wowchemy.com/docs/widget/portfolio/
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: 'Topics'
subtitle: 'Showing essays by Category'

content:
  # Page type to display. E.g. project.
  page_type: project

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
  - name: All
    Categoty: '*'
  - name: Bioinformatics
    Categoty: Bioinformatics
  - name: Genetics
    Categoty: Genetics
  - name: Metrology
    Categoty: Metrology
  - name: Writing & storytelling (W&S)
    Categoty: W&S
  - name: Book/Article review (B/AR)
    Categoty: B/AR
  


design:
  columns: '6'
  view: masonry
  flip_alt_rows: true
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
---
