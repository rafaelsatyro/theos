import styled from 'styled-components/native';

export const Main = styled.View` 
   display:flex;
   background-color:black;
   font-family:'Inter-Regular';
`;
export const Container = styled.View` 
    background-color:black;
    display:flex;
    flex-direction:column;
    height:50%
`;
export const ContentContainer = styled.View` 
    display:flex;
    flex-direction:column;
    padding: 4% 5% 2% 5%;
    height:50%;
    background-color:#F8FAFC;
`;
export const Title = styled.Text` 
    font-size:48px;
    font-weight:700;
    color:#F8FAFC;
    line-height:78px;
    padding: 25px 0 0 25px;
`;
export const ContainerEmail = styled.View` 
    display:flex;
    width:100%;
`;
export const ContainerSenha = styled.View` 
    display:flex;
    width:100%;
    padding: 0 0 25% 0;
`;
export const TextEmail = styled.Text` 
   font-size:15px;
   padding: 20px 0 10px 2px;
   color:black;
   font-family:'Inter';
`;
export const Input = styled.TextInput` 
   font-size:12px;
   border: 5px solid black;
   color:black;
   width:100%;
`;
export const ContainerButton = styled.View` 
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
export const AcessButton = styled.TouchableOpacity` 
  width:100%;
  background-color:#3B82F6;
  color: white;
  height: 48px;
  border-radius:20px;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;
export const TextAcessButton = styled.Text` 
   font-size:20px;
   color:#F8FAFC;
   align-items:center;
   display:flex;
   justify-content:center;
   text-align:center;
   font-weight:700;
   line-height:24.2px;
`;

