import React, { useEffect, useState } from 'react';
import { List } from './styles'
import PetPost from '../PetPost';
import env from '../../local';

const BASE_URL = env.BASE_URL;
const API_KEY = env.API_KEY;

export const PostList = () => {
  const [posts , setPosts] = useState([])

  useEffect(function () {
    window.fetch(BASE_URL + 'post?page=1&limit=10', { method:'GET', headers: {
        'app-id': API_KEY
      }})
    .then(res => res.json())
    .then(response => { setPosts(response.data) })
  }, [])

  return (
    <List>
      { posts.map(post => <PetPost key={post.id} id={post.id} post={post} />) }
    </List>
  )
}