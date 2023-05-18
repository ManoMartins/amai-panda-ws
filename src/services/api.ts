import axios from 'axios'

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ0NTY3NDYsInN1YiI6IjU2OGRmZWU2LTEyOGItNDM4OC1hYzdjLTY4MmQ4OTMzZjBiZCJ9.Fic4s0nsZaBKghIYA1Bjw0HB1qd8D6nZe6q2c83Qlws'

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
