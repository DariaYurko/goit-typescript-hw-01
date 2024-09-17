/** Record
 * 
 * У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. 
 * Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
 * 
 * 2:08:00 - https://www.edu.goit.global/uk/learn/19750491/23199026/23199055/extras
 */

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };


const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
