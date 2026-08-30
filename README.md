# DTC Operations Brain

Evidence-backed plugin for founders and operators of product-based DTC and ecommerce brands. It covers the operating work behind growth: inventory, sourcing, quality, fulfillment, 3PL, warehouse, CX, returns, finance, cash, systems, ownership, and cadence.

| Command | Job |
|---|---|
| `/dtc-ops` | Route an operations question |
| `/diagnose-dtc-ops` | Find the first operational constraint and next control |
| `/teach-dtc-ops` | Learn one operations decision through a scenario |

The doctrine is distilled from **36 public YouTube videos**. Every source card includes a Watch URL; speaker figures and vendor case studies are tagged **[claimed]**.

## Install

Works with Claude Code, Codex, and Grok from one repository.

```text
# Claude Code
/plugin marketplace add https://github.com/samnguyen80/dtc-operation-brain.git
/plugin install dtc-operation-knowledge@dtc-operation-brain
```

```bash
# Codex
codex plugin marketplace add samnguyen80/dtc-operation-brain
codex plugin add dtc-operation-knowledge@dtc-operation-brain

# Grok
grok plugin marketplace add samnguyen80/dtc-operation-brain
grok plugin install dtc-operation-knowledge --trust
grok plugin enable dtc-operation-knowledge
```

Full guides: [`docs/install-claude-code.md`](docs/install-claude-code.md) · [`docs/install-codex.md`](docs/install-codex.md) · [`docs/install-grok.md`](docs/install-grok.md).

### One session, no install

```bash
claude --plugin-dir ./plugins/dtc-operation-knowledge
codex --plugin-dir ./plugins/dtc-operation-knowledge
grok plugin install ./plugins/dtc-operation-knowledge --trust
```

## What ships

| Path | What |
|---|---|
| [`knowledge/index.md`](plugins/dtc-operation-knowledge/knowledge/index.md) | Knowledge hub |
| [`foundations/playbook.md`](plugins/dtc-operation-knowledge/knowledge/foundations/playbook.md) | End-to-end operating system |
| [`concepts/`](plugins/dtc-operation-knowledge/knowledge/concepts/) | 14 atomic doctrine notes |
| [`sources/`](plugins/dtc-operation-knowledge/knowledge/sources/) | 36 transcript-grounded source cards |
| [`_raw/`](plugins/dtc-operation-knowledge/_raw/) | Original VTT and timestamped normalized transcripts |
| [`shared/RESOLVER.md`](shared/RESOLVER.md) | Topic and skill routing |

Open `plugins/dtc-operation-knowledge/knowledge/` as an Obsidian vault.

## Validation

```bash
node plugins/dtc-operation-knowledge/scripts/validate-corpus.mjs
node scripts/check-parity.mjs
python3 /path/to/plugin-creator/scripts/validate_plugin.py plugins/dtc-operation-knowledge
```

Raw captions are included as a research evidence layer and remain subject to the rights of their original creators; see [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md). The distilled notes are unofficial and are not legal, tax, accounting, or supply-chain professional advice.

