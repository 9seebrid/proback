const { updateViewCount } = require('../controllers/putViews');

const router = require('express').Router();

router.put('/community_detail/view/:write_number', updateViewCount);
