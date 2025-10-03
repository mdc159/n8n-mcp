window.BENCHMARK_DATA = {
  "lastUpdate": 1759491142014,
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
          "id": "4854a50854003072814c59828720b6d646292e10",
          "message": "Merge pull request #244 from czlonkowski/feature/webhook-error-execution-guidance\n\nfeat: enhance webhook error messages with execution guidance",
          "timestamp": "2025-10-01T12:08:49+02:00",
          "tree_id": "6b499b925c568797822462bd7941a791b38b8f18",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/4854a50854003072814c59828720b6d646292e10"
        },
        "date": 1759313434545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.24659999999999999",
            "unit": "ms",
            "extra": "52220 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1619,
            "range": "1.3000000000000003",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.25780000000000003",
            "unit": "ms",
            "extra": "206903 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0669,
            "range": "0.3",
            "unit": "ms",
            "extra": "14951 ops/sec"
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
          "id": "2f234780dd6f9d36e2cceb131491737342e75e49",
          "message": "Merge pull request #247 from czlonkowski/feature/p0-priorities-fixes\n\nfeat(p0-r1): Universal node type normalization to eliminate 80% of validation errors",
          "timestamp": "2025-10-02T16:54:13+02:00",
          "tree_id": "0d223a413d648276e7b3285341923363b4b5bb92",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/2f234780dd6f9d36e2cceb131491737342e75e49"
        },
        "date": 1759416969474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0195,
            "range": "0.2993",
            "unit": "ms",
            "extra": "51235 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.438,
            "range": "0.9804000000000004",
            "unit": "ms",
            "extra": "291 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.2685",
            "unit": "ms",
            "extra": "210356 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0667,
            "range": "0.36769999999999997",
            "unit": "ms",
            "extra": "15004 ops/sec"
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
          "id": "3bab53a3be7516c9b95516f10a43543de661a8b5",
          "message": "Merge pull request #250 from czlonkowski/feature/p0-priorities-fixes\n\nfeat(P0-R3): Pre-extracted template configurations + Remove get_node_for_task",
          "timestamp": "2025-10-03T09:08:07+02:00",
          "tree_id": "d05bf45ce167750b84362d671ab7341f4d06a746",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/3bab53a3be7516c9b95516f10a43543de661a8b5"
        },
        "date": 1759475397473,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.2307",
            "unit": "ms",
            "extra": "52217 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1656,
            "range": "0.46320000000000006",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2481",
            "unit": "ms",
            "extra": "215526 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0675,
            "range": "0.2952",
            "unit": "ms",
            "extra": "14820 ops/sec"
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
          "id": "f74427bdb5fde342bf27f7b19db6b65ca73add68",
          "message": "Merge pull request #251 from czlonkowski/fix/p0-workflow-creation-normalization-bug\n\nfix(p0): remove incorrect node type normalization before n8n API calls",
          "timestamp": "2025-10-03T12:13:25+02:00",
          "tree_id": "bcb74917537b64059331c1c4d3d780b1b45b5191",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/f74427bdb5fde342bf27f7b19db6b65ca73add68"
        },
        "date": 1759486525133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0194,
            "range": "0.37020000000000003",
            "unit": "ms",
            "extra": "51622 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.4046,
            "range": "0.6403999999999996",
            "unit": "ms",
            "extra": "294 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.28500000000000003",
            "unit": "ms",
            "extra": "216003 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0664,
            "range": "0.41300000000000003",
            "unit": "ms",
            "extra": "15066 ops/sec"
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
          "id": "a84dbd6a1596b252bfc56c6a49dac6ee4db0c2d8",
          "message": "Merge pull request #252 from czlonkowski/feat/integration-tests-foundation\n\nfeat: Integration Testing Foundation (Phase 1)",
          "timestamp": "2025-10-03T13:30:36+02:00",
          "tree_id": "03fe6a6421eeab42b0997505ffa9dccbac5b3039",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a84dbd6a1596b252bfc56c6a49dac6ee4db0c2d8"
        },
        "date": 1759491141285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.2942",
            "unit": "ms",
            "extra": "52461 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1812,
            "range": "0.5036",
            "unit": "ms",
            "extra": "314 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.24780000000000002",
            "unit": "ms",
            "extra": "210122 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0671,
            "range": "0.367",
            "unit": "ms",
            "extra": "14895 ops/sec"
          }
        ]
      }
    ]
  }
}