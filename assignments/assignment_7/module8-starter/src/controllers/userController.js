import { getAllUsers, getUserById, updateUser, deleteUser, getUserPosts, updateOtherUser } from "../services/userService.js";

export async function getAllUsersHandler(req, res){
    const users = await getAllUsers();
    res.status(200).json(users);
}

export async function getUserByIdHandler(req, res) {
  let id = req.user.id
  let user = await getUserById(id);
  res.status(200).json(user);
}

export async function updateUserHandler(req, res) {
  let id = req.user.id
  const updates = {};
  if (req.body.email) updates.email = req.body.email;
  if (req.body.password) updates.password = req.body.password;
  const updatedUser = await updateUser(id, updates);
  res.status(200).json(updatedUser);
}

export async function deleteUserHandler(req, res) {
  let id = req.user.id
  await deleteUser(id);
  res.status(204).send();
}

export async function getUserPostsHandler(req, res){
  let id = req.user.id;
  let posts = await getUserPosts(id);
  res.status(200).json(posts);
} 

export async function updateOtherUserHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  updates.role = req.body.role;
  const updatedUser = await updateOtherUser(id, updates);
  res.status(200).json(updatedUser);
}