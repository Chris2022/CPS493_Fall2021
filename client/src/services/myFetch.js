import session from "./session";

const API_ROOT = process.env.VUE_APP_API_ROOT ?? 'http://localhost:3100';

 export async function api(url){
     try {
        // return fetch(API_ROOT + url).then(x=>x.json()).catch(err => session.error(err));
        const x = await fetch(API_ROOT + url);
        return await x.json();
     } catch (err) {
         session.error(err);
     }
}

