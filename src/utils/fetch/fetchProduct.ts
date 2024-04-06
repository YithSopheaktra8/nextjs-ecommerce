import { BASE_URL } from "@/constants/constants";

const fetchProductList = async (e : string) => {
    const response = await fetch(
        `${BASE_URL}products/?page_size=${e}`
    );
    const data = await response.json();
    return data;
};

export default fetchProductList;