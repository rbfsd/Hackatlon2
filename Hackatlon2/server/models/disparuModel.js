// disparuModel.js
import pool from "../database/dbConfig"; // Assure-toi que le chemin vers dbConfig.js est correct

// Fonction pour récupérer la liste des disparus depuis la base de données
const getDisparus = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM disparus");
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Erreur lors de la récupération des disparus :", error);
    throw error;
  }
};

// Autres fonctions pour gérer les disparus dans la base de données

export { getDisparus };
