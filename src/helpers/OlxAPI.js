import Cookies from "js-cookie";

const BASEAPI = 'http://localhost:7000'
const apiFetchPost = async (endpoint, body) => {
    /** adiciona o token na requisição */
    if(!body.token) {
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    });

    const json = await res.json();
    
    /** Verifica se tem autorização */
    if(json.notallowed){
        window.location.href = '/signin'
        return;
    }

    return json;
}
const OlxApi = {
    login : async (email, password) =>{
        //fazer a consulta
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        );

        return json;
    }
};

export default ()=>OlxApi;