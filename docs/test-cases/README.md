# Test cases: traceability

New IDs start at TC-001. Each acceptance criterion in `docs/features/` has at least one test case.

| Requirement | Test cases | Automated |
|---|---|---|
| F-01 AC-01 | [TC-001](TC-001.md) | No |
| F-01 AC-02 | [TC-002](TC-002.md) | No |
| F-01 AC-03 | [TC-003](TC-003.md) | No |
| F-02 AC-01 | [TC-004](TC-004.md) | No |
| F-03 AC-01 | [TC-005](TC-005.md) | No |
| F-03 AC-02 | [TC-006](TC-006.md) | No |
| F-03 AC-03 | [TC-007](TC-007.md) | No |
| F-04 AC-01 | [TC-008](TC-008.md) | No |

Totals: 8 test cases. 8 have an existing automated test, and 0 have none. None are marked Automated yet; statuses are set after a recorded test run.

Notes:
- The Cucumber feature `features/posts-api.feature` covers the same 8 cases. It runs with `npm run test:bdd`, but not in CI.
- All cases depend on the third-party JSONPlaceholder service (baseline gap G-1).
