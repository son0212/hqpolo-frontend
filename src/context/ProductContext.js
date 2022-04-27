import {useState, createContext, useEffect } from "react";
import axios from "axios";


const Product = createContext();

const ProductProvider = ({children})=>{
  const [pathFileUploaded,setPathFileUploaded] = useState([]);
	const [inforProductBasic,setInforProductBasic] = useState({
		name:"",
		price:"",
		newPrice:"",
		dateUse:"",
		link:""
	});
	const [imgReplace,setImgReplace] = useState(null);
	const [amount, setAmount] = useState(1);
	const [hoverSlickSellingProduct,setHoverSlickSellingProduct] = useState(-1);
	const [hoverNewProduct,setHoverNewProduct] = useState(-1);
	const [listNewProduct,setListNewProduct] = useState();
  const [listSlickSellingProduct,setListSlickSellingProduct] = useState();
	const [paramProductNow,setParamProductNow] = useState();

	useEffect(()=>{
    const fetchData = () =>{
      axios.get('http://localhost:4000/get-products/selling-product').then(res=>{
				const data = res.data.splice(8);
				setListSlickSellingProduct(res.data);
        setListNewProduct(data)

      }).catch(err=>{
        console.log(`error in axios.get ${err}`);
      })
    }
    fetchData();
  }, []);

  return(
    <Product.Provider value={{pathFileUploaded,
      setPathFileUploaded,
      inforProductBasic,
      setInforProductBasic,
      imgReplace,
      setImgReplace,
      amount,
      setAmount,
      hoverSlickSellingProduct,
      setHoverSlickSellingProduct,
      listSlickSellingProduct,
      setListSlickSellingProduct,
      hoverNewProduct,
      setHoverNewProduct,
      listNewProduct,
      setListNewProduct,
      paramProductNow,
      setParamProductNow}}>
      {children}
    </Product.Provider>
  )
}

export {Product,ProductProvider};