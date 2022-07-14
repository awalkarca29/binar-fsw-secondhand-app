"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Products", [
      {
        name: "Jam Tangan Philip Regal",
        description:
          "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        price: 250000,
        image:
          "https://res.cloudinary.com/dcisuvowd/image/upload/v1656515022/jam1_blzizc.jpg",
        isSold: false,
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jam Tangan Seiko",
        description:
          "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        price: 270000,
        image:
          "https://res.cloudinary.com/dcisuvowd/image/upload/v1656515085/jam2_yth6jk.jpg",
        isSold: false,
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   name: 'Jam Tangan Casio MTP',
      //   price: 320000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656513577/jam3_vbhrd6.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Mobil Toyota Fortuner',
      //   price: 55000000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Kendaraan",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656511507/car1_n2phhe.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Mobil Toyota Corolla Altis',
      //   price: 35000000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Kendaraan",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656511749/car2_cwgenm.png",
      //   categoryId: 1,
      //   userId: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Mobil Honda Civic',
      //   price: 52000000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Kendaraan",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656511940/car3_ml9n9n.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Kaos MTMA',
      //   price: 40000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Baju",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656513752/baju_1_evpsnm.jpg",
      //   categoryId: 1,
      //   userId: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Jaket Supreme',
      //   price: 120000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Baju",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656510304/baju2_ayirpt.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Baju Adat Jawa',
      //   price: 60000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Baju",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656513941/baju_3_kgsmhh.jpg",
      //   categoryId: 1,
      //   userId: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Hp Samsung Galaxy A10',
      //   price: 920000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Elektronik",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656510712/elektronik1_qewcfl.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Laptop Acer Aspire V5',
      //   price: 2300000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Elektronik",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656510893/elektronik2_qsc95g.jpg",
      //   categoryId: 1,
      //   userId: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'TV TCL 42 inch',
      //   price: 570000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Elektronik",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656511264/eletronik3_uvgm2q.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Sepatu Nike T90',
      //   price: 110000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Hobi",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656514109/hobi1_fjbmfy.jpg",
      //   categoryId: 1,
      //   userId: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Raket Yonex Astrox',
      //   price: 80000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Hobi",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656514255/hobi2_hevx3g.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Alat Pancing 1 Set',
      //   price: 70000,
      //   description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
      //   categories: "Hobi",
      //   images: "https://res.cloudinary.com/dcisuvowd/image/upload/v1656514386/hobi3_gi4bq3.jpg",
      //   categoryId: 1,
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
