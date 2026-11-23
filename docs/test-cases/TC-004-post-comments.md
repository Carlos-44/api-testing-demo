# TC-004: GET /posts/1/comments returns that post's comments

- **Priority:** P2
- **Linked criteria:** F-02 AC-01
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "GET /posts/1/comments returns comments for that post"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Post id 1.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `GET /posts/1/comments`. | Status 200, with at least 1 comment. |
| 2 | Check each comment. | Every `postId` is 1, and every `email` contains "@". |

**Pass criteria:** Every comment belongs to post 1 and has an email.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
