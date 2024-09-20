const { updateViewCount } = require('../controllers/postViews');

const router = require('express').Router();

router.put('/view/:write_number', updateViewCount);
