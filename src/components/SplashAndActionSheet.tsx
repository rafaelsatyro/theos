import React from "react";
import {  TextInput, StyleSheet, Text } from "react-native";
import { Container, ContentContainer, TextEmail, Title, AcessButton, ContainerButton, TextAcessButton, ContainerEmail, ContainerSenha, Main} from "../styled/styled";

import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email("Email inválido").required("Informe o seu e-mail"),
    password: yup.string().min(6,"A senha deve ter pelo menos 06 dígitos").required("Informe sua senha")
})
export default function SpAcSheet(){
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleSignIn(data){
        console.log(data);
    }

    return(
        <>
            <Main> 
                <Container>
                    <Title>Star Wars{'\n'}Movies</Title>
                </Container>
                <ContentContainer style={styles.container}>
                        <ContainerEmail>
                            <TextEmail>Email</TextEmail>
                            <Controller
                                control={control}
                                name="email"
                                render={({field:{onChange, onBlur, value} })=> (
                                    <TextInput 
                                        placeholder="Digite o seu email"
                                        onBlur={onBlur}//chamado quando o input é acessado
                                        style={styles.input}
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            {errors.email && <Text style={styles.errors}>{errors.email?.message}</Text>}
                        </ContainerEmail>
                        <ContainerSenha>
                            <TextEmail>Senha</TextEmail>
                            <Controller
                                control={control}
                                name="password"
                                render={({field:{onChange, onBlur, value} })=> (
                                    <TextInput 
                                        placeholder="Digite a sua senha"
                                        onBlur={onBlur}//chamado quando o input é acessado
                                        style={styles.input}
                                        value={value}
                                        onChangeText={onChange}
                                        secureTextEntry={true}
                                    />
                                )}
                            /> 
                            {errors.password && <Text style={styles.errors}>{errors.password?.message}</Text>}
                            
                        </ContainerSenha>
                        <ContainerButton>
                            <AcessButton onPress={handleSubmit(handleSignIn)}><TextAcessButton>Acessar</TextAcessButton></AcessButton>
                        </ContainerButton> 
                </ContentContainer>
            </Main>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
    },
    input:{
        borderWidth:2,
        borderRadius:15,
        paddingLeft:15,
        borderColor:'#475569'
    },
    errors:{
        color:'red'
    }
});