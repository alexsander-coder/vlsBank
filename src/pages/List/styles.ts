import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
/* background-color: red; */
`;

export const Filters = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: -15px 0 40px 0;

.tag-filter{

  font-size: 18px;
  font-weight: 500;
  background-color: white;
  color: black;
  margin: 0 10px;
  padding: 2px;

  transition: opacity .8s;

  &:hover {
    opacity: .5;
  }

  &::after {
    content: '';
    display: block;
    width: 38px;
    margin: 0 auto;
    border-radius: 2px;
  }
}

.tag-filter-entry::after{
  content:'';
    display: block;
    width: 36px;
    margin: 0 auto;
    border-bottom: 6px solid green;
    box-shadow: 0px 0px 5px 1px rgb(149, 255, 149);

}

.tag-filter-exit::after{
  content:'';
    display: block;
    width: 36px;
    margin: 0 auto;
    border-bottom: 6px solid red;
    box-shadow: 0px 0px 5px 1px rgb(255, 162, 162);
}
`;