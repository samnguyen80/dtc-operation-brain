---
title: DTC operations raw corpus
verified: 2026-08-29
---

# Raw video corpus

This directory contains the evidence layer for the DTC Operations knowledge base.

- `manifest.tsv`: curated domain, video ID, channel, title, and canonical Watch URL.
- `metadata.tsv`: upload date and duration read from YouTube with `yt-dlp`.
- `subtitles/`: the original English WebVTT subtitle files downloaded from YouTube.
- `text/`: normalized Markdown transcripts with approximate one-minute timestamps.

Corpus: **36 videos / 36 VTT files / 36 normalized transcripts** across operator management, inventory, sourcing, fulfillment, returns, CX, finance, and ERP.

## Provenance rules

1. Raw transcript text is evidence, not doctrine.
2. Auto-generated captions can mis-hear names, brands, numbers, and technical terms; verify important details against the video.
3. Speaker figures and case-study performance numbers remain **[claimed]** unless independently verified.
4. Vendor channels are useful for mechanics but may favor the vendor's category or product.
5. Use the canonical Watch URL in `manifest.tsv` when citing a source.
6. Do not manually “correct” a raw VTT. Put interpretation and corrections in `knowledge/`.

## Rebuild normalized transcripts

From the repository root:

```bash
node plugins/dtc-operation-knowledge/scripts/normalize-vtt.mjs
```

The script preserves the VTT files and rewrites only `_raw/text/*.md`.
