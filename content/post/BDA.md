---
title: 'BDA'
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
  caption: # 'Image credit: []()' or Photo by ---- on ----
  focal_point: #smart
  placement: 2
  preview_only: false

authors:
- admin

tags:
- 

categories:
- 
---
#

## Needleman-Wunsch algorith
It's based on dynamic programming, which is an optimal alignment based on a scoring schema.
Which inthis case is: match = 2, mismatch = 0, gap = -1

- Determining if a n aligmnet is biologically meaningful is to provide a p-value within context.
- The scoring is based upon empirical data of meaning full and constantly present structure in nature.
## Substitution matrix: PAM matrix and BLOSUM matrix.
### (Percent Accepted Mutations) PAM matrix
Margaret O. Dayhoff in 1978.
Matrices formore closely related proteins tend to score more posively the replacements by the same amino acid.


### (Block Substitution Matrix) BLOSUM
Henikoff in 1992, Suggested that it was not necessary to take into account the whole protein sequence but only protein domains (or BLOCKS).
Matrices for more distantly related proteins (e.g. BLOSUM 62) tend to score more postevilye for more distant amino acids.

The values are based on the **log likelihoood ratio**

## Similarity v. Identity

## Multiple Sequence Alignment (MSA)
As in the Abrama;s walrds owrk on aircraft survavility the alginments that are not visible, are not.

- Extrapolate whether a novel sequence belong to a certain family.
- Build phylogenetic trees
- Identify patterns/domains/binding mofits that correspond to a particular functions
- Predict 3D strucutres
- Predict variant pathogenicity based on conservation and mutation effect
- Trends of molecular evolution
- Identify conversed elements to use in molecular biology (e.g. PCR)

### Neighbour-Joining
Neighbour-joining algorithm and tree

### Aligning composite sequences

## Hidden Markup mOdel (HMM)

Biological problem
- Wer don not know how sequences evolve
- We do not understand the reslation between strcutrdss and asquences
- We would not recongecnige the correct aligment.

We can:
- Structure, evnolutionary, functional and sequence similarity.
- Functional similarity need to be curated through empirical expertise.

Needeleman-Wunsch can't run the whoe sequence at the same time. That's why we need to run the problem in pieces.

### Note of caution
- Don't use many nearly identifcal sequenceses, 
- Don't very distant sequences
- Big alignments are dificuly.
- 30-70% sequence.

### Properties of the algorithm
- The cost of the algorithm is 0(nm) where n and m are the sequence lenghts, and 0 menas "in the order of".
- The socre of the cell at the right low is the score of the complete alignment.
- _scoring matrix_ or _matrix s_

_j_ is form columns
_i_ for rows

_gap penalty_ is an stablished value for adding any nucleotide to the chain.


## Smith and Waterman algorithm

## Blast.ncbi
### Homology searches

w window size = 3
- BLASTP 2-3 amino acidos
- BLASTN 16-64 nucleotides

E-value







































## References
- Conservation of primary structure in 165 ribosomal RNA