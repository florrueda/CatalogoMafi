import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import CreateProduct from './CreateProduct'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CreateProductContainer = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        description:'',
        price: "",
        size: '',
        stock: "",
        category:'',
        img: "",
      });
    
      const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        e.preventDefault();
        let dataProduct = {
          name: newProduct.name,
          description: newProduct.description,
          price: Number(newProduct.price),
          size: newProduct.size,
          stock: Number(newProduct.stock),
          category: newProduct.category,
          img: newProduct.img,
        };

        let refCollection = collection(db, "products")
        addDoc(refCollection, dataProduct).then().catch((error) => console.log(error))
        navigate('/products')
      };
    
      const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
      };

    return (
        <div>
            <CreateProduct handleChange={handleChange} handleSubmit={handleSubmit}></CreateProduct>
        </div>
    );
}

export default CreateProductContainer;
