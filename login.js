import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';

export default class Ini extends Component{
	
	render(){
      const image = { uri: "https://static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<View style={{width:'100%',height:'4%', backgroundColor:'#053A88'}}>
						
					</View>
					
					<View style={{width:'100%',height:'96%',backgroundColor:'#1159BF'}}>
              <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
						
                <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                  <Text style={{fontSize:35, color:'white'}}>Iniciar Secion</Text>
                  
                </View>
                <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                
                  <TextInput 
                    style ={estiloInput}
                    
                    placeholder ="Nombre de usuario o correo"
                  />
                  <TextInput 
                    style ={estiloInput}
                    secureTextEntry={true}
                    placeholder ="Contraceña"
                  />
                  
                  <Button 
                    
                    style={{marginBottom:10}}
                    title="Enviar"
                    onPress={()=>{
                      this.props.callback('dashboard',{nombreUser:'Pedro'});
                    }}
                    
                  
                  />
                  
                  <TouchableOpacity style={{marginTop:5 }}>
                    <View>
                      <Text style={{fontSize:15, color:'white'}}>¿Olvido su contraceña?</Text>
                    </View>
                  
                  </TouchableOpacity>
                  
                </View>
              
                <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                  <Text style={{fontSize:20, color:'#053A88'}}>Nad Aplication</Text>
                  
                </View>
              </ImageBackground>
					</View>
				</View>
			
			);
	}
}



var estiloInput ={
	
	width :'80%',
	height: 50, 
	borderColor: 'white', 
	borderWidth: 2,
	borderBottomLeftRadius: 20, 
	borderBottomRightRadius: 20, 
	borderTopLeftRadius: 20, 
	borderTopRightRadius:20,
	marginBottom:10,
	color:'white',
	fontSize:15,
	padding:10
	
}