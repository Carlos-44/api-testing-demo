# Test cases: traceability

One manual test-case file per test case. All 8 are automated in `tests/posts.api.spec.js`, with Cucumber equivalents in `features/posts-api.feature`. Status is Automated only when the test passed in a recorded run.

| TC ID | Feature | Status | Automation file — test name | Manual file |
|---|---|---|---|---|
| TC-001 | [F-01](../features/F-01-read-posts.md) | Automated | `tests/posts.api.spec.js` — [TC-001] GET /posts returns the full list of posts | [TC-001-get-all-posts.md](TC-001-get-all-posts.md) |
| TC-002 | [F-01](../features/F-01-read-posts.md) | Automated | `tests/posts.api.spec.js` — [TC-002] GET /posts/1 returns a single post | [TC-002-get-single-post.md](TC-002-get-single-post.md) |
| TC-003 | [F-01](../features/F-01-read-posts.md) | Automated | `tests/posts.api.spec.js` — [TC-003] GET /posts?userId=1 returns only that user's posts | [TC-003-filter-posts-by-user.md](TC-003-filter-posts-by-user.md) |
| TC-004 | [F-02](../features/F-02-post-comments.md) | Automated | `tests/posts.api.spec.js` — [TC-004] GET /posts/1/comments returns comments for that post | [TC-004-post-comments.md](TC-004-post-comments.md) |
| TC-005 | [F-03](../features/F-03-write-posts.md) | Automated | `tests/posts.api.spec.js` — [TC-005] POST /posts creates a post | [TC-005-create-post.md](TC-005-create-post.md) |
| TC-006 | [F-03](../features/F-03-write-posts.md) | Automated | `tests/posts.api.spec.js` — [TC-006] PUT /posts/1 replaces a post | [TC-006-replace-post.md](TC-006-replace-post.md) |
| TC-007 | [F-03](../features/F-03-write-posts.md) | Automated | `tests/posts.api.spec.js` — [TC-007] DELETE /posts/1 returns success with an empty body | [TC-007-delete-post.md](TC-007-delete-post.md) |
| TC-008 | [F-04](../features/F-04-errors.md) | Automated | `tests/posts.api.spec.js` — [TC-008] GET /posts/9999 returns 404 for a post that does not exist | [TC-008-post-not-found.md](TC-008-post-not-found.md) |

Totals: 8 test cases — 8 Automated, 0 Manual only, 0 Not started.
