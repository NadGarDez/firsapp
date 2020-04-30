import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,ImageBackground} from 'react-native';

export default class Ini extends Component{
	
	render(){
      const image = { uri: "https://static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<View style={{width:'100%',height:'4%', backgroundColor:'#053A88'}}>
						
					</View>
					
					<View style={{width:'100%',height:'96%',backgroundColor:'#1159BF'}}>
            <ImageBackground source={image} style={{width:'100%',height:'100%',display:'flex', justifyContent :'center', alignItems:'center',flexDirection:'row'}}>
              <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:40, color:'white'}}>Bienvenido</Text>
                <Text style={{fontSize:20, color:'white'}}>Aplicacion de Muestra</Text>

                <View style={{marginTop:5}}>
                  <Button    
                  onPress={()=>{this.props.callback('login',null)}}                    
                  title="Logn" 
                  style={{marginBottom:50}}         
                  /> 
                </View>

                
                <View style={{marginTop:5}}>

                <Button    
                  onPress={()=>{this.props.callback('registrar',null)}}                    
                  title="registrar" 
                  style={{marginTop:'50px'}}         
                /> 


                </View>

                
              </View>
            </ImageBackground>
					</View>
				</View>
			
			);
	}
}