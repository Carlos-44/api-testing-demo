# F-03: Create, replace and delete posts
Status: Draft

## Summary (2 to 3 sentences)
Clients can send create, replace and delete requests for posts. JSONPlaceholder simulates the result and stores nothing.

## User story
As an API client, I want to create, update and delete posts, so that I can exercise write flows without a real backend.

## Preconditions
- JSONPlaceholder is reachable.

## Functional requirements (FR-NN)
- FR-01: `POST /posts` with a JSON body returns 201 and the created post with a new id.
- FR-02: `PUT /posts/:id` with a full body returns 200 and the replaced post.
- FR-03: `DELETE /posts/:id` returns 200 with an empty object.
- FR-04: Writes are not persisted [INFERRED].

## Acceptance criteria (AC-NN, each one testable)
- AC-01: `POST /posts` with title, body and userId returns 201, echoes those fields, and returns `id` 101.
- AC-02: `PUT /posts/1` with id, title, body and userId returns 200, and the body equals the request exactly.
- AC-03: `DELETE /posts/1` returns 200 with body `{}`.

## Out of scope
- `PATCH` (partial update).
- Persistence checks (reading a created post back).

## Open questions
- Open question: Should a test confirm that writes are not persisted (for example, that `GET /posts/101` returns 404)? [INFERRED]

## Source files this feature touches
- tests/posts.api.spec.js
- features/posts-api.feature
