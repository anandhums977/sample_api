const express = require('express');
const dbConnect = require('./utils/dbConnection'); 
const blogRoutes = require('./routes/blogRoutes');


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


dbConnect()

app.use('/api/v1',blogRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
