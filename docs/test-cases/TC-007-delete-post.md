# TC-007: DELETE /posts/1 returns an empty body

- **Priority:** P2
- **Linked criteria:** F-03 AC-03
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "DELETE /posts/1 returns success with an empty body"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Post id 1.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `DELETE /posts/1`. | Status 200. |
| 2 | Read the response body. | The body is `{}`. |

**Pass criteria:** Status 200 with an empty object.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
