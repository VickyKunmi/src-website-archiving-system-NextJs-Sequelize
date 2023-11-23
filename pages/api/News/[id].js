import { getOneNews, postNews, putNews, deleteNews } from "@/db/newsController";


export default async function handler(req, res){

    const { newsId } = req.query;
    const { method } = req;
    if (method === "GET") return getOneNews(req, res, newsId);

}