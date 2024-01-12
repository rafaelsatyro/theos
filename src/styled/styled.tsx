import styled from 'styled-components/native';

export const Main = styled.View` 
   display:flex;
   background-color:black;
   font-family:'Inter-Regular';
`;
export const MainDashboard = styled.View` 
   flex:1;
   background-color:#0F172A;
   font-family:'Inter-Regular';
`;
export const FirstContainer = styled.View` 
   display:flex;
   flex-direction:row;
   flex: 1;
`;
export const TitleContainer = styled.View` 
   display:flex;
   flex-direction:row;
   width:70%;
`;
export const ButtonContainer = styled.View` 
   display:flex;
   flex-direction:row;
   justify-content:center;
   width:30%;
   padding: 5% 0 0 5%;
`;
export const ButtonCollapsedContainer = styled.View` 
   display:flex;
   flex-direction:row;
   justify-content:end;
   padding-right:15px;
`;
export const MovieContainer = styled.View` 
    display:flex;
    flex-direction:column;
    padding: 5%;
    height:'100%';
`;
export const MovieContainerContent = styled.View` 
    display:flex;
    background-color:#F8FAFC;
    width:100%;
    border-radius:5px;
    height:97px;
`;
export const TitleMovieDashboard = styled.Text` 
    font-size:24px;
    font-weight:700;
    color: #0F172A;
`;
export const MovieTitleContainer = styled.View` 
    display:flex;
    flex-direction:row;
    padding-top:15px;
    padding-left:15px;
`;
export const MovieInformationsContainer = styled.View` 
    display:flex;
    flex-direction:row;
    padding-top:15px;
    justify-content:space-between;
    padding-left:15px;
    padding-right:15px;
`;
export const TitleDirector = styled.Text` 
    font-size:14px;
    font-weight:700;
    color: #475569;
`;
export const CollapsedView = styled.View` 
    display:flex;
    height:100%;
    background-color:#F8FAFC;
    padding:15px;
    flex-direction:column;
`;
export const MovieDescriptionContent = styled.Text` 
    font-size:16px;
    font-weight:700;
    color: black;
`;
export const ButtonVoltar = styled.Button` 
    background-color:black;
    display:flex;
    flex-direction:column;
    height:50%
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
export const TitleDashboard = styled.Text` 
    font-size:48px;
    font-weight:700;
    color:#F8FAFC;
    line-height:78px;
    padding: 0 0 0 5%;
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
export const BackButton = styled.TouchableOpacity` 
    width:100%;
    display:flex;
    padding: 25px 0 0 20%;
`;
export const BlackBackButton = styled.TouchableOpacity` 
    width:100%;
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
export const ContainerMainDashboard = styled.View` 
    flex:1;
    background-color:#0F172A;
    display:flex;
    padding: 2% 0 2% 0;
`;
export const FirstSectionContainer = styled.View` 
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    padding: 0 0 10% 0;
`;
export const SecondSectionContainer = styled.View` 
    display:flex;
    background-color:white;
    height:97px;
    border-radius:8px;
    flex-direction:column;
    margin: 0 5% 0 5%;
`;
export const ContentMovieInformations = styled.View` 
    display:flex;
    background-color:white;
    border-radius:8px;
    flex-direction:row;
    padding: 0 5% 0 5%;
    justify-content:space-between;
`;
export const TitleMovies = styled.Text` 
    color:#0F172A;
    padding: 5% 0 0 5%;
    font-size:24px;
    font-weight:700;
`;
export const TitleMoviesDirector = styled.Text` 
    color:'black';
    font-size:14px;
    font-weight:700;
    padding: 3% 0 0 0;
`;
export const TitleReleaseDate = styled.Text` 
    font-size:20px;
    font-weight:700;
    color: #475569;
    padding: 2% 0 0 0;
`;
export const CollapsedContentContainer = styled.View` 
    display:flex;
    flex-direction:column;
    background-color:white;
    margin: 0 5% 0 5%;
    padding:5%;
`;
export const OpenedDescription = styled.Text` 
    font-size:16px;
    font-weight:700;
    color:#000000;
`;
export const BlackButtonContainer = styled.View` 
    margin: 0 0 0 80%;
`;
export const LoadingContainer = styled.View` 
    flex: 1;
    justifyContent:center;
    alignItems:center;
`;
export const LoadingImage = styled.Image` 
    margin: 0 0 25% 0;
`;












