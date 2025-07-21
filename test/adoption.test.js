const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}, 10000); // Aumentar timeout para la conexión

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Adoption Routes", () => {
  it("GET /api/adoptions should return 200", async () => {
    const res = await request(app).get("/api/adoptions");
    expect(res.statusCode).toBe(200);
  });

  it("POST /api/adoptions should create adoption", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({ petName: "Rex", adopterName: "Juan" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });
});