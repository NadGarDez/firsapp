import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,ImageBackground,StatusBar} from 'react-native';

export default class Ini extends Component{

  contructor(){
    
  }
	
	render(){
      const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(

				<View style={{width:'100%',height:'100%'}}>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#053A88" translucent = {true}/>
					<View style={{width:'100%',height:'100%',backgroundColor:'#1159BF'}}>
            <ImageBackground source={image} style={{width:'100%',height:'100%',display:'flex', justifyContent :'center', alignItems:'center',flexDirection:'row'}}>
              <View style={{display:'flex',flexDirection:'column',width:'100%',justifyContent :'center',alignItems:'center'}}>
                <Text style={{fontSize:40, color:'white'}}>Bienvenido</Text>
                <Text style={{fontSize:20, color:'white'}}>App en Construccion</Text>

                <View style={{marginTop:5,width:180}}>
                  <Button    
                  onPress={()=>{this.props.callback('login',null)}}                    
                  title="Logn" 
                  style={{marginBottom:50}}         
                  /> 
                </View>

                
                <View style={{marginTop:5, width:180}}>

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