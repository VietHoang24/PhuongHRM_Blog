import { useQuery,useMutation } from "@tanstack/react-query";
import axios from 'axios';
const articleEnpoint="http://localhost:3333/articles"
export   const  getArticle = () => {
  return useQuery(
    ['get-articles',],
    () =>
    axios.get(articleEnpoint)
    .then(response=>response),
    {
      refetchOnWindowFocus: false,
    },
  );
};
export const addArticleRequest = () => {
  return useMutation((body) => {
    return axios.post(articleEnpoint,body)
    .then(response=>response)
    .catch(console.log(err))
      
  }, {});
};

         
