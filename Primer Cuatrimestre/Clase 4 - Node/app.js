import movies from "./db/data.js"; //Modulo propio
// import dayjs from "dayjs"; //Modulo externo
import axios from "axios"; //Modulo externo

for (let index = 0; index < movies.length; index++) {
  //console.log(movies[index].name)
}
//console.log(dayjs(new Date()).add(2, 'year'))
//console.log('hola nodemona')
//https://maimo-prog-2023-exam-dic-backend.vercel.app/questions

const getData = async () => {
  try {
    const response = await axios.get(
      `https://maimo-prog-2023-exam-dic-backend.vercel.app/questions`
    );
    console.log(response.data)
  } catch (error) {
    console.log('ERRRRRRROOOOOOOOR', error.response.statusText);
  }
};

// const getData2 = () => {
//   const response = axios
//     .get(`url`)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .then(() => {
//       console.log("hola");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

getData();
