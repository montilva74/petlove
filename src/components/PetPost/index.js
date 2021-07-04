import React from 'react';
import { PostItem, UserWrapper, UserImg, UserName, Img, ImgWrapper, Button, PostTags } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';
import ModalExample from '../ModalExample'

const PetPost = ({ id, post }) => {

    let date = new Date(post.publishDate);

    return (
        <PostItem>
            <UserWrapper>
                <UserImg src={post.owner.picture} />
                <UserName> 
                    <ModalExample buttonLabel={post.owner.firstName + " " + post.owner.lastName}  
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
                { post.tags.map( tag => <a href="#"> #{tag} </a>)}
            </PostTags>
            { post.comments } Comments
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