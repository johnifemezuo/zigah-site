/* eslint-disable no-undef */
import { BASE_URL } from "../api/apis";

// -----------Hook Data Fetcher-----------
// await axios.get(`${BASE_URL}/api/${path}/?populate[projects][populate]=%2A

// const res = await axios.get(`${BASE_URL}/api/${"homepage"}/?populate=*`);

export const fetchData = async (url: string) => {
  // let response;

  // try {
  //   const req = await axios.get(`${BASE_URL}/api/${url}?populate=%2A`);
  //   response = req.data.data;
  // } catch (error) {
  //   console.log(error);
  // }

  // return response;
};



// export async function usePolicy() {
//   return await axios
//     .get(`${BASE_URL}/api/privacy-policy?populate=*`)
//     .then((response) => response.data.data);
// }

// export async function useFetch(url: string) {
//   useEffect((): any => {
//     try {
//       return axios
//         .get(`${BASE_URL}/api/${url}?populate=%2A`)
//         .then((res) => res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
// }
