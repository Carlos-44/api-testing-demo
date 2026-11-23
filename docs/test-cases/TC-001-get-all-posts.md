# TC-001: GET /posts returns all 100 posts

- **Priority:** P1
- **Linked criteria:** F-01 AC-01
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "GET /posts returns the full list of posts"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- None.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `GET /posts`. | Status 200, and `content-type` contains `application/json`. |
| 2 | Count the items in the response array. | There are exactly 100 posts. |
| 3 | Inspect the first post. | It has a numeric `userId` and `id`, and a string `title` and `body`. |

**Pass criteria:** Every step's expected result holds.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
