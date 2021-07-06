import styled from 'styled-components';

export const PostItem = styled.div`
  display: block;
  width: 100%; 
  margin: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
`

export const UserWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
`

export const UserImg = styled.img`
  height: 40px ;
  object-fit: cover;
  border-radius: 50%;
`

export const UserName = styled.div`
  color: #222;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  color: #222;
  & svg {
    margin-right: 4px;
  }
`

export const PostTags = styled.div`
  & a {
    text-decoration: none;
    color: #222;
  }
`
