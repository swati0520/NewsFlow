import News from "../models/News.js";

// Create News
export const createNews = async (req, res) => {
  try {
    const { title, description, image, category, source, url, audioUrl } = req.body;

    const news = await News.create({
      title,
      description,
      image,
      category,
      source,
      url,
      audioUrl,
    });

    res.status(201).json({
      success: true,
      message: "News created successfully",
      news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All News
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get News By ID
export const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update News
export const updateNews = async (req, res) => {
  try {
    const { title, description, image, category, source, url, audioUrl } = req.body;

    const news = await News.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        image,
        category,
        source,
        url,
        audioUrl,
      },
      { new: true, runValidators: true }
    );

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "News updated successfully",
      news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete News
export const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};