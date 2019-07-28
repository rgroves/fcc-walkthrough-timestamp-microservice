const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'))

app.get('/api/timestamp/:date?', (req, res) => {
    var date = req.params.date;

    if (typeof date !== 'undefined') {
        date = new Date(date);    
    } else {
        date = new Date();
    }

    var dateUtc = date.toUTCString();

    if (dateUtc == 'Invalid Date') {
        res.json({ 'error': dateUtc });
    } else {
        res.json({
            'unix': date.getTime(),
            'utc': dateUtc
        });
    }
});

app.listen(port, () => console.log(`Timestamp Microservice is listening on port ${port}`));