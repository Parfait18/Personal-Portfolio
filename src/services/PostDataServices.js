import http from "../http-common";

class PostDataServices {
  getAll() {
    return http.get("/posts");
  }

  get(id) {
    return http.get(`blog/post/${id}`);
  }

  create(data) {
    return http.post("/add/", data);
  }

  update(id, data) {
    return http.put(`/blog/post/${id}`, data);
  }

  delete(id) {
    return http.delete(`/blog/post/${id}`);
  }

  deleteAll() {
    return http.delete("/blog");
  }
  findById(id) {
    return http.get(`/blog/post/view/${id}`);
  }
}

export default new PostDataServices();
