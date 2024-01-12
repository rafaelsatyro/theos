import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, Text, ScrollView , StyleSheet, View} from "react-native";
import { MainDashboard, FirstContainer, TitleDashboard, BackButton, TitleContainer, ButtonContainer, MovieContainer, MovieContainerContent, TitleMovieDashboard, MovieTitleContainer, MovieInformationsContainer, TitleDirector, TitleReleaseDate, CollapsedView, MovieDescriptionContent, ButtonCollapsedContainer, BlackBackButton, ContainerMainDashboard, Main, FirstSectionContainer, SecondSectionContainer, ContentMovieInformations, TitleMovies, TitleMoviesDirector, CollapsedContentContainer, OpenedDescription, BlackButtonContainer, LoadingContainer, LoadingImage} from "../styled/styled";
import axios from 'axios'
import Accordion from "react-native-collapsible/Accordion";

interface Movies {
    title:string;
    descricao:string,
    ano_lancamento:string;
    produtor:string;
    id: number;
};

export default function Dashboard({navigation}){
    const [movies, setMovies] = useState<Movies[]>([]);
    const [ activeSections, setActiveSections ] = useState<any>([]);
     
    const getMovies = async () => {
        const {data}:any = await axios.get('http://swapi.dev/api/films/');
        const movies:Movies[] = data.results.map((data:any, index) => {
         return {
            title: data.title,
            descricao: data.opening_crawl,
            ano_lancamento: data.release_date,
            produtor: data.director,
            id: index
           }
         })
        setMovies(movies)
    }

    useEffect(() => {
        getMovies();
    },[])

    const voltar = () => {
        navigation.goBack();
    }

    function renderHeader(section, _, isActive) {
        return (
            <>
                <ContainerMainDashboard>
                    <SecondSectionContainer>
                        <TitleMovies>{section.title}</TitleMovies>
                        <ContentMovieInformations>
                            <TitleMoviesDirector>{section.produtor}</TitleMoviesDirector>
                            <TitleReleaseDate>{section.ano_lancamento}</TitleReleaseDate> 
                        </ContentMovieInformations>
                    </SecondSectionContainer>
                </ContainerMainDashboard>
            </>
        );
      };
    
      function renderContent(section, _, isActive) {
        return (
            <>
            <CollapsedContentContainer style={styles.container}>
                <OpenedDescription>{section.descricao}</OpenedDescription>
                <BlackButtonContainer>
                    <BackButton onPress={()=>voltar()} >
                        <Image source={require('../assets/images/back-button-black.png')}/>
                    </BackButton>
                </BlackButtonContainer>
            </CollapsedContentContainer>
            </>
        );
      }

    return(
        <>
            <ContainerMainDashboard>
                <FirstSectionContainer>
                        <TitleDashboard>Star Wars{'\n'}Movies</TitleDashboard>
                        <BackButton onPress={()=>voltar()} >
                            <Image source={require('../assets/images/back-button.png')}/>
                        </BackButton>
                </FirstSectionContainer>
                {movies.length ?   
                <ScrollView> 
                    <Accordion
                        align="bottom"
                        sections={movies}
                        activeSections={activeSections}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        onChange={(sections) => setActiveSections(sections)}
                    />
                </ScrollView> : 
                 <>
                    <LoadingContainer>
                        <LoadingImage source={require('../assets/images/loading.png')}/>
                    </LoadingContainer>
                </> 
                }  
            </ContainerMainDashboard>                                         
        </>
     )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:8
    }
});

