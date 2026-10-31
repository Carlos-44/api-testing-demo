Feature: JSONPlaceholder /posts API
  As a developer consuming the JSONPlaceholder REST API
  I want to perform CRUD operations on the /posts resource
  So that I can verify the API behaves according to specification

  Background:
    Given the base URL is "https://jsonplaceholder.typicode.com"

  Scenario: GET /posts returns the full list of 100 posts
    When I send a GET request to "/posts"
    Then the response status should be 200
    And the response content-type should contain "application/json"
    And the response body should contain 100 posts
    And each post should have fields userId, id, title, and body

  Scenario: GET /posts/1 returns a single post
    When I send a GET request to "/posts/1"
    Then the response status should be 200
    And the returned post id should be 1
    And the returned post userId should be 1
    And the returned post title should not be empty

  Scenario: GET /posts?userId=1 returns only that user's posts
    When I send a GET request to "/posts" with query param userId equal to 1
    Then the response status should be 200
    And the response body should contain 10 posts
    And every post in the response should belong to userId 1

  Scenario: GET /posts/1/comments returns comments for that post
    When I send a GET request to "/posts/1/comments"
    Then the response status should be 200
    And the response should contain at least 1 comment
    And every comment should belong to postId 1
    And every comment email should contain "@"

  Scenario: POST /posts creates a new post
    When I send a POST request to "/posts" with body:
      """
      {"title":"API testing demo","body":"Created by a test","userId":1}
      """
    Then the response status should be 201
    And the created post should match the request body
    And the created post id should be 101

  Scenario: PUT /posts/1 fully replaces a post
    When I send a PUT request to "/posts/1" with body:
      """
      {"id":1,"title":"Updated title","body":"Updated body","userId":1}
      """
    Then the response status should be 200
    And the response body should exactly equal the request body

  Scenario: DELETE /posts/1 returns success with an empty body
    When I send a DELETE request to "/posts/1"
    Then the response status should be 200
    And the response body should be an empty object

  Scenario: GET /posts/9999 returns 404 for a non-existent post
    When I send a GET request to "/posts/9999"
    Then the response status should be 404
    And the response body should be an empty object
