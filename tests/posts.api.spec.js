const { test, expect } = require("@playwright/test");

test.describe("JSONPlaceholder /posts API", () => {
  test("GET /posts returns the full list of posts", async ({ request }) => {
    const response = await request.get("/posts");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/json");

    const posts = await response.json();
    expect(posts).toHaveLength(100);
    expect(posts[0]).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test("GET /posts/1 returns a single post", async ({ request }) => {
    const response = await request.get("/posts/1");

    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post.id).toBe(1);
    expect(post.userId).toBe(1);
    expect(post.title.length).toBeGreaterThan(0);
  });

  test("GET /posts?userId=1 returns only that user's posts", async ({ request }) => {
    const response = await request.get("/posts", { params: { userId: 1 } });

    expect(response.status()).toBe(200);
    const posts = await response.json();
    expect(posts).toHaveLength(10);
    for (const post of posts) {
      expect(post.userId).toBe(1);
    }
  });

  test("GET /posts/1/comments returns comments for that post", async ({ request }) => {
    const response = await request.get("/posts/1/comments");

    expect(response.status()).toBe(200);
    const comments = await response.json();
    expect(comments.length).toBeGreaterThan(0);
    for (const comment of comments) {
      expect(comment.postId).toBe(1);
      expect(comment.email).toContain("@");
    }
  });

  test("POST /posts creates a post", async ({ request }) => {
    const newPost = { title: "API testing demo", body: "Created by a test", userId: 1 };

    const response = await request.post("/posts", { data: newPost });

    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created).toMatchObject(newPost);
    expect(created.id).toBe(101);
  });

  test("PUT /posts/1 replaces a post", async ({ request }) => {
    const update = { id: 1, title: "Updated title", body: "Updated body", userId: 1 };

    const response = await request.put("/posts/1", { data: update });

    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(update);
  });

  test("DELETE /posts/1 returns success with an empty body", async ({ request }) => {
    const response = await request.delete("/posts/1");

    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual({});
  });

  test("GET /posts/9999 returns 404 for a post that does not exist", async ({ request }) => {
    const response = await request.get("/posts/9999");

    expect(response.status()).toBe(404);
    expect(await response.json()).toEqual({});
  });
});
