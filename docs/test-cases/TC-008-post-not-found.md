# TC-008: GET /posts/9999 returns 404

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-04 AC-01 ([F-04](../features/F-04-errors.md))
- **Status:** Automated
- **Automation:** tests/posts.api.spec.js — "[TC-008] GET /posts/9999 returns 404 for a post that does not exist"

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
- Passed locally 2026-11-23 (Node 20.20.2): Playwright 8/8 and Cucumber 8/8, after the TC-ID renames.
