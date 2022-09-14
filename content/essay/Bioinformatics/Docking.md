# Docking
Computational docking is a modeling 3D tool for protein-ligand complexes.

## CAPRI

## _ab initio_ docking
_ab initio, non-template_ or _free_ modeling
There are several different "_ab initio_" in bioinformatics, e.g.:
-   _ab initio_ protein folding
-   _ab initio_ gene prediction
-   _ab initio_ genome assembly
And so on. In general, _ab initio_ in bioinformatics means "without direct evidence". For example, _ab initio_ genome assembly is assembling a genome from sequencing reads alone, without any other information like a closely related genome or a genetic map.

## Template-based modeling (TBM)
Is a very reliable alternative to ab initio docking, given that a template is available.
With a template many approaches can be used, including: 
1. ‘(global) superimposition’ (i.e. global structure–structure alignment), generating models by superimposing unbound 3D component protein (or domain) structures onto templates;
2. ‘dimeric threading’ (i.e. sequence–structure alignment), ‘threading’ the component protein sequences onto structural templates and searching for the best sequence–structure alignment based on a scoring function; 
3. ‘direct homology modeling of the complex’, e.g. with MODELLER;
4. ‘Interface Structure Alignment’ (ISA)based modeling, generating models by superimposing the component protein structures onto template interface structures.
