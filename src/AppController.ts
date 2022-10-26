import { Idata } from "./Context";

export async function getData(){
    try {
        const capture = await fetch('https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users');
        const captureJson = await capture.json();

        return captureJson
        
    } catch (error) {
        throw error;
    }
}

export async function deleteById(id: string){
    try {
        const capture = await fetch(`https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users/${id}`,{
            method: 'DELETE'
        });
        
    } catch (error) {
        throw error;
    }
}

export async function editById(id: string, body: Idata){
    try {
        const capture = await fetch(`https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users/${id}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        
    } catch (error) {
        throw error;
    }
}

export async function create(body: Idata){
    try {
        const capture = await fetch(`https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        
    } catch (error) {
        throw error;
    }
}