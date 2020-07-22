import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';
import FileSystem from 'react-native-filesystem';
/*
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';*/
import ini from "./fechManager.js";

export default class Ini extends Component{


  constructor(props){
      super(props);

     
  }

  componentDidMount(){


      

  }

 
  
	
	render(){

      
			return(
				<View style={{width:'100%',height:'100%'}}>
					<Text>Hola mundo</Text>
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