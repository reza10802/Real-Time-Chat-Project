import { Client,Databases,Account } from 'appwrite';

export const PROJECT_ID="658ec272565623e2be03"
export const DATABASE_ID="6590057fd9df75e4ca7d"
export const COLLECTION_ID_MESSAGES="65900588cc39a9a7214d"

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658ec272565623e2be03');

export const databases=new Databases(client)
export const account=new Account(client)

export default client