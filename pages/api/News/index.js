import { getNews, postNews, putNews, deleteNews } from "@/db/newsController";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // get all news
      getNews(req, res);
      break;
    case "POST":
      postNews(req, res);
      break;
    case "PUT":
      putNews(req, res);
      break;
    default:
      deleteNews(req, res);
      break;
  }
}
