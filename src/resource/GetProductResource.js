import axios, { AxiosResponse } from "axios";

export const getProductResource = (setProductListData) => {
  axios.get(`https://api.hyggefashion.shop/public/product`).then((response) => {
    setProductListData(response.data);
  })
}