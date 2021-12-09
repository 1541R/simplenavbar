import { collection, doc, getDoc, getDocs, increment, query, setDoc, updateDoc, where } from '@firebase/firestore';
import db from '../utils/firebaseConfig';

export const fireStoreFetch = async (idCategory) => {


    console.log(idCategory);
    const q = query(collection(db, "products"), idCategory ? where('category.id', '==', idCategory) : where('stock', '!=', 0) );
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map( doc => ({
        id: doc.id,
        ...doc.data()   
    }) );
    console.log(dataFromFirestore);
    return dataFromFirestore;
    /*querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    }); */
} 

export const fireStoreDoc = async (idItem) => {
    const docRef = doc(db, 'products', idItem)
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return {id: docSnap.id, ...docSnap.data()}
    }

    return null;

}

export const fireStoreOrder = async (data) => {

    // Add a new document with a generated id
    const newOrder = doc(collection(db, "orders"));
    // later...
    await setDoc(newOrder, data);

    return newOrder;

}

export const fireStoreStock = async(item) => {
    
    const itemData = doc(db, "products", item.idItem);
    await updateDoc(itemData, {
        stock : increment(-item.quantityItem)
    });


}

//export default fireStoreFetch;