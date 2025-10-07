window.BENCHMARK_DATA = {
  "lastUpdate": 1759828917941,
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
          "id": "4bf8f7006dd81d6420368122563bc21cc295bc2a",
          "message": "Merge pull request #253 from czlonkowski/fix/search-templates-metadata-timeout\n\nrefactor: enhance search_templates_by_metadata with production-ready improvements",
          "timestamp": "2025-10-03T14:52:42+02:00",
          "tree_id": "404bd1ce3b2156ced739a7ccf82f66a842d91f2f",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/4bf8f7006dd81d6420368122563bc21cc295bc2a"
        },
        "date": 1759496084803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.3128",
            "unit": "ms",
            "extra": "52360 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.4106,
            "range": "0.5886",
            "unit": "ms",
            "extra": "293 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.291",
            "unit": "ms",
            "extra": "213979 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0676,
            "range": "0.4316",
            "unit": "ms",
            "extra": "14787 ops/sec"
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
          "id": "4b764c6110f9e06774776ce721d41f4b2fd1c399",
          "message": "Merge pull request #254 from czlonkowski/fix/telemetry-error-message-capture\n\nfeat(telemetry): capture error messages with security hardening",
          "timestamp": "2025-10-03T17:07:02+02:00",
          "tree_id": "0eaea9fd102d37fe82d6ecd16d29c3f72770ef1a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/4b764c6110f9e06774776ce721d41f4b2fd1c399"
        },
        "date": 1759504145549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0196,
            "range": "0.29900000000000004",
            "unit": "ms",
            "extra": "50892 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1765,
            "range": "0.6139000000000001",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.30920000000000003",
            "unit": "ms",
            "extra": "218413 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0662,
            "range": "0.2958",
            "unit": "ms",
            "extra": "15105 ops/sec"
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
          "id": "88e288f8f622ce7f6c7b5fede070808f6fb7d480",
          "message": "Merge pull request #256 from czlonkowski/feat/integration-tests-phase-2\n\nfeat(tests): implement Phase 2 integration testing - workflow creation tests",
          "timestamp": "2025-10-04T10:45:54+02:00",
          "tree_id": "954bf1e2cc08e2cd2e3eedde002c308350991863",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/88e288f8f622ce7f6c7b5fede070808f6fb7d480"
        },
        "date": 1759567663624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.24150000000000002",
            "unit": "ms",
            "extra": "52075 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.18,
            "range": "0.5068000000000001",
            "unit": "ms",
            "extra": "314 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "range": "0.2547",
            "unit": "ms",
            "extra": "201379 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0655,
            "range": "0.2891",
            "unit": "ms",
            "extra": "15275 ops/sec"
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
          "id": "00289e90d73fbea9d20da3049b1a432ccc242eb9",
          "message": "Merge pull request #258 from czlonkowski/feat/integration-tests-phase-2\n\nrefactor(integration): Update Phase 2 tests to use MCP handlers",
          "timestamp": "2025-10-04T12:26:20+02:00",
          "tree_id": "409baa862831dc8c666e941655cd5ace530d4cd8",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/00289e90d73fbea9d20da3049b1a432ccc242eb9"
        },
        "date": 1759573691596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.2535",
            "unit": "ms",
            "extra": "51682 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.3265,
            "range": "0.6184000000000003",
            "unit": "ms",
            "extra": "301 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.26430000000000003",
            "unit": "ms",
            "extra": "215763 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.066,
            "range": "0.34400000000000003",
            "unit": "ms",
            "extra": "15158 ops/sec"
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
          "id": "7fcfa8f696c0c5d0c99a41676d9d17ec8ea7e495",
          "message": "Merge pull request #257 from czlonkowski/feat/integration-tests-phase-3\n\nfeat(tests): Phase 3 Integration Tests - Workflow Retrieval",
          "timestamp": "2025-10-04T13:16:29+02:00",
          "tree_id": "a3e23ef0f3d681da57749ad82ea89b398418183e",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/7fcfa8f696c0c5d0c99a41676d9d17ec8ea7e495"
        },
        "date": 1759576716338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.2838",
            "unit": "ms",
            "extra": "52131 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.4023,
            "range": "0.5754999999999999",
            "unit": "ms",
            "extra": "294 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2705",
            "unit": "ms",
            "extra": "213744 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.066,
            "range": "0.35419999999999996",
            "unit": "ms",
            "extra": "15141 ops/sec"
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
          "id": "b3d42b339050a44ee5e1df590e7d4d8396656a72",
          "message": "Merge pull request #259 from czlonkowski/feat/integration-tests-phase-4\n\nfeat: Phase 4 - Workflow Update Integration Tests",
          "timestamp": "2025-10-04T23:00:41+02:00",
          "tree_id": "8e1caad79a0f80733951dddde53a13869fa83024",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/b3d42b339050a44ee5e1df590e7d4d8396656a72"
        },
        "date": 1759611753949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0194,
            "range": "0.42469999999999997",
            "unit": "ms",
            "extra": "51457 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.4294,
            "range": "0.7630000000000003",
            "unit": "ms",
            "extra": "292 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "range": "0.295",
            "unit": "ms",
            "extra": "205016 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0685,
            "range": "0.479",
            "unit": "ms",
            "extra": "14590 ops/sec"
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
          "id": "c0d7145a5a70af86a8981c8b86612bda4fc8e7cd",
          "message": "Merge pull request #261 from czlonkowski/feat/integration-tests-phase-5\n\nfeat: Phase 5 integration tests (workflow management)",
          "timestamp": "2025-10-05T00:05:34+02:00",
          "tree_id": "523b5d117eb634cd893f40b6644e4d1fdbccfc21",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c0d7145a5a70af86a8981c8b86612bda4fc8e7cd"
        },
        "date": 1759615640791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.2582",
            "unit": "ms",
            "extra": "52110 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2384,
            "range": "0.9481999999999995",
            "unit": "ms",
            "extra": "309 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2697",
            "unit": "ms",
            "extra": "215115 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0661,
            "range": "0.3007",
            "unit": "ms",
            "extra": "15123 ops/sec"
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
          "id": "287b9aa8193f7ad4dcd0b22c7ee06e9d3ee31364",
          "message": "Merge pull request #263 from czlonkowski/feat/integration-tests-phase-6\n\nfeat: Phase 6A integration tests (workflow validation)",
          "timestamp": "2025-10-05T09:19:11+02:00",
          "tree_id": "fbb6c48457bd0eb0e9ee615e17a8e4fbb0d7d3c8",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/287b9aa8193f7ad4dcd0b22c7ee06e9d3ee31364"
        },
        "date": 1759648855683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.2331",
            "unit": "ms",
            "extra": "52205 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.3918,
            "range": "0.6579000000000002",
            "unit": "ms",
            "extra": "295 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2581",
            "unit": "ms",
            "extra": "212655 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0702,
            "range": "0.4002",
            "unit": "ms",
            "extra": "14249 ops/sec"
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
          "id": "57459c27e388cdc90423161957a275774bb91868",
          "message": "Merge pull request #264 from czlonkowski/feat/integration-tests-phase-6\n\nfeat: Phase 6B integration tests (workflow autofix)",
          "timestamp": "2025-10-05T09:59:27+02:00",
          "tree_id": "d0693e21af7849ecf8b72faa333a4062d85a04a6",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/57459c27e388cdc90423161957a275774bb91868"
        },
        "date": 1759651278794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0195,
            "range": "0.4034",
            "unit": "ms",
            "extra": "51205 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.239,
            "range": "0.7762000000000002",
            "unit": "ms",
            "extra": "309 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.30210000000000004",
            "unit": "ms",
            "extra": "207059 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0695,
            "range": "0.40149999999999997",
            "unit": "ms",
            "extra": "14379 ops/sec"
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
          "id": "bd8a7f68ace3e16e943755f530e19b7261aff967",
          "message": "Merge pull request #266 from czlonkowski/feat/integration-tests-phase-7\n\nfeat: Phase 7 Integration Tests - Execution Management",
          "timestamp": "2025-10-05T10:21:12+02:00",
          "tree_id": "ff8783685ed44e297823eedc8cb914ee1c2be6de",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/bd8a7f68ace3e16e943755f530e19b7261aff967"
        },
        "date": 1759652574146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.2708",
            "unit": "ms",
            "extra": "51869 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2174,
            "range": "0.7845999999999997",
            "unit": "ms",
            "extra": "311 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2866",
            "unit": "ms",
            "extra": "216269 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0674,
            "range": "0.32730000000000004",
            "unit": "ms",
            "extra": "14833 ops/sec"
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
          "id": "fcf778c79d19c240da169ee0180a304502b52974",
          "message": "Merge pull request #267 from czlonkowski/feat/integration-tests-phase-8\n\nfeat: Phase 8 Integration Tests - System Tools",
          "timestamp": "2025-10-05T10:58:15+02:00",
          "tree_id": "fa1e472003051fcb029051ceb7114199a9d41cea",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/fcf778c79d19c240da169ee0180a304502b52974"
        },
        "date": 1759654810875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.40269999999999995",
            "unit": "ms",
            "extra": "52178 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.4055,
            "range": "0.8869000000000002",
            "unit": "ms",
            "extra": "294 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2685",
            "unit": "ms",
            "extra": "213544 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0681,
            "range": "0.4305",
            "unit": "ms",
            "extra": "14689 ops/sec"
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
          "id": "67c3c9c9c844762d866ccb7357ac28a5854bfafb",
          "message": "Merge pull request #271 from czlonkowski/fix/issue-270-apostrophe-handling\n\nfix: Issues #269 and #270 - addNode examples + special characters in node names",
          "timestamp": "2025-10-05T17:14:35+02:00",
          "tree_id": "72b4f21744a1144aeba1318e82b1f848188f1189",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/67c3c9c9c844762d866ccb7357ac28a5854bfafb"
        },
        "date": 1759677382541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0197,
            "range": "2.2969000000000004",
            "unit": "ms",
            "extra": "50739 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.2765,
            "range": "0.7348999999999997",
            "unit": "ms",
            "extra": "305 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.3273",
            "unit": "ms",
            "extra": "211371 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0678,
            "range": "0.39849999999999997",
            "unit": "ms",
            "extra": "14752 ops/sec"
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
          "id": "08abdb79372f8e68842c5477bb3fd9e7c40e46dd",
          "message": "Merge pull request #274 from czlonkowski/fix/issue-272-connection-operations-phase0\n\nPhase 0 + Phase 1: Connection Operations + TypeError Fixes (Issues #272, #204, #275, #136)",
          "timestamp": "2025-10-06T11:02:32+02:00",
          "tree_id": "4d34ff5fba71f2b1f37196d70868c3326630228d",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/08abdb79372f8e68842c5477bb3fd9e7c40e46dd"
        },
        "date": 1759741461009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.28950000000000004",
            "unit": "ms",
            "extra": "52386 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.3439,
            "range": "0.8758999999999997",
            "unit": "ms",
            "extra": "299 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.26990000000000003",
            "unit": "ms",
            "extra": "211630 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0666,
            "range": "0.33719999999999994",
            "unit": "ms",
            "extra": "15025 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "czlonkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "czlonkowski",
            "username": "czlonkowski"
          },
          "distinct": true,
          "id": "e1be4473a328b598c1e1a46db3b7ebdc441c2a06",
          "message": "Merge pull request #278 from czlonkowski/fix/issue-277-signal-handlers-stdio\n\nFix: Add signal handlers for stdio mode (Issue #277)\n\nFixes orphaned Node.js processes on Windows 11 when Claude Desktop quits.\n\nProduction-ready improvements:\n- Robust container detection (Docker, Kubernetes, Podman, containerd)\n- Fixed redundant exit calls with graceful 1000ms timeout\n- Error handling for stdin registration\n- Shutdown trigger logging for debugging\n\nCode Review: Approved - Production Ready (9.6/10)\nAll critical issues resolved, 90% Docker test pass confidence\n\nReported by: @Eddy-Chahed\nIssue: #277",
          "timestamp": "2025-10-06T13:26:27+02:00",
          "tree_id": "b0ca8db8325e3f28c4edb05066054060ab75262a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/e1be4473a328b598c1e1a46db3b7ebdc441c2a06"
        },
        "date": 1759750129160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.25880000000000003",
            "unit": "ms",
            "extra": "51753 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.3839,
            "range": "0.4937999999999998",
            "unit": "ms",
            "extra": "296 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.27490000000000003",
            "unit": "ms",
            "extra": "208482 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0657,
            "range": "0.3145",
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
          "id": "9a00a990116de7f7bee8a4207a64b477b8a9721b",
          "message": "Merge pull request #279 from czlonkowski/security/issue-265-pr1-critical-timing-and-injection\n\n🔒 CRITICAL Security Fixes: Timing Attack & Command Injection (Issue #265)",
          "timestamp": "2025-10-06T14:39:38+02:00",
          "tree_id": "6537a13d13339660588b6610048a622b0146028f",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/9a00a990116de7f7bee8a4207a64b477b8a9721b"
        },
        "date": 1759754499594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0188,
            "range": "0.2805",
            "unit": "ms",
            "extra": "53131 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.0926,
            "range": "0.6011000000000002",
            "unit": "ms",
            "extra": "323 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0039,
            "range": "0.2629",
            "unit": "ms",
            "extra": "256741 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0607,
            "range": "0.3702",
            "unit": "ms",
            "extra": "16469 ops/sec"
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
          "id": "cc9fe6944929a45e5837645b5ec5b1f126530547",
          "message": "Merge pull request #280 from czlonkowski/security/issue-265-pr2-rate-limiting-and-ssrf\n\nSecurity Audit PR #2: Rate Limiting & SSRF Protection (HIGH-02, HIGH-03)",
          "timestamp": "2025-10-06T18:28:09+02:00",
          "tree_id": "1c0c1424908e3ccc41f42dd153e9fe28d00762b7",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/cc9fe6944929a45e5837645b5ec5b1f126530547"
        },
        "date": 1759768197303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.019,
            "range": "0.3319",
            "unit": "ms",
            "extra": "52507 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1887,
            "range": "0.5932999999999997",
            "unit": "ms",
            "extra": "314 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.247",
            "unit": "ms",
            "extra": "206538 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0659,
            "range": "0.3086",
            "unit": "ms",
            "extra": "15176 ops/sec"
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
          "id": "50439e2aa14c4cc593b477947ac55f3c19ae1229",
          "message": "Merge pull request #281 from czlonkowski/feature/ai-node-validation\n\nfix: AI workflow validation - critical node type normalization bug",
          "timestamp": "2025-10-07T11:20:09+02:00",
          "tree_id": "c9b0b68988ae5bfeac4548a49fed7d321355fd5c",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/50439e2aa14c4cc593b477947ac55f3c19ae1229"
        },
        "date": 1759828917655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "range": "0.23900000000000002",
            "unit": "ms",
            "extra": "52476 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.3962,
            "range": "0.43900000000000006",
            "unit": "ms",
            "extra": "294 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "range": "0.2678",
            "unit": "ms",
            "extra": "217233 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0662,
            "range": "0.3769",
            "unit": "ms",
            "extra": "15117 ops/sec"
          }
        ]
      }
    ]
  }
}