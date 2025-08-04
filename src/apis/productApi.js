import axios from "axios";

// url
const productURL = "https://dummyjson.com/products";
// get
const getProduct = async () => {
  try {
    const res = await axios.get(productURL);
    // console.log(res.data.products);
    const result = res.data.products;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// export
export { getProduct };
