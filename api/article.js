import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
const articleEnpoint = 'http://localhost:3333/articles'

export const getArticleStatic = () => axios.get(articleEnpoint)
.then((response) => { return JSON.stringify(response) })

// () => axios.get(articleEnpoint).then((response) => { return response})
export const getArticle = () => {
  return useQuery(['get-articles'], () => axios.get(articleEnpoint)
  .then((response) => { return response }), {
    refetchOnWindowFocus: false,
  })
}
  
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
