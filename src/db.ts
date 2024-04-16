import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource =  new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123456789",
    port: 5432, 
    database: "apirest2",
    entities: [User], 
    logging: true,
    synchronize : true, 
    
})