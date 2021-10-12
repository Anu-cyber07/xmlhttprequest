const { v4: uuidV4 } = require('uuid');
var sid=uuidV4();
//nothing else to import because we are using the built in methods
//https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase


var IDB = (function init() {
  var db:any = null;
  var objectStore = null;
  var DBOpenReq = window.indexedDB.open('ClientDB', 6);

  DBOpenReq.addEventListener('error', (err) => {
    //Error occurred while trying to open DB
    console.warn(err);});
  DBOpenReq.addEventListener('success', (ev:any) => {
    //DB has been opened... after upgradeneeded
    db = ev.target.result;
    console.log('success', db);
  });
  DBOpenReq.addEventListener('upgradeneeded', (ev:any) => {
    //first time opening this DB
    //OR a new version was passed into open()
    db = ev.target.result;
    let oldVersion = ev.oldVersion;
    let newVersion = ev.newVersion || db.version;
    console.log('DB updated from version', oldVersion, 'to', newVersion);

    console.log('upgrade', db);
    if (!db.objectStoreNames.contains('clientStore')) {
      objectStore = db.createObjectStore('clientStore', {
        keyPath: 'appid',
      });
    }
  });

  document.addEventListener('submit', (ev:any) => {
    ev.preventDefault();
    //one of the form buttons was clicked

    var appid = document.getElementById('appid').value.trim();
    var appurl = document.getElementById('appurl').value.trim();

    var client = {
      uuid:sid,
      appid,
      appurl
    };

    var tx = makeTX('clientStore', 'readwrite');
    tx.oncomplete = (ev:any) => {
      console.log(ev);
    };

    let store = tx.objectStore('clientStore');
    let request = store.add(client);

    request.onsuccess = (ev: any) => {
      console.log('successfully added an object');
    };
    request.onerror = (err: any) => {
      console.log('error in request to add');
      alert('User alreay exists!! Create new user')
    };
  });

  function makeTX(storeName: string, mode: string) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err: any) => {
      console.warn(err);
    };
    return tx;
  }
})();

