const express = require('express');
const app = express();
const port = 8000;

app.get(
    '/', (req, resp) => {
        resp.send('Hello world Docker Example how are you');
    }
);

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
});