# TC-002: GET /posts/1 returns a single post

- **Priority:** P1
- **Linked criteria:** F-01 AC-02
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "GET /posts/1 returns a single post"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Post id 1.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `GET /posts/1`. | Status 200. |
| 2 | Read `id`, `userId` and `title`. | `id` is 1, `userId` is 1, and `title` isn't empty. |

**Pass criteria:** Post 1 is returned with the expected fields.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
