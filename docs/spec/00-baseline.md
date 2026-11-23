# 00 Baseline spec: JSONPlaceholder /posts API

Status: Draft
Date: 2026-11-23
Source: read from `tests/posts.api.spec.js`, `features/posts-api.feature`, `playwright.config.js` and README.md. Items marked [INFERRED] were deduced, not read from a written spec.

## Purpose
This repo tests a **third-party public REST API**, [JSONPlaceholder](https://jsonplaceholder.typicode.com). It's a free fake API for prototyping and testing. This spec describes **that service's `/posts` resource** as the tests observe it. The repo contains no application of its own.

## User roles
| Role | Can do |
|---|---|
| API client (anonymous) | Read posts and comments, and send create, replace and delete requests. No authentication [INFERRED: none is used by the tests] |

## Main flows
1. List posts: `GET /posts`
2. Read one post: `GET /posts/:id`
3. Filter posts by user: `GET /posts?userId=N`
4. Read a post's comments: `GET /posts/:id/comments`
5. Create a post: `POST /posts`
6. Replace a post: `PUT /posts/:id`
7. Delete a post: `DELETE /posts/:id`

## Data
- **Post:** `{ userId: number, id: number, title: string, body: string }`. There are 100 posts, and user 1 has 10.
- **Comment:** has `postId` and `email`, plus other fields [INFERRED: name and body, as in the public docs].
- **Writes are simulated:** `POST` returns 201 with id 101, `PUT` echoes the body, and `DELETE` returns 200 with `{}`. Nothing is stored [INFERRED: per the JSONPlaceholder docs, and consistent with the fixed id 101].
- **Errors:** an unknown id returns 404 with `{}`.

## Integrations
- **External dependency:** JSONPlaceholder (internet access required). The tests fail if that service is down or changes its data.
- **CI:** GitHub Actions (`test.yml`) runs `npx playwright test` on push and PR to main. No browser is installed.

## Existing tests
- **Playwright:** `tests/posts.api.spec.js` has 8 API tests, using `APIRequestContext`.
- **Cucumber:** `features/posts-api.feature` has the same 8 behaviors as scenarios (`npm run test:bdd`). They aren't run in CI.

## Known gaps
- **G-1:** the tests depend on a third-party service's fixed data (100 posts, 10 for user 1). A data change upstream would break them without any code change.
- **G-2:** there are no tests for `PATCH`, for other resources (users, todos and so on), or for invalid input [INFERRED: JSONPlaceholder accepts almost anything].
