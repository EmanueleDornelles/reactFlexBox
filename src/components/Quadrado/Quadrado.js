import React from "react";
import { View, StyleSheet } from "react-native";

const QuadradoPequeno =(props)=>{
    const{cor}=props;
    return(
        <View style={{...style.pequeno,width:undefined,
            backgroundColor:`${cor}`}}/>
    );
}

const QuadradoMedio =()=>{
    return(
        <View style={{...style.pequeno,
            backgroundColor:'red'}}/>
    );
}

const QuadradoGrande =()=>{
    return(
        <View style={{...style.pequeno,
            backgroundColor:'green'}}/>
    );
}

const Quadrado = () =>{

    return(
        <View style={style.container}>
            <QuadradoPequeno cor ={'blue'}/>
            <QuadradoPequeno cor ={'red'}/>
            <QuadradoPequeno cor={'green'}/>
            
        </View>
    )

}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:'stretch'

    },
    pequeno:{
        width:50,
        height:50,
    }
})
export default Quadrado;
