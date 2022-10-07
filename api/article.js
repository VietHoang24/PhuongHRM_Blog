import { useQuery, useMutation, useInfiniteQuery, QueryClient } from '@tanstack/react-query'
import axios from 'axios'
const LIMIT = 18;
export const articleEnpoint = 'http://localhost:3333/articles'

export const getArticleStatic = (params) =>{
  let endpoint=articleEnpoint
  if(params?.id) endpoint=`${articleEnpoint}/${params.id}`

  const response = fetch(endpoint,{ method: 'GET',})
  .then((response) => { return response.json() })
  .then((data) => {
    return data
  })
  return response;
}
export const getArticleId= async ()=>{
  const posts= await getArticleStatic()
  let articleId=[]
    if (posts){
    articleId = posts?.map(item=>({
    params:{
        id: [`${item._id}`],
    }
  }))
}
 return articleId
}
// () => axios.get(articleEnpoint).then((response) => { return response})
export const getArticle = () => {
  return useQuery(['get-articles1'],()=>getArticleStatic(), {
    refetchOnWindowFocus: false,
  })
}
export const useInfArticles = () =>
  useInfiniteQuery(
    ['get-articles'],
    () => fetch(articleEnpoint,{ method: 'GET',})
  .then((response) => { return response.json() }).then((data) => {
    return data
  }),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.length < LIMIT ? undefined : allPages?.length * LIMIT,
    },
  );
export const useInfGetArticleById = (id) =>
  useInfiniteQuery(
    ['get-articles-by-id'],
    () => fetch(`${articleEnpoint}/${id}`,{ method: 'GET',})
  .then((response) => { return response.json() }).then((data) => {
    return data
  }),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.length < LIMIT ? undefined : allPages?.length * LIMIT,
    },
  );


export const addArticleRequest = ({ onSuccess, onError }) => {
  return useMutation(
    (body) => {
      return axios
        .post(articleEnpoint, body)
        .then((response) => response)
        .catch((err) => console.log('eror là: ', err))
    },
    {
      onError: onError,
      onSuccess: onSuccess,
    }
  )
}
export const deleteArticleRequest = ({ onSuccess, onError }) => {
  return useMutation(
    (body) => {
      return axios
        .delete(`${articleEnpoint}/${body?.id}`, { body })
        .then((response) => response)
        .catch((err) => console.log('eror là: ', err))
    },
    {
      onError: onError,
      onSuccess: onSuccess,
    }
  )
}

export const updateArticleRequest = ({ onSuccess, onError }) => {
  return useMutation(
    (body) => {
      return axios
        .patch(`${articleEnpoint}/${body?.id}`, body)
        .then((response) => response)
        .catch((err) => console.log('eror là: ', err))
    },
    {
      onError: onError,
      onSuccess: onSuccess,
    }
  )
}
