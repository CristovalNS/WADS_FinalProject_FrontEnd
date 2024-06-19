const api = 'https://centra-api.vercel.app';

export function API() {return api;}

async function getUserData() {    
    try{
        const userId = Cookies.get('user_id');
        const response = await axios.get(`https://login-api-rho-one.vercel.app/user/${userId}`);
        const result = response.data
        return result;
    } catch {
        return 0;
    }
}

export default getUserData;