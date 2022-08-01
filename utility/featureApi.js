class FeatureApi {
  constructor(reqQuery, databaseQuery) {
    this.reqQuery = reqQuery;
    this.databaseQuery = databaseQuery;
  }
  filter() {
    let query = { ...this.reqQuery };
    const reqs = ["limit", "page", "sort", "field"];
    query = JSON.stringify(query);
    reqs.forEach((req) => {
      delete query[req];
    });

    query = query.replace(/\bgte|gt|lt|lte\b/g, (match) => `$${match}`);
    query = JSON.parse(query);
    this.databaseQuery = this.databaseQuery.find(query);
    return this;
  }
  sort() {
    let sort = this.reqQuery.sort;
    if (sort) {
      sort = sort.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.sort(sort);
    } else {
      sort = "-createdAt";
      this.databaseQuery = this.databaseQuery.sort(sort);
    }
    return this;
  }
  field() {
    let field = this.reqQuery.field;
    if (field) {
      field = field.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.select(field);
    } else {
      this.databaseQuery = this.databaseQuery.select("-__v");
    }
    return this;
  }
  paginate() {
    let page = this.reqQuery.page * 1 || 1;
    let limit = this.reqQuery.limit * 1 || 3;
    let skip = (page - 1) * limit;
    this.databaseQuery = this.databaseQuery.skip(skip).limit(limit);
    return this;
  }
}

module.exports = FeatureApi;
