//Function to generate a random ID
export const generarId = () =>{
    const id = Math.random().toString(36).substr(2);
    const fecha = new Date().getTime().toString(36);
    return id + fecha;
}