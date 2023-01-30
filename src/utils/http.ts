import {getClient, ResponseType} from "@tauri-apps/api/http";


const client = await getClient();

const HOST = "https://richelf.tech";

const netlag = () => {
  const start = (new Date()).getTime();
  return client.get(`${HOST}?random-no-cache=${Math.floor((1 + Math.random()) * 0x10000).toString(16)}`, {
    timeout: 5,
    responseType: ResponseType.Text
  }).then(_ => {
    const delta = (new Date()).getTime() - start;
    return delta > 999 ? "999" : delta.toString();
  }).catch(err => {
    const delta = (new Date()).getTime() - start;
    if (err.toString().indexOf("Network Error") >= 0) return "999";
    else return delta > 999 ? "999" : delta.toString();
  })
};

export {
  HOST, netlag
};