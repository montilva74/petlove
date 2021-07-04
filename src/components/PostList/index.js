import React, { useEffect, useState } from 'react';
import { List } from './styles'
import PetPost from '../PetPost';

const BASE_URL = 'https://dummyapi.io/data/api/';
const API_KEY = '60e1eb1e8ec338341fc859d7';

export const PostList = () => {
  const [posts , setPosts] = useState([])

  useEffect(function () {
    window.fetch(BASE_URL + 'post', { method:'GET', headers: {
        'app-id': API_KEY
      }})
    .then(res => res.json())
    .then(response => {
        response.data.map( post => {
          window.fetch(BASE_URL + 'post/' + post.id + '/comment', { method:'GET', headers: {
            'app-id': API_KEY
          }})
          .then(r => r.json())
          .then(r => post.comments = r.data.length)
        })
        
        setPosts(response.data)
    })
  }, [])

  return (
    <List>
      { posts.map(post => <PetPost key={post.id} id={post.id} post={post} />) }
    </List>
  )
}