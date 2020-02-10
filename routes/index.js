const { Router } = require('express');
const controller = require('../controller');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to this world'))

router.post('/posts', controller.createPost);
router.get('/posts', controller.getAllPosts);
router.get('/posts/:postId', controller.getPostById);
router.put('/posts/:postId', controller.updatePost);
router.delete('/posts/:postId', controller.deletePost);


module.exports = router;