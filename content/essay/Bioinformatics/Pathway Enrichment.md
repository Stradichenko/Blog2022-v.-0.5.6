# Pathway Enrichment
Is a method to identify biological pathways that are enriched in a gene list more than would be expected by chance.
It uses RNA-seq and genome-sequencing experiments. 
The steps are as follows:  
1. _Definition of a gene list from omics data_: an omics experiment comprehensively measures the activity of genes in a experimental context. The resulting raw data requires processing, such as normalization and scoring, in order to identify genes of interest. Different data (RNA-seq data, gene expression microarrays, quantitative proteomics, germlike and somatic genome sequencing, and global DNA  methylation assays) can be used but it may require specific pre-processing steps). There are 2 major ways to define a gene list from omics data: list or ranked list. The list is suitable for direct input into pathway enrichment analysis using g:Profiler. The ranked list can be filtered filtered by a particular threshold (e.g. FDR-adjusted P-value). For a whole genome ranked list, GSEA is appropriate. For a non-whole-genome ranked list, g:Profiler is adequate. 
	1. Read counts are aggregated at the gene level. Read counts per gene are normalized across all samples to remove unwanted technical variation between samples due to differences in sequencing lane or total read number per sequencing run. 
	2. Next, read counts per gene are tested for **differential expression** across sample groups. For RNA-seq data DESeq, limma/voom, edgeR, could be used for normalization and differential expression analysis. The results include:
		1. P-value of the significance of differential expression.
		2. Q-value (aka adjusted p-value), corrected for multiple testing across all genes by using for example the [[Benjamini-Hochberg false discovery rate (BH-FDR) procedure]]
		3. Effect size and direction of expression change so that upregulated genes are positive and at the top of the list and viceversa, often expressed as log-transformed fold-change. The gene list is then ranked by one or more of these values and studied using pathway enrichment analysis. Methods that use Fisher's Exact test, required the definition of background genes for comparison.
2. _Determination of statistically enriched pathways_
	1. 2A: Pathway enrichment analysis of a gene list using **g:Profiler**: which searches for pathways whose genes are significantly enriched in the fixed list of genes, as compared to all genes in the genome. The p-value of the enrichment of a pathway is computed using a Fisher's Exact test and multiple-test correction is applied. ==Non-ranked  tests are preferable for experiments that naturally generate a gene list of interest.==
	2. 2B: Pathway enrichment analysis of a ranked gene list using **GSEA**: Is a threshold-free method that analyzes all genes on the basis of their differential expression rank, or other score. Is particularly suitable and is recommended when ranks are available for all or most of the genes in the genome and is not suitable when only a small portion of genes have ranks available. ==GSEA does [Enrichment Analysis (EA)](Enrichment%20Analysis%20(EA).md) by increasing the [Enrichment Score (ES)](Enrichment%20Score%20(ES).md) if a gene is part of the pathway and decreasing the score otherwise.== The ES is calculated as the maximum value of the running sum and normalized relative to pathway size, resulting in [Normalized Enrichment Score (NES)](Normalized%20Enrichment%20Score%20(NES).md), which results as positive and negatives values. Examples of ranked tests include: modified Fisher's Exact test and the modified Kolmogorov-Smirnov test (implemented in GSEA). Finally a permutation-based p-value is computed and corrected for multiple testing to produce a permutation based  [[False-Discovery Rate (FDR)]] Q value that ranges from 0 (highly significant) to 1 (not significant). Same analysis is rperformed starting form the bottom using the FDR Q value threshold, and ranked using NES. GSEA has two methods for determining the P-value of the ES: 
		1. Gene set permutation: with a ranked list GSEA compares the observed pathway ES to a distribution of scores obtained by repeating the analysis with randomly sampled gene sets of matching sizes (e.g. 1000 times). This is recommended for studies with limited variability and biological replicates. In this case, differential gene expression values should be computed outside of GSEA, using methods with variance stabilization (edgeR, DESeq, limma/voom) and imported to GSEA.
		2. Phenotype permutation: with expression data for all samples, and a group called 'phenotypes' compared to each other. Such pathway ES is compared to a distribution of scores obtained by randomly shuffling the samples among phenotype categories and repeating the analysis (e.g. 1000 times), including computation of the ranked gene list and resulting pathway ES.
3. _Visualization and interpretation of the results_
	1. Visualization is generally through EnrichmentMap, ClueGO. An enrichment map is a network visualization that represents overlaps among enriched pathways. Interesting pathways are examined in more detail, examining genes within the pathways. Further gene expression values can be overlaid on a pathway diagram such as: Pathway Commons, Reactome, KEGG, Wikipathways, using tools such as PathVisio. 
		1. If diagram not available tools such as STRING or GENEMANIA can be used with Cytoscape to define an interaction network among pathway genes for expression overlay.


## Definitions
* Pathway: Genes that work together to carry out a biological process.
* Gene set: A set of genes related by localization or enzymatic function.
* Ranked gene list: a genes can be ranked according to some score to provide information for pathway enrichment analysis.
* Multiple testing correction: Thousands of pathways may be individually tested for enrichment, and this could lead to significant enrichment P-values, appearing by chance alone. This is a technique to correct the P-values from individual enrichment test to address this problem and reduce the chance of false-positive.

## Advantages & Limitations
* _Advantages_:
	* Improves statistical power by aggregating counts of mutations across all genes and regions involved in the given cell mechanism and reduces dimensionality to 'systems' or 'pathways'.
	* Are easier to interpret because the analysis is termed in easy to assimilate concepts.
	* The approach can help identify potential causal mechanisms and drug targets.
	* Results are easier to pair and compare, genomics transcriptomics and proteomics.
	* Allows integration of different data types.
* _Limitations_:
	* Is more strong for pathways for genes with strong biological signals controlled by a large group of genes and only by gene expression.
	* Is highly dependent on the database, so is better to use multiple databases.
	* With Fisher's exact test, are statistically more likely to identify larger pathways as significant. This can be corrected by selecting an upper limit for the size of the gene sets considered in the analysis 
	* Multi-functional genes may lead to enrichment of many different pathways, some of which may not be relevant to the experiment.
	* _Dark Matter of the Genome_: bias toward well known-pathways, for example non-coding RNA genes currently lack annotations and can not be analyzed for enrichment.
	* Most enrichment analysis methods make unrealistic assumptions of statistical independence among genes as well as pathways. Some genes may always co-express and some pathways have genes in common. Thus standard FDRs, should be used to adjust for multiple testing and rank enriched pathways for exploratory analysis and hypothesis generation.


![](Pasted%20image%2020210127170947.png)
[@reimandPathwayEnrichmentAnalysis2019b]