import React, { useState, useEffect } from 'react';
import { PostItem, UserWrapper, UserImg, UserName, Img, ImgWrapper, Button, PostTags } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';
import ModalUser from '../ModalUser';
import ModalComment from '../ModalComment';
import env from '../../local';

const BASE_URL = env.BASE_URL;
const API_KEY = env.API_KEY;

const PetPost = ({ id, post }) => {

    let date = new Date(post.publishDate);

    const [comments , setComments] = useState([])

    useEffect( function () {
        window.fetch(BASE_URL + 'post/' + post.id + '/comment', { method:'GET', headers: { 'app-id': API_KEY }})
              .then(res => res.json())
              .then(response => { setComments(response.data) })
        }, [])

    // Si en el post no tiene comentarios, no abre el modal.
    // let canComments = "";
    // if (comments.length > 0 ) {
    //     canComments =  <ModalComment className="modal" comments={comments} />
    // } else {
    //     canComments='0 Comments'
    // }

    return (
        <PostItem>
            <UserWrapper>
                <UserImg src={post.owner.picture} />
                <UserName> 
                    <ModalUser buttonLabel={post.owner.firstName + " " + post.owner.lastName}
                               className="modal" data={post.owner} />
                </UserName>
            </UserWrapper>
            
            <ImgWrapper>
                <Img src={post.image} alt="PetPost" />
            </ImgWrapper>
            
            {post.text}

            <Button>
                <MdFavoriteBorder size='20px'/>{ post.likes} likes!
            </Button>
            { formatDate(date) }
            <PostTags>
                { post.tags.map( tag => <a href="?tag=pitbull" key={tag.id}> #{tag} </a>)}
            </PostTags>

            <ModalComment className="modal" comments={comments} />

        </PostItem>
    )
}

function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return year + "-" + month + "-" + day;
}

export default PetPost;