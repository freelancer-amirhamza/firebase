import  { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDB } from '../../utils/FirebaseConfig';

function MyState(props) {

    const [products, setProducts] = useState({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const [allProducts, setAllProducts] = useState([]);

    //* Add Product Function
    const addProduct = async () => {
        if (products.title == "" || products.price == "" || products.imageUrl == "" || products.description == "") {
            return alert('All Field are required!');
        }
        const productRef = collection(fireDB, "products")
        try {
            await addDoc(productRef, products,)
            getProducts();
            alert("Product added successfully")
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
            setProducts("")
        } catch (error) {
            console.log(error)
        }
    }




    // * Get Products Function
    const getProducts = async () => {
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time"),
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setAllProducts(productsArray)
            });
            return () => data;
        } catch (error) {
            console.log(error)
        }
    }


    // Edit Product function
    const editProductHandle = (item) => {
        setProducts(item)
    }


    // Edit Product handle

    const editProduct = async () => {
        try {
            await setDoc(doc(fireDB, "products", products.id), products);
            getProducts();
            alert("Product Updated Successfully!");
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
            setProducts("")
        } catch (error) {
            console.log(error)
        }
    }

//    delete product
    const deleteProduct = async (item) => {
        try {
            await deleteDoc(doc(fireDB, "products", item.id));
            getProducts();
            alert("Product deleted successfully!")
        } catch (error) {
            console.log(error)
        }
    }



    // filter function

    const [search, setSearch] = useState('');




    useEffect(() => {
        getProducts();
    }, []);

    return (
        <MyContext.Provider value={{ products, setProducts, addProduct, deleteProduct, 
        setAllProducts, editProduct, editProductHandle, allProducts,search, setSearch }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState