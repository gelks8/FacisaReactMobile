import app from '../firebaseConfig';
import { collection, getFirestore, addDoc, getDocs, query, where } from 'firebase/firestore/lite'

const firestore = getFirestore(app);

const firebaseService = {
    save: async (data: any, collectionName: string) => {
        return await addDoc(collection(firestore, collectionName), data);
    },
    getAll: async (collectionName: string) => {
        const column = await collection(firestore, collectionName);
        const snapshot = await getDocs(column);
        const dataList = await snapshot.docs.map(doc => doc.data());
        return dataList;
    },
    findUserByEmailAndPassword: async (email: string, password: string) => {
        const col = collection(firestore, 'Users');
        const q = query(col, where('formEmail', '==', email), where('formPassword', '==', password));
        const snapshot = await getDocs(q);
        return snapshot.docs.length > 0 ? snapshot.docs[0].data() : null;
    }
}

export default firebaseService