import app from './server';
/* import * as dotenv from 'dotenv';
dotenv.config(); */

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
