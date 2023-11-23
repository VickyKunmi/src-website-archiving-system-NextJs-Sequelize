import { models } from "./models";
const { News } = models;
//get controller
export async function getNews(req, res) {
  try {
    const news = await News.findAll();
    if (news) {
      console.log(news, "serverside");
      return await res.status(200).send(news);
    }
    return res.status(500).send({ error: "Oops! something wrong" });
  } catch (error) {
    res.status(500).send({ error: "Oops! something wrong" });
  }
}

//single news
export async function getOneNews(req, res) {
  const {newsId} = req.query;
  try {
    if(newsId) {
      const newsdata = await News.findOne({where: {id: newsId}})
      if(newsdata) return res.status(200).send(newsdata)
    }
    // return res.status(404).json({ error: "News not selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the news" });
  }
}

//post controller
export async function postNews(req, res) {
  try {
    const { formData } = req.body;
    console.log(formData, "HELLO SERVER");
    const result = await News.create(formData);
    if (result)
      return res
        .status(200)
        .send({ message: "Saved successfully", isSaved: true });
    if (!result)
      return res
        .status(500)
        .send({ message: "ooppss something went wrong!", isSaved: false });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

//put controller
export async function putNews(req, res) {
  try {
    const { models, newsId } = req.body;
    console.log(models, newsId, "news");
    if (newsId) {
      const news = await News.findOne({
        where: { id: newsId }
      });
      if (news) {
        news.set(models);
        await news.save();
        return res
          .status(200)
          .send({ message: "Updated successfully", isUpdated: true });
      }
    }
    res
      .status(500)
      .json({ message: "News not Selected...!", isUpdated: false });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating the data", isUpdated: false });
  }
}

//Delete controller
export async function deleteNews(req, res) {
  try {
    const { newsId } = req.body;
    if (newsId) {
      const news = await News.findOne({
        where: { id: newsId }
      });
      if (news) {
        await news.destroy();
        return await res
          .status(200)
          .send({ message: "Deleted successfully", isDeleted: true });
      }
    }
    return res
      .status(404)
      .json({ message: "News not selected", isDeleted: false });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the news" });
  }
}
