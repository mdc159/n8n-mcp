window.BENCHMARK_DATA = {
  "lastUpdate": 1758907988817,
  "repoUrl": "https://github.com/czlonkowski/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2195d7da665cc0a4830e3c597821b3312ba6e6e",
          "message": "Merge pull request #233 from czlonkowski/feat/telemetry-system-clean\n\nfix: refactor telemetry system with critical improvements (v2.14.1)",
          "timestamp": "2025-09-26T19:31:37+02:00",
          "tree_id": "122a1aed02b56f2d3efc142a06fbb15d563056e8",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c2195d7da665cc0a4830e3c597821b3312ba6e6e"
        },
        "date": 1758907988306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.23179999999999998",
            "unit": "ms",
            "extra": "52026 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1651,
            "range": "0.6850999999999998",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.27490000000000003",
            "unit": "ms",
            "extra": "215466 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0683,
            "range": "0.3349",
            "unit": "ms",
            "extra": "14636 ops/sec"
          }
        ]
      }
    ]
  }
}