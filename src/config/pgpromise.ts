import dotenv from 'dotenv'

dotenv.config()

const config = {
    connectionString: process.env.DATABASE_URL,
    max: 30
}

export default config