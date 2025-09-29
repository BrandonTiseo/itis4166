import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/categoryService.js';


export async function getAllCategoriesHandler(req, res) {
  const {search, limit = 10, offset = 0 } = req.query;
  const filter = {};
  if(search) filter.search = search;
  if(limit) filter.limit = limit;
  if(offset) filter.offset = offset;
  let categories = await getAllCategories(filter);
  res.status(200).json(categories);
}

export async function getCategoryByIdHandler(req, res) {
  let id = parseInt(req.params.id);
  let category = await getCategoryById(id);
  res.status(200).json(category);
}

export async function createCategoryHandler(req, res) {
  let data = req.body;
  let newCategory = await createCategory(data);
  res.status(201).json(newCategory);
}

export async function updateCategoryHandler(req, res) {
  let id = parseInt(req.params.id);
  let updates = req.body;
  const updatedCategory = await updateCategory(id, updates);
  res.status(200).json(updatedCategory);
}

export async function deleteCategoryHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteCategory(id);
  res.status(204).send();
}
