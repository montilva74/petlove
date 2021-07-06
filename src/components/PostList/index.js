import React, { useEffect, useState } from 'react';
import { List } from './styles'
import PetPost from '../PetPost';
import env from '../../local';

const BASE_URL = env.BASE_URL;
const API_KEY = env.API_KEY;

export const PostList = () => {
  const [posts , setPosts] = useState([])
  const [tag, setTag] = useState("");

  // Llama a la api y el resultado lo pone en Posts
  const callApi = (url) => {
    window.fetch(url, { method:'GET', headers: { 'app-id': API_KEY }})
          .then(res => res.json())
          .then(response => { setPosts(response.data) })
  }

  // Al cargar la pagina
  useEffect(function () {
    callApi(BASE_URL + 'post?page=1&limit=10')  // Post normales
  }, [])

  const handleTag = (e) => {
    e.preventDefault();
    setTag(e.target.id);
    callApi(BASE_URL + 'tag/' + e.target.id + '/post') // Posts por Tag
  }

  const printTagName = () => {
    if (tag!== "") {
      return (<h5> Posts by #{tag} </h5>);
    }
  }

  return (
    <List key={posts}>
      { printTagName() }
      { posts.map(post => <PetPost key={post.id} id={post.id} post={post} handleTag={ handleTag } />) }
    </List>
  )
}