const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
//ejs
app.set('view engine', 'ejs'); 
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('home');
}
);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

