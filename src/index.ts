import "reflect-metadata" 
import app from "./app"
import { AppDataSource } from "./db";

async function main(){

    try {
        await AppDataSource.initialize();
        app.listen(3000)
        console.log('hello world desde el puerto 3000');
    } catch (error) {
        console.error(error)
    }

}

main();

