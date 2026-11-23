# F-04: Not-found handling
Status: Draft

## Summary (2 to 3 sentences)
Requests for a post that does not exist return 404 with an empty JSON object.

## User story
As an API client, I want a clear not-found response, so that I can handle missing records.

## Preconditions
- JSONPlaceholder is reachable.

## Functional requirements (FR-NN)
- FR-01: An unknown post id returns 404 with `{}`.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: `GET /posts/9999` returns 404 with body `{}`.

## Out of scope
- Validation errors (JSONPlaceholder does not validate input [INFERRED]).

## Open questions
- None.

## Source files this feature touches
- tests/posts.api.spec.js
- features/posts-api.feature
