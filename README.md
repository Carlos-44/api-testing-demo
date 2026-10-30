# API Testing Demo

> REST API test suite using Playwright's `APIRequestContext`, covering read, create, update, delete and not-found cases on the public [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

![Tests](https://github.com/Carlos-44/api-testing-demo/actions/workflows/test.yml/badge.svg)

## Why API Testing
API tests check business logic and data contracts directly, without a browser. They run in seconds and fail with precise errors, so they catch problems earlier and more cheaply than UI tests alone.

## Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Playwright Test (`APIRequestContext`, no browser needed)
- **CI:** GitHub Actions

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Install
```bash
npm install
```

### Run Tests
```bash
# Run all tests
npm test

# Open the last HTML report
npm run test:report
```

## What's Tested
8 tests in `tests/posts.api.spec.js`:
- `GET /posts`: status, content type, list size and the shape of a post
- `GET /posts/1`: returns the requested post
- `GET /posts?userId=1`: the query filter returns only that user's posts
- `GET /posts/1/comments`: nested resource returns comments for that post
- `POST /posts`: returns 201 with the submitted data and a new ID
- `PUT /posts/1`: returns 200 with the replaced post
- `DELETE /posts/1`: returns 200 with an empty body
- `GET /posts/9999`: negative case, returns 404

> JSONPlaceholder is a fake API: it returns realistic responses to `POST`, `PUT` and `DELETE`, but doesn't save changes. These tests check the responses, not that data persisted.

## CI/CD
Every push and pull request to `main` runs the suite on GitHub Actions (see `.github/workflows/test.yml`):
- Results appear as a GitHub Check through [dorny/test-reporter](https://github.com/dorny/test-reporter) (JUnit XML)
- The HTML report is uploaded as an artifact for 14 days

## Author
Carlos Ozoria — [LinkedIn](https://www.linkedin.com/in/carlos-ozoria-0a292030b)
