window.BENCHMARK_DATA = {
  "lastUpdate": 1759271030646,
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
          "id": "840549726303fe8a58f2468f6d068413b7eb7e55",
          "message": "Merge pull request #238 from czlonkowski/fix/validation-false-positives\n\nfix: resolve validation false positives for Google Drive and Code nodes (v2.14.2)",
          "timestamp": "2025-09-29T22:04:51+02:00",
          "tree_id": "540884612b56bfcb06edec318e7a911101285f51",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/840549726303fe8a58f2468f6d068413b7eb7e55"
        },
        "date": 1759176375425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.019,
            "range": "0.2057",
            "unit": "ms",
            "extra": "52512 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1769,
            "range": "0.9382000000000001",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2655",
            "unit": "ms",
            "extra": "215939 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0667,
            "range": "0.30929999999999996",
            "unit": "ms",
            "extra": "14998 ops/sec"
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
          "id": "48df87f76c6f98cae435f88b5174c23cc84c5194",
          "message": "Merge pull request #239 from czlonkowski/chore/update-n8n-dependencies\n\nchore: update n8n to v1.113.3 and enhance template system",
          "timestamp": "2025-09-30T12:05:25+02:00",
          "tree_id": "b1e10a446acab98a962b8e3302449b0ae3fa8fcf",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/48df87f76c6f98cae435f88b5174c23cc84c5194"
        },
        "date": 1759226838396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.26780000000000004",
            "unit": "ms",
            "extra": "51695 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1624,
            "range": "0.4584999999999999",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2793",
            "unit": "ms",
            "extra": "215438 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0669,
            "range": "0.3649",
            "unit": "ms",
            "extra": "14957 ops/sec"
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
          "id": "3728a9cc67e3c6e9f000715c9a79e859c52dd13b",
          "message": "Merge pull request #240 from czlonkowski/feature/partial-update-enhancements\n\nfeat: Add workflow cleanup and recovery operations (v2.14.4)",
          "timestamp": "2025-09-30T14:47:23+02:00",
          "tree_id": "e979bab861e5c15b3f008e123c1a0dd86b6189fe",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/3728a9cc67e3c6e9f000715c9a79e859c52dd13b"
        },
        "date": 1759236546682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.2371",
            "unit": "ms",
            "extra": "52490 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1642,
            "range": "0.5306000000000002",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "range": "0.2558",
            "unit": "ms",
            "extra": "199339 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0657,
            "range": "0.3712",
            "unit": "ms",
            "extra": "15223 ops/sec"
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
          "id": "a1db133a50baa8c60d662e0ebf136776b45a0822",
          "message": "Merge pull request #241 from czlonkowski/feature/partial-update-enhancements\n\ntest: add 46 tests to improve workflow-diff-engine coverage to 89.51%",
          "timestamp": "2025-09-30T17:53:02+02:00",
          "tree_id": "94da5c8c1d270275efc0f035c38fa61d4c2498bf",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a1db133a50baa8c60d662e0ebf136776b45a0822"
        },
        "date": 1759247680458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.3052",
            "unit": "ms",
            "extra": "52360 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.3636,
            "range": "3.0083",
            "unit": "ms",
            "extra": "297 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2665",
            "unit": "ms",
            "extra": "215943 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0662,
            "range": "0.2895",
            "unit": "ms",
            "extra": "15101 ops/sec"
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
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/f4dff6b8e12d1fe24d5cd5cb733b6842847252e5"
        },
        "date": 1759271030160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.2752",
            "unit": "ms",
            "extra": "51703 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1648,
            "range": "0.46229999999999993",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "range": "0.2929",
            "unit": "ms",
            "extra": "199387 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0663,
            "range": "0.3821",
            "unit": "ms",
            "extra": "15093 ops/sec"
          }
        ]
      }
    ]
  }
}