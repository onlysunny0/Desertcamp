import conf from "../conf/conf";
import axios from 'axios';

export class AuthService {

    // constructor(){
    //     this.client
    //     .setEndpoint(conf.appwriteUrl) 
    //     .setProject(conf.appwriteProjectId);
    //     this.account = new Account(this.client);
    // }

    async createAccount(formdata){

        try {
            const res = await axios.post(conf.apiUrl+'api/auth/register' , formdata , {
                headers: {
                  'Content-Type': 'application/json'
                }}); // Replace with your API URL
            return res.data;
          } catch (err) {
            return err.message;
          }
    }

    // async login ({email , password}){
    //     try {
    //         return await this.account.createEmailPasswordSession(email , password);
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // async getCurrentUser(){
    //     try {
    //         return this.account.get();
    //     } catch (error) {
    //         console.log("Appwrite Service :: getcurrentUser :: error ::", error);
    //     }

    //     return null;
    // }

    // async logout(){
    //     try {
    //         return this.account.deleteSessions()
    //     } catch (error) {
    //         console.log("Appwrite Service :: Logout :: error ::", error);
    //     }
    // }
}

const authService = new AuthService();

export default authService;