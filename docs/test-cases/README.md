# Test cases: traceability

New IDs start at TC-001. Each acceptance criterion in `docs/features/` has at least one test case.

| Requirement | Test cases | Automated |
|---|---|---|
| F-01 AC-01 | [TC-001](TC-001.md) | Yes |
| F-01 AC-02 | [TC-002](TC-002.md) | Yes |
| F-01 AC-03 | [TC-003](TC-003.md) | Yes |
| F-02 AC-01 | [TC-004](TC-004.md) | Yes |
| F-03 AC-01 | [TC-005](TC-005.md) | Yes |
| F-03 AC-02 | [TC-006](TC-006.md) | Yes |
| F-03 AC-03 | [TC-007](TC-007.md) | Yes |
| F-04 AC-01 | [TC-008](TC-008.md) | Yes |

Totals: 8 test cases, all Automated. All passed locally on 2026-11-23 (Playwright 8/8, Cucumber 8/8) and in CI (PR #2 run 45235136089, 8/8).

Notes:
- The Cucumber feature `features/posts-api.feature` covers the same 8 cases. It runs with `npm run test:bdd`, but not in CI.
- All cases depend on the third-party JSONPlaceholder service (baseline gap G-1).
