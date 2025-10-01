window.BENCHMARK_DATA = {
  "lastUpdate": 1759300153083,
  "repoUrl": "https://github.com/mdc159/n8n-mcp",
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
          "id": "5825a85ccc504e36e16bad3437546bfdc1dd4fb5",
          "message": "Merge pull request #234 from czlonkowski/feat/telemetry-system-clean\n\nfeat: telemetry system refactor with enhanced privacy and reliability (v2.14.1)",
          "timestamp": "2025-09-26T19:36:19+02:00",
          "tree_id": "c76f224c253ab6de13fcc92d1774bf09518fe522",
          "url": "https://github.com/mdc159/n8n-mcp/commit/5825a85ccc504e36e16bad3437546bfdc1dd4fb5"
        },
        "date": 1759019577278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.33809999999999996",
            "unit": "ms",
            "extra": "51943 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1857,
            "range": "0.5242999999999998",
            "unit": "ms",
            "extra": "314 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2823",
            "unit": "ms",
            "extra": "212944 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0665,
            "range": "0.3579",
            "unit": "ms",
            "extra": "15031 ops/sec"
          }
        ]
      },
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
          "id": "f4dff6b8e12d1fe24d5cd5cb733b6842847252e5",
          "message": "Merge pull request #243 from czlonkowski/feature/execution-data-filtering\n\nfeat: Intelligent Execution Data Filtering for n8n_get_execution Tool",
          "timestamp": "2025-10-01T00:21:57+02:00",
          "tree_id": "cabfa56be93a0a16e54e26a8fe67f8750eecde96",
          "url": "https://github.com/mdc159/n8n-mcp/commit/f4dff6b8e12d1fe24d5cd5cb733b6842847252e5"
        },
        "date": 1759300152295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.41900000000000004",
            "unit": "ms",
            "extra": "51920 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2258,
            "range": "1.0893000000000006",
            "unit": "ms",
            "extra": "310 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2844",
            "unit": "ms",
            "extra": "212015 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0674,
            "range": "0.40349999999999997",
            "unit": "ms",
            "extra": "14829 ops/sec"
          }
        ]
      }
    ]
  }
}