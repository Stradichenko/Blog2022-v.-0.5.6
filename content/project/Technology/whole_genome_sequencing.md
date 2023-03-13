---
title: 'Whole Genome Sequencing'
cms_exclude: true
subtitle: Whole Genome Sequencing using SARS-CoV-2 as an example

# Summary for listings and search engines
summary: WGS with SARS-CoV-2

# This will show-up as a pop-up title
linktitle: WGS with SARS-CoV-2*

# Link this post with a project
projects: []

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

# Book page type (do not modify).
type:  docs
# The `course` folder in the example above may be renamed. For example, we can rename it to `book` for writing a book, `docs` for software/project documentation, `notes` for creating a notebook, or `tutorials` for creating multi-page “how to” guides.

# This will enable Table of Content
toc: true

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: true

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
- SARS-CoV19
- WGS

categories:
- Technology
- Bioinformatics
---
## Glossary
- **Adaptors**: Oligonucleotide that can be used for DNA barcode
- **Amplicon**: DNA amplified
- **A-tailing**: Enzimatic addition of adenines at -3'terminus, with purposes of sequencing.
- **Barcoding**: addition of known DNA sequence (barcode or index), to amplicon, allowing for parallel sequencing and for stratifying sample data informatically post/during sequencing.
- **Consensus sequence**: DNA, RNA or protein sequence generated from a set of aligned sequence calculated on the most frequent nucleic acids or residues in each position of the alignment.
- **Library**: in sequencing is a pool of DNA fragments attached to adaptors and/or other oligonucleotides used during sequence preparation.
- **Trimming**: removing ends of reads.
- **Tagmentation**: Initial step in library preparation, DNA is cleaved and tagged.
- **Open reading frames**:

## Introduction to viral genomes
![Viral genome sizes](viral_genome_size.png "Viral genome sizes, [Source](https://slideplayer.com/slide/12253566/)")

- RNA genomes tend to be smaller than DNA genome.
- General order of genome size: viral < prokaryote < eukaryote.
- In viral replication transcription is a mandatory step.

## Baltimore Scheme for Viral Classification

![Baltimore Scheme](baltimore_scheme.png "Baltimore Scheme", [Source](https://slideplayer.com/slide/12253566/)")

- All RNA viruses are ss.
- All single-stranded DNA viruses are positive-strand viruses, with only one known exception, the Anelloviridae.

## SARS-CoV-2 genome
- Coronaviruses (CoVs) are a group of enveloped ssRNA (+) viruses of 27-32kbp.
- Has at least 6 **open reading frames (ORFs)**.
- The genes ORF1a and ORF1B encode 16 non-structural proteins (NSP1-16); which form a **replication-transcription complex (RTC)**.
- The structural genes encode the structural proteins, spike (S), envelope (E), membrane (M), and nucleocapsid (N).

![SARS-Cov2 virion structure](sarscov2_structure.png "SARS-Cov2 virion strcuture")

## Importance of viral sequencing
- Characterize viral genome
- Estimate variant's prevalence
- Evaluate treatment effectiveness
- Understand evolution, epidemology diagnosis, surveillance

## Bridge amplification
It was developed by Cambridge University’s Shankar Balasubramanian and David Klenerman, who later founded Solexa, which was acquired by Illumina. This method of sequencing DNA molecules of approximately 500 bp are used as substrates for repeated amplification synthesis reactions on a solid support (i.e., the flow cell) containing oligonucleotide sequences complementary to a ligated adapter. 

## References