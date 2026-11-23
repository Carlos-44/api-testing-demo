# TC-005: POST /posts creates a post

- **Priority:** P1
- **Linked criteria:** F-03 AC-01
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "POST /posts creates a post"

## Preconditions
- Internet access to https://jsonplaceholder.typicode.com (a third-party public API).

## Test data
- Body `{ "title": "API testing demo", "body": "Created by a test", "userId": 1 }`.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Send `POST /posts` with the body. | Status 201. |
| 2 | Compare the response with the request. | The response contains the same title, body and userId, and `id` is 101. |

**Pass criteria:** The created post echoes the request and gets id 101.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Playwright 1.55.1) and in CI on main.
- JSONPlaceholder simulates writes, so nothing is stored. [INFERRED]
