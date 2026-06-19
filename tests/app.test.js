const request = require('supertest');
const app = require('../src/app');



describe('GET /', () => {
  it('should return success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("SCM Automation Lab Running")
  });
});

describe("GET /version", () => {
  it("should return version info", async () => {
    const res = await request(app).get("/version")
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("version")
  })
})