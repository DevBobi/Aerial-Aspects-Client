import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireabse.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;
