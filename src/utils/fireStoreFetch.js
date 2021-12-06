import { collection, doc, getDoc, getDocs, query, where } from '@firebase/firestore';
import db from '../utils/firebaseConfig';

const fireStoreFetch = async (idCategory) => {


    console.log(idCategory);
    const q = query(collection(db, "products"), idCategory ? where('category.id', '==', idCategory) : where('stock', '!=', 0) );
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map( doc => ({
        id: doc.id,
        ...doc.data()   
    }) );

    return dataFromFirestore;
    /*querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    }); */
} 

export const fireStoreDoc = async (idItem) => {
    const docRef = doc(db, 'products', idItem)
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data()
    }

    return null;

}

export default fireStoreFetch;