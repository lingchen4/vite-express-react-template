import express from 'express';
import router from './lib/router';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const { serverPORT = 3001 } = process.env;
const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(serverPORT, () => {
  console.log(`Server listening at http://localhost:${serverPORT}`);
});
