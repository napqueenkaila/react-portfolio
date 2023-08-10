// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-h-FJgCkbQrCkWr9M29vp5HDVXE-JwJg",
    authDomain: "portfolio-14eca.firebaseapp.com",
    projectId: "portfolio-14eca",
    storageBucket: "portfolio-14eca.appspot.com",
    messagingSenderId: "45583481010",
    appId: "1:45583481010:web:9b8e36e781c8a15f3ef1ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const projectsCollectionRef = collection(db, "projects")


export async function getProjects() {
    const snapshot = await getDocs(projectsCollectionRef)
    const projects = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return projects
}