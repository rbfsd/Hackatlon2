// disparuController.js
import {
  addDisparu,
  getDisparuDetails,
  addTodolistItem,
} from "../models/disparuModel";

// Fonction pour ajouter un nouveau disparu
const addDisparu = async (disparuData) => {
  // Implémente la logique pour ajouter un nouveau disparu en utilisant la fonction du modèle
  return await addDisparu(disparuData);
};

// Fonction pour récupérer les détails d'un disparu
const getDisparuDetails = async (disparuId) => {
  // Implémente la logique pour récupérer les détails d'un disparu en utilisant la fonction du modèle
  return await getDisparuDetails(disparuId);
};

// Fonction pour ajouter une tâche à la Todolist d'un disparu
const addTodolistItem = async (disparuId, task) => {
  // Implémente la logique pour ajouter une tâche à la Todolist d'un disparu en utilisant la fonction du modèle
  return await addTodolistItem(disparuId, task);
};

export { addDisparu, getDisparuDetails, addTodolistItem };
