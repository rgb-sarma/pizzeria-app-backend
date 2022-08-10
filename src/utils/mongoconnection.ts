import {MongoClient} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1')

export async function run() {
    await client.connect()
    return client.db('pizza')
}

// export default run