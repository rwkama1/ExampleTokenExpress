import {MongoClient} from "mongodb";
import { DataException } from "../shared/exceptions/dataexception";
import ConectionString from "./StringConection";

export class Conection
{
   
    static conection() {
        try {
         const clientcon = new MongoClient(ConectionString.cnn())
         return clientcon;
        } catch (error) {
            throw new DataException("Could not connect to MongoDB: " + error.message);
        }
    }
}