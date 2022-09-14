---
title: Bioinformatics and Drug Discovery
subtitle: 

# Summary for listings and search engines
summary:

# Link this post with a project
projects: []

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

# Is this an unpublished draft?
draft: true

# Show this page in the Featured widget?
featured: false

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
- drug_discovery

categories:
- bioinformatics
---

# Bioinformatics and Drug Discovery
tags: #genes, #bioinformatics, #database, #drugs, #DAMBE, #drug_repurposing

Research: #idea_to_research: drug repurposing, how can we do a polipharmaceutical approach to treatments?

## Introduction
A desirable drug is a chemical or a combination that reduces symptoms with minimal possible amount of side-effects. Other properties are: affordability and profit, low chance of drug resistance, low deleterious effect on the environment.
## Genomic Sequence and Exome Data Indrug Discovery
 One of the early contributions from bioinformatics to drug target discovery is the identification of sequence homology between simian sarcoma virus onc gene, v-sis, and a platelet-derived growth factor (PDGF) by simple string matching.
> * Doolittle, R.F.; Hunkapiller, M.W.; Hood, L.E.; Devare, S.G.; Robbins, K.C.; Aaronson, S.A.; Antoniades, H.N. Simian sarcoma virus onc gene, v-sis, is derived from the gene (or genes) encoding a platelet-derived growth factor. Science, 1983, 221, 275-277.  
> * Waterfield, M.D.; Scrace, G.T.; Whittle, N.; Stroobant, P.; Johnsson, A.; Wasteson, A.; Westermark, B.; Heldin, C.H.; Huang, J.S.;  Deuel, T.F. Platelet-derived growth factor is structurally related to  the putative transforming protein p28sis of simian sarcoma virus.  Nature 1983, 304, 35-39.

These articles led to 2 new ways of thinking:
* The viral transforming factor may work by changing transient expression of a growth factor to constitutive expression, ==suggesting growt factor as target for anti-cancer drug development==. 
* Any factor modulating gene expression can contribute to cancer.

### Genetic Diseases
The difficulty concerning bioinformatic research is a lot of cases of genetic heterogeneity.
Effort must be made to distinguish three types of somatic mutations:
1) What causes disease may be a drug target.
2) Closed related to disease. This can be used for disease diagnosis, but not as targets.
3) Those not related to diseas that may happen when disease happens. This can be excluded in two ways: 1. By increasing size, 2. By collecting longitudinal data, identifying these mutations long before disease appears.

Bioinformaticians will tipically take three approaches to check if the mutation has major impact on gene function if:
1) Change of aminoacids with different qualities. 
2) The mutation occurs in a highly conserved non-coding sequence (usually comparing human and non-human primates)
3) The mutation occurs in a known signa for cellular machinery.

The methods to scan for regulatory motifs include:
1) Position Weight Matrix (PWM): to find the genomic location of a known motif,
2) Gibbs sampler for _de novo_ motifdiscovery, 
3) Support vector machines, which can be used to extract differences between two groups of sequences.

One used tool is DAMBE.

### Human Diseases Caused by Pathogens
* The first step is to identify essential genes in the pathogen as drug targets. Essential genes are often highly conversed and can be revealed by genomic comparisons and their phylogenetic relatives.
* The second step is to check for homologue of essential genes in the same host. If they do, inhibiting such genes in the pathogen may have adverse effect on the function of the host homologue.
* To minimize the change of pahogens developing drug resistance, it is important for the drug to target specific pathogen and not its non-pathogenic phylogenetic relatives.
* Drug repurposing is cost-effective in drug development.

## Epigenetics, Genome architecture and cistromes in Drug Discovery
* One important problem with an approach with histone deacetylation in epigenetics is that it regulates a large amount of genes, making it unapproachable from a drug perspective.
* The conceptual current shift of epigenetics demands integrated analysis of several types of high-throughput data: 
	* methylation pattern from bisulfite sequencing, 
	* DNA/protein binding data (cistrome) from ChIP-on-chip and ChIP-Seq,
	* genome architecture data from Hi-C
![](Pasted%20image%2020210606135505.png)

## Transcriptomics and Drug Discovery
## Proteomic Data and Drug Discovery
## Ribosome Profiling and Drug Discovery
## Structural Biology and Drug Discovery
## Bioinformatics and Drug Resistance
## Bioinformatic software and Databases
