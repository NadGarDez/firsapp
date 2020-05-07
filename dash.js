import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';

export default class Ini extends Component{
	
	render(){
    const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<View style={{width:'100%',height:'4%', backgroundColor:'#1159BF'}}>
						
					</View>
					
					<View style={{width:'100%',height:'96%',backgroundColor:'#1159BF'}}>
						<ImageBackground source={image} style={{width:'100%',height:'100%'}}>
						
							<View style={{width:'100%',height:'32%',display:'flex',justifyContent :'center', alignItems:'center'}}>
								<Text style={{fontSize:35, color:'#E9E9FF'}}>Hola {this.props.nombreUser}</Text>
								
							</View>
							<View style={{width:'100%',height:'32%', display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                  <TouchableOpacity style={cajaCategorias}>
                    <View >
                          <Text style={textCategoria}>Categoria 1</Text>
                    </View>
                  </TouchableOpacity>  
                  <TouchableOpacity style={cajaCategorias}>
                    <View >
                          <Text style={textCategoria}>Categoria 2</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={cajaCategorias}>
                    <View >
                          <Text style={textCategoria}>Categoria 3</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={cajaCategorias}>
                    <View >
                          <Text style={textCategoria}>Categoria 4</Text>
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


var cajaCategorias={
  display:'flex', 
  justifyContent :'center', 
  alignItems:'center',
  marginLeft:'2.5%',
  marginRight:'2.5%',
  marginTop:'2.5%',
  width:'45%',
  height:'42%',
  backgroundColor:'white',
  color:'#1159BF',
  boxShadow:'5px 5px 5px 5px rgba(5,58,136,0.5)'
}

var textCategoria={
  
  fontSize:20, 
  color:'#1159BF'
}