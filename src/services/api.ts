import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzcwMTc5NTMsInN1YiI6IjU2OGRmZWU2LTEyOGItNDM4OC1hYzdjLTY4MmQ4OTMzZjBiZCJ9.ASD0ps7LP6BFThM71nTd3n5zfjnmrzjBpVehh8xY4a8',
    },
})
