import express from 'express';
import config from 'config';
import router from './routes/user';

require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/users', router);

console.log(`Application name: ${config.get('name')}`);
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`MybarberApp listening to port ${port}...`));
module.exports = app;
