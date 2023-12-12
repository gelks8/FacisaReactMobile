import app from '../firebaseConfig';
import { collection, getFirestore, addDoc, getDocs } from 'firebase/firestore/lite'

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
    }
}

export default firebaseService