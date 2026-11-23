# TC-008: GET /posts/9999 returns 404

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-04 AC-01
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "GET /posts/9999 returns 404 for a post that does not exist"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Post id 9999 (doesn't exist).

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `GET /posts/9999`. | Status 404. |
| 2 | Read the response body. | The body is `{}`. |

**Pass criteria:** Status 404 with an empty object.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
