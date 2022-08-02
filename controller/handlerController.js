const AppError = require("../utility/appError");
const catchAsync = require("../utility/catchAsync");
const Products = require("../model/shop");
const FeatureApi = require("../utility/featureApi");

const { category, size, color } = require("../model/category");
function resFunc(res, data, statusCode) {
  res.status(statusCode).json({
    status: "sucess",
    results: data.length,
    data,
  });
}
const getAll = catchAsync(async (req, res, next, Model, option) => {
  let data = new FeatureApi(req.query, Model)
    .filter()
    .sort()
    .field()
    .paginate();

  data = await data.databaseQuery.populate({
    path: "products",
    select: "name id",
  });
  console.log(data);
  resFunc(res, data, 200);
});
const getOne = catchAsync(async (req, res, next, Model) => {
  const id = req.params.id;
  const data = await Model.findById(id);
  resFunc(res, data, 200);
});
const add = catchAsync(async (req, res, next, Model) => {
  const data = await Model.create(req.body);
  resFunc(res, data, 201);
});

const update = catchAsync(async (req, res, next, Model) => {
  const data = await Model.findByIdAndUpdate({ id: req.params.id }, req.body, {
    new: true,
    runValidator: true,
  });
  resFunc(res, data, 202);
});
const deleteData = catchAsync(async (req, res, next, Model) => {
  const data = await Model.findByIdAndRemove(req.params.id);
  resFunc(res, data, 204);
});

module.exports = {
  getAll,
  getOne,
  add,
  update,
  deleteData,
};
