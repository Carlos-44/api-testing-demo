# F-02: Post comments
Status: Draft

## Summary (2 to 3 sentences)
Clients can read the comments that belong to a post through a nested route.

## User story
As an API client, I want a post's comments, so that I can show the discussion under it.

## Preconditions
- JSONPlaceholder is reachable.

## Functional requirements (FR-NN)
- FR-01: `GET /posts/:id/comments` returns the comments for that post.
- FR-02: Each comment has a `postId` matching the post and an `email`.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: `GET /posts/1/comments` returns 200 with at least one comment, every comment has `postId` 1, and every `email` contains "@".

## Out of scope
- `GET /comments?postId=` (the query form).

## Open questions
- None.

## Source files this feature touches
- tests/posts.api.spec.js
- features/posts-api.feature
