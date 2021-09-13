import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Akhila',
        email: 'akhila@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Nirmal',
        email: 'nirmal@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users