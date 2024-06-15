// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;

// const productSchema = new mongoose.Schema(
//   {
//     pName: {
//       type: String,
//       required: true,
//     },
//     pDescription: {
//       type: String,
//       required: true,
//     },
//     pPrice: {
//       type: Number,
//       required: true,
//     },
//     pSold: {
//       type: Number,
//       default: 0,
//     },
//     pQuantity: {
//       type: Number,
//       default: 0,
//     },
//     pCategory: {
//       type: ObjectId,
//       ref: "categories",
//     },
//     pImages: {
//       type: Array,
//       required: true,
//     },
//     pOffer: {
//       type: String,
//       default: null,
//     },
//     pRatingsReviews: [
//       {
//         review: String,
//         user: { type: ObjectId, ref: "users" },
//         rating: String,
//         createdAt: {
//           type: Date,
//           default: Date.now(),
//         },
//       },
//     ],
//     pStatus: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const productModel = mongoose.model("products", productSchema);
// module.exports = productModel;

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    pName: {
      type: String,
    },
    pDescription: {
      type: String,
    },
    pPrice: {
      type: Number,
    },
    pSold: {
      type: Number,
      default: 0,
    },
    pQuantity: {
      type: Number,
      default: 0,
    },
    pCategory: {
      type: ObjectId,
      ref: "categories",
    },
    pImages: {
      type: Array,
    },
    pOffer: {
      type: String,
    },
    pRatingsReviews: [
      {
        review: String,
        user: { type: ObjectId, ref: "users" },
        rating: String,
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    pStatus: {
      type: String,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
