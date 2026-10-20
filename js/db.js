// Lokal lagring i telefonen (IndexedDB). Inget skickas någonstans.
// Appens gamla namn; ändras inte, annars försvinner allt som sparats (appen heter Svetsjobb sedan 2026-10-20).
const DB_NAME = 'spardokumentation';
// Version 2: bilder i jobben (2026-10-19).
const DB_VERSION = 2;

let dbPromise;

function open() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        const finns = name => db.objectStoreNames.contains(name);
        if (!finns('jobs')) db.createObjectStore('jobs', { keyPath: 'id' });
        if (!finns('templates')) db.createObjectStore('templates', { keyPath: 'key' });
        if (!finns('settings')) db.createObjectStore('settings', { keyPath: 'key' });
        if (!finns('bilder')) db.createObjectStore('bilder', { keyPath: 'id' }).createIndex('jobId', 'jobId');
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
}

async function tx(store, mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const t = db.transaction(store, mode);
    const req = fn(t.objectStore(store));
    t.oncomplete = () => resolve(req && req.result);
    t.onerror = () => reject(t.error);
  });
}

export const get = (store, key) => tx(store, 'readonly', s => s.get(key));
export const getAll = (store) => tx(store, 'readonly', s => s.getAll());
export const put = (store, value) => tx(store, 'readwrite', s => s.put(value));
export const del = (store, key) => tx(store, 'readwrite', s => s.delete(key));
export const getAllBy = (store, index, value) => tx(store, 'readonly', s => s.index(index).getAll(value));

export async function getSetting(key, fallback) {
  const row = await get('settings', key);
  return row ? row.value : fallback;
}

export const setSetting = (key, value) => put('settings', { key, value });

// Be Safari att inte rensa lagringen automatiskt.
export async function persist() {
  try {
    if (navigator.storage && navigator.storage.persist) await navigator.storage.persist();
  } catch (e) { /* stöds inte överallt */ }
}
