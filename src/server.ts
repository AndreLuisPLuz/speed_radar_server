import app from './app';
import 'dotenv/config';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then((): void => {
    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => console.log('Servidor executando'));
  })
  .catch((err:unknown): void => {
    console.error('Error during Data Source initialization', err);
  });