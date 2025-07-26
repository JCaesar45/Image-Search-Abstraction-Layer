const express = require('express');
const axios = require('axios');
const Search = require('../models/Search');
const router = express.Router();

const API_KEY = process.env.PIXABAY_KEY;

router.get('/query/:term', async (req, res) => {
  const { term } = req.params;
  const page = req.query.page || 1;

  try {
    // Log the search
    await Search.create({ term });

    // Fetch images
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: term,
        page,
        per_page: 10
      }
    });

    const results = response.data.hits.map(img => ({
      imageUrl: img.largeImageURL,
      description: img.tags,
      pageUrl: img.pageURL
    }));

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Image search failed' });
  }
});

router.get('/recent', async (req, res) => {
  try {
    const recent = await Search.find().sort({ when: -1 }).limit(10).select('term when -_id');
    res.json(recent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recent searches' });
  }
});

module.exports = router;
