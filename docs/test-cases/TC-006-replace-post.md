# TC-006: PUT /posts/1 replaces a post

- **Priority:** P2
- **Linked criteria:** F-03 AC-02
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "PUT /posts/1 replaces a post"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Body `{ "id": 1, "title": "Updated title", "body": "Updated body", "userId": 1 }`.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `PUT /posts/1` with the body. | Status 200. |
| 2 | Compare the response with the request. | The response body equals the request body exactly. |

**Pass criteria:** The replaced post equals the request.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
