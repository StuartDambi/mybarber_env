import express from 'express';
import userController from '../controllers/user';

const router = express.Router();
// Return all the users
router.get('/', userController.userDisplay);

// User signup
router.post('/signup', (req, res) => res.send('We are signing up'));
module.exports = router;
