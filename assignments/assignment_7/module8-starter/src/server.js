import express from 'express';

import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  const morganModule = await import('morgan');
  const morgan = morganModule.default;
  app.use(morgan('tiny'));
}

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  if (!err.status) {
    err.status = 500;
    err.message = 'Internal Server Error';
  }
  res.status(err.status).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
