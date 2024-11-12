const express = require('express');
const patientRoutes = require('./routes/patientRoutes');
const activityRoutes = require('./routes/activityRoutes');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const activityController = require('./controllers/activityController');

app.get('/activities', activityController.getAllActivities);


app.use('/patients', patientRoutes);
app.use('/activities', activityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
