const request = require("supertest");
const app = require("../index.js");
const dotenv = require("dotenv");
dotenv.config();

//Test Index
describe("test index api", () => {
  it("return 200 ok", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});

//USER TESTING ---------------------------------------------------------------------------------------
//Create New User
describe("user api signup test", () => {
  it("return 201 create user success", () => {
    const RegisAuth = {
      name: "binar",
      email: "binar@gmail.com",
      password: "binar",
    };

    request(app)
      .post("/user/register")
      .send(RegisAuth)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201);
  });

  it("return 404 create user failed", () => {
    const RegisAuthError = {
      name: "binar",
      email: "binar@gmail.com",
      passwordd: "binar",
    };

    request(app)
      .post("/user/register")
      .send(RegisAuthError)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});

//Login User
describe("user api login test", () => {
  it("return 200 authorized login", () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    request(app)
      .post("/user/login")
      .send(loginAuth)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });

  it("return 401 unauthorized login", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar4",
    };

    await request(app)
      .post("/user/login")
      .send(loginAuth)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(401);
  });
});

//Profile User
describe("user api profile test", () => {
  it("return 200 Ok profile", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    await request(app).post("/user/register").send(loginAuth);

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    await request(app)
      .get("/auth/profile")
      .set("Authorization", token)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

//Update user
describe("user api update profile test", () => {
  it("return 200 update success", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const updatePayload = {
      name: "Binar Academy",
      address: "Jln Jendral",
      city: "Jogja",
      phone: "081321123",
      image: "",
    };

    await request(app)
      .put("/profile/update")
      .set("Authorization", token)
      .attach("image", "D:/erik.jpg", updatePayload)
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it("return 404 update failed", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const updatePayload = {
      name: "Binar Academy",
      address: "Jln Jendral",
      city: "Jogja",
      phone: "0813211232",
    };

    await request(app)
      .put("/profile/update")
      .set("Authorization", token)
      .attach("imagess", "", updatePayload)
      .expect(404)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});

//PRODUCT TESTING ---------------------------------------------------------------------------------------
//Get All Products
describe("product api get all products test", () => {
  it("return 200 ok", () => {
    request(app)
      .get("/product")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

//Get Product By Id
describe("product api get product by id test", () => {
  it("return 200 using valid id", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    await request(app)
      .get("/product/1")
      .set("Authorization", token)
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it("return 404 using invalid id", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    request(app)
      .get("/product/10000")
      .set("Authorization", token)
      .expect(404)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});

//Get Product By UserId
describe("product api get product by userId test", () => {
  it("return 200 Ok", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    await request(app)
      .get("/seller/product/0")
      .set("Authorization", token)
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});

//Create New Product
describe("product api create product test", () => {
  it("return 201 created", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const productPayload = {
      name: "Jam Tangan Philip Regal",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 250000,
      image:
        "https://res.cloudinary.com/dcisuvowd/image/upload/v1656515022/jam1_blzizc.jpg",
      categoryId: 1,
    };

    await request(app)
      .post("/seller/product")
      .set("Authorization", token)
      .send(productPayload)
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});

//Update product
describe("product api update product test", () => {
  it("try data", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const productPayload = {
      name: "Jam Tangan Philip Regals",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 250000,
      categoryId: 1,
    };

    await request(app)
      .post("/seller/product")
      .set("Authorization", token)
      .attach("image", "D:/HITAM.jpg", productPayload);

    const productPayload1 = {
      name: "Jam Tangan Philip Regals",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 350000,
      categoryId: 1,
    };

    await request(app)
      .put("/seller/product/1")
      .set("Authorization", token)
      .attach("image", "D:/erik.jpg", productPayload1);
  });

  it("return 404 error", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const productPayload = {
      name: "Jam Tangan Philip Regals",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 250000,
      categoryId: 1,
    };

    await request(app)
      .post("/seller/product")
      .set("Authorization", token)
      .send(productPayload);

    const productPayload1 = {
      name: "Jam Tangan Philip Regals",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 350000,
      categoryId: 1,
    };

    await request(app)
      .put("/seller/product/10000")
      .set("Authorization", token)
      .attach("image", "D:/erik.jpg", productPayload1)
      .expect(404)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it("return 200 update", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const productPayload = {
      name: "Jam Tangan Philip Regals",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 250000,
      categoryId: 1,
    };

    await request(app)
      .post("/seller/product")
      .set("Authorization", token)
      .send(productPayload);

    const productPayload1 = {
      name: "Jam Tangan Philip Regals",
      description:
        "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      price: 350000,
      categoryId: 1,
    };

    await request(app)
      .put("/seller/product/1")
      .set("Authorization", token)
      .attach("image", "D:/erik.jpg", productPayload1)
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});

// //Update status product
// describe("product api update status product test", () => {
//   it("return 200 update status success", async () => {
//     const loginAuth = {
//       email: "binar@gmail.com",
//       password: "binar",
//     };

//     const response = await request(app).post("/auth/login").send(loginAuth);

//     const token = `Bearer ${response.body.token}`;

//     const productPayload = {
//       name: "Jam Tangan Philip Regal",
//       price: 250000,
//       description:
//         "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
//       categories: "Aksesoris",
//       images:
//         "https://res.cloudinary.com/dcisuvowd/image/upload/v1656515022/jam1_blzizc.jpg",
//       categoryId: 1,
//     };

//     await request(app)
//       .post("/seller/products")
//       .set("Authorization", token)
//       .send(productPayload);

//     await request(app)
//       .put("/buyer/product/trans/1")
//       .set("Authorization", token)
//       .expect(200)
//       .expect("Content-Type", "application/json; charset=utf-8");
//   });

//   it("return 404 update status error", async () => {
//     const loginAuth = {
//       email: "binar@gmail.com",
//       password: "binar",
//     };

//     const response = await request(app).post("/auth/login").send(loginAuth);

//     const token = `Bearer ${response.body.token}`;

//     const productPayload = {
//       name: "Jam Tangan Philip Regal",
//       price: 250000,
//       description:
//         "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
//       categories: "Aksesoris",
//       images:
//         "https://res.cloudinary.com/dcisuvowd/image/upload/v1656515022/jam1_blzizc.jpg",
//       categoryId: 1,
//     };

//     await request(app)
//       .post("/seller/products")
//       .set("Authorization", token)
//       .send(productPayload);

//     await request(app)
//       .put("/buyer/product/trans/10000")
//       .set("Authorization", token)
//       .expect(404)
//       .expect("Content-Type", "application/json; charset=utf-8");
//   });
// });

//Delete Product
describe("product api delete product test", () => {
  it("return 200 delete success", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    await request(app)
      .delete("/seller/product/1")
      .set("Authorization", token)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });

  it("return 404 delete failed", async () => {
    const loginAuth = {
      email: "binar@gmail.com",
      password: "binar",
    };

    const response = await request(app).post("/user/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    await request(app)
      .delete("/seller/product/10000")
      .set("Authorization", token)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404);
  });
});
