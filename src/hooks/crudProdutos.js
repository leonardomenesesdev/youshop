import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import {db} from '../services/firebase'
import {getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'

export function crudProdutos(){
    const [produtos, setProdutos] = useState([])
    const produtosCollection = collection(db, 'produtos')

    // src/hooks/useProducts.js
    const getProdutos = async () => {
  const data = await getDocs(produtosCollection);
  const productsArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));



  setProdutos(productsArray);
};
    async function createProduto(newProduto){
        await addDoc(produtosCollection, newProduto)
        getProdutos
    }
    async function updateProduto(idProduto, updatedProduct){
        const productDoc = doc(db, 'produtos', idProduto)
        await updateDoc(productDoc, updatedProduct)
        getProdutos()
    }
    async function deleteProduto(idProduto){
        const productDoc = doc(db, 'produtos', idProduto)
        await deleteDoc(productDoc)
        getProdutos()
    }
    useEffect(() => {
        getProdutos()
    }, [])
  return { produtos, getProdutos, createProduto, updateProduto, deleteProduto }; 

}