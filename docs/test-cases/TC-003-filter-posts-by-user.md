# TC-003: GET /posts?userId=1 returns only that user's posts

- **Priority:** P2
- **Linked criteria:** F-01 AC-03 ([F-01](../features/F-01-read-posts.md))
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "[TC-003] GET /posts?userId=1 returns only that user's posts"

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
- Passed locally 2026-11-23 (Node 20.20.2): Playwright 8/8 and Cucumber 8/8, after the TC-ID renames.
