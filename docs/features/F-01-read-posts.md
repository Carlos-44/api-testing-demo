# F-01: Read posts
Status: Draft

## Summary (2 to 3 sentences)
Clients can list all posts, read a single post by id, and filter posts by user. Responses are JSON.

## User story
As an API client, I want to read posts, so that I can display them or use their data.

## Preconditions
- JSONPlaceholder is reachable at https://jsonplaceholder.typicode.com.

## Functional requirements (FR-NN)
- FR-01: `GET /posts` returns all posts as a JSON array.
- FR-02: `GET /posts/:id` returns one post object.
- FR-03: `GET /posts?userId=N` returns only posts whose `userId` is N.
- FR-04: Each post has the fields `userId`, `id`, `title` and `body`.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: `GET /posts` returns 200, `content-type` contains `application/json`, and the array has 100 posts, each with userId, id, title and body.
- AC-02: `GET /posts/1` returns 200 with `id` 1, `userId` 1 and a non-empty title.
- AC-03: `GET /posts?userId=1` returns 200 with 10 posts, all with `userId` 1.

## Out of scope
- Pagination and sorting parameters.
- Other resources (users, albums, todos).

## Open questions
- Open question: Should the tests assert exact counts (100 and 10), which tie them to third-party data, or only minimums?

## Source files this feature touches
- tests/posts.api.spec.js
- features/posts-api.feature
- features/step_definitions/posts-api.steps.js
