# dtc-operation-brain

Marketplace plugin for DTC ecommerce operations. Works from any directory; the plugin owns the knowledge and skills only route to it.

## Runtime manifests

| Runtime | Reads |
|---|---|
| Claude Code | `.claude-plugin/` |
| Codex | `.agents/plugins/` + plugin `.codex-plugin/` |
| Grok | `.claude-plugin/` |

## Invariants

1. Marketplace name is `dtc-operation-brain`; plugin name is `dtc-operation-knowledge`.
2. Registry changes touch both marketplace files. Plugin changes touch both plugin manifests.
3. Version changes update both plugin manifests and the Claude marketplace entry.
4. Doctrine lives in `plugins/dtc-operation-knowledge/knowledge/`; skills read it rather than duplicate it.
5. Raw transcripts live only in `_raw/`; source cards and concepts are the distilled layer.
6. Cite canonical Watch URLs. Tag speaker figures and vendor case-study performance **[claimed]**.
7. Treat vendor channels as potentially biased. Do not turn examples into universal benchmarks.
8. Do not mutate live stores, place POs, change 3PL settings, or publish externally without explicit authorization.
9. No binaries over 1 MB.

## Validation

```bash
node plugins/dtc-operation-knowledge/scripts/validate-corpus.mjs
node scripts/check-parity.mjs
```

