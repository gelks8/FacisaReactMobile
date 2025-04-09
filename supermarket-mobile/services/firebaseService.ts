import app from '../firebaseConfig';
import { collection, getFirestore, addDoc, getDocs, query, where, updateDoc, arrayUnion, doc } from 'firebase/firestore/lite'

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
    },
    updateUserPurchaseHistory: async (email: string, purchase: any) => {
        const usersRef = collection(firestore, 'Users');
        const q = query(usersRef, where('formEmail', '==', email));
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) throw new Error('Usuário não encontrado');
        
        const userDoc = snapshot.docs[0];
        const userRef = doc(firestore, 'Users', userDoc.id);
        
        await updateDoc(userRef, {
            purchaseHistory: arrayUnion(purchase)
        });
    }
}

export default firebaseService