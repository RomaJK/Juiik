const express = require('express')
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(productRoutes);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
const userRouter = require('./user/user.router');
app.use(userRouter);
