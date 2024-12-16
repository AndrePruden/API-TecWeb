// db.js
import mysql from 'mysql2/promise'; // Usamos mysql2 para manejar promesas

// Configuración de la conexión a la base de datos
export const pool = mysql.createPool({
  host: 'servidorbudget.mysql.database.azure.com',
  user: 'AndrePruden',
  password: 'estudiante2024*',
  database: 'budget_db',
  port: 3306, // Puerto predeterminado de MySQL
  ssl: {
    rejectUnauthorized: false, // Asegúrate de tener configurado SSL si es necesario en Azure
  },
});