import { openDB } from 'idb';

const initdb = async () =>
  openDB('pawfect-match', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('pawfect-match')) {
        console.log('pawfect-match database already exists');
        return;
      }
      db.createObjectStore('pawfect-match', { keyPath: 'id', autoIncrement: true });
      console.log('pawfect-match database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
// Create a connection to the database database and version we want to use.
const pawfectMatchDb = await openDB('pawfect-match', 1);

// Create a new transaction and specify the database and data privileges.
const tx = pawfectMatchDb.transaction('pawfect-match', 'readwrite');

// Open up the desired object store.
const store = tx.objectStore('pawfect-match');

// Use the .add() method on the store and pass in the content.
const request = store.put({ id: 1, value: content });

// Get confirmation of the request.
const result = await request;
console.log('🚀 - data saved to the database', result);
}

//Gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Connection to the database database and version we want to use.
  const pawfectMatchDb = await openDB('pawfect-match', 1);

  // New transaction / specify the database and data privileges.
  const tx = pawfectMatchDb.transaction('pawfect-match', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('pawfect-match');

  // Use the .getAll() method to get all data in the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  // console.log('result.value', result);
  return result;
}

initdb();
