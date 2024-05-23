import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB as string,
  process.env.USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.HOST as string,
    dialect: 'mysql',
  }
);

const conexion = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa');
  } catch (error) {
    console.error('Error en la conexión', error);
  }
};

conexion();

export default sequelize;
