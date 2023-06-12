const PORT = process.env.PORT || 5000;

const Application = require('./framework/Application');
const userRouter = require('./src/users-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const parseBody = require('./framework/parseBody');
const mongoose = require('mongoose');

const app = new Application();

app.use(jsonParser);
app.use(parseBody);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://lournrose:secret@cluster0.xdggcau.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => console.log(`Сервис запустился успешно на порту ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();