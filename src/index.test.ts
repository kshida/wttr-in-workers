import app from ".";

describe("Test the application", () => {
  it("Should return 200 response", async () => {
    const res = await app.request("http://localhost/");
    expect(res.status).toBe(200);
  });
  it("Should return 200 response in weather", async () => {
    const res = await app.request("http://localhost/weather/:city");
    expect(res.status).toBe(200);
  });
  it("Should return 200 response in weather with version", async () => {
    const res = await app.request("http://localhost/weather/:city?v=3");
    expect(res.status).toBe(200);
  });
  it("Should return 400 response in weather with invalid version", async () => {
    const res = await app.request("http://localhost/weather/:city?v=4");
    expect(res.status).toBe(400);
  });
  it("Should return 200 response in moon", async () => {
    const res = await app.request("http://localhost/moon");
    expect(res.status).toBe(200);
  });
  it("Should return 200 response in moon with date", async () => {
    const res = await app.request("http://localhost/moon?date=2022-10-10");
    expect(res.status).toBe(200);
  });
  it("Should return 400 response in moon with invalid date", async () => {
    const res = await app.request("http://localhost/moon?date=0000-10-10");
    expect(res.status).toBe(400);
  });
});
