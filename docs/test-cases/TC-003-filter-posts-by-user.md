# TC-003: GET /posts?userId=1 returns only that user's posts

- **Priority:** P2
- **Linked criteria:** F-01 AC-03
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "GET /posts?userId=1 returns only that user's posts"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Query `userId=1`.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `GET /posts?userId=1`. | Status 200. |
| 2 | Count the posts and check each `userId`. | There are 10 posts, and every one has `userId` 1. |

**Pass criteria:** Exactly 10 posts, all for user 1.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
