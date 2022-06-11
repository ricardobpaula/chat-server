import pgpromise from 'pg-promise'
import config from '../config/pgpromise'
const pgp = pgpromise()

const db = pgp(config)

export default db