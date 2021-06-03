import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shrayank',
    email: 'shrayank@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Prajwal',
    email: 'prajwal@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
