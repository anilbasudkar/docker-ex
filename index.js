const express = require('express');
const app = express();
const port = 8000;

app.get(
    '/', (req, resp) => {
        resp.send('Hello world Docker Example')
    }
);

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
});