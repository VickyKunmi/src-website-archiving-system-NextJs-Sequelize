import { getOneNews, postNews, putNews, deleteNews } from "@/db/newsController";





export default async function handler(req, res) {
  const {method} = req;
  if(method === 'GET') return getOneNews(req,res)
  // if (method === "GET") return getOneNews(req, res, newsId);
  // if (method === "POST") return postNews(req, res);
  // if (method === "PUT") return putNews(req, res);
  // if (method === "DELETE") return deleteNews(req, res);
}
