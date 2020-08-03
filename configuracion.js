import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,StatusBar} from 'react-native';
import FileSystem from 'react-native-filesystem';
import * as RNFS from 'react-native-fs';
import ImagePicker from 'react-native-image-picker';

import Base64 from './base64.js';
/*
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';*/
import ini from "./fechManager.js";

export default class Ini extends Component{


  constructor(props){
      super(props);

      this.state = {


      	'image':{

      		'uri':'https:\//www.google.com/url?sa=i&url=https%3A%2F%2Fes.dreamstime.com%2Fning%25C3%25BAn-icono-disponible-de-la-imagen-c%25C3%25A1mara-foto-plano-ejemplo-del-vector-image132483296&psig=AOvVaw24JbhPDx25mPpmH_VEOiMS&ust=1596505502634000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCNgs_0_eoCFQAAAAAdAAAAABAI',
      		'source':'',
      		'name':'',
      		'diferente':false
      	},

      	'contracena':{
	        'uno':'',
	        'dos':'',
	        'validado':false
      	},

      	'pila':''


      }

      this.enviar = this.enviar.bind(this);
      this.readFile= this.readFile.bind(this);

     
  }

  compararContracenas(){

      if(this.state.contracena.uno==this.state.contracena.dos){

        this.state.contracena.validado=true;
        this.forceUpdate();

        console.log('contracenas validadas');
      }

      else{
        this.state.contracena.validado=false;
        this.forceUpdate(); 

        console.log('contracenas no validadas');
        
      }

  }

  	readFile(direction) {

  		
  				RNFS.readFile(direction, 'ascii').then(res => {

  					this.state.image.source= res;
				    
				})
				.catch(err => {
				    
				    console.log(err.message, err.code);
				    
				});



  			


  		
  		

/*

	  const fileContents = await FileSystem.readFile(direction);
	    console.log(`read from file: ${fileContents}`);*/
	}


  enviar(){
  	var form = new FormData();
  	console.log(this.state.image.diferente);

  	if(this.state.image.diferente==true){

  		var photo = {
		    uri: this.state.image.uri,
		    type: 'image/jpeg',
		    name: this.state.image.name,
		};

  		form.append('nuevaFoto', photo);

  	}

  	if(this.state.contracena.validado==true){
  		form.append('nuevaContracena',this.state.contracena.uno);

  	}

  	else{

  		Alert.alert('las contracenñas no coinciden');
  	}

  	if(this.state.pila!=''){

  		form.append('nombrePila',this.state.pila);

  	}


  	console.log(form);
  


  }

  componentDidMount(){


      

  }

 
  
	
	render(){

            const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(

			<View>
					<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#053A88" translucent = {true}/>
					<ScrollView>
  					<View style={{width:'100%',height:800,backgroundColor:'#1159BF'}}>
                <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
                  <TouchableOpacity onPress={()=>{this.props.callback('ini',null);}} >
                    <View style={{disply:'flex',flexDireccion:'row', marginTop:20}}>
                      <Text style={{color:'white',fontSize:20}}>Retroceder</Text>
                    </View>
                  </TouchableOpacity>
  						
                  <View style={{width:'100%',height:'20%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                    <Text style={{fontSize:30, color:'white',width:200,textAlign:'center'}}>Configuracion de cuenta</Text>
                    
                  </View>
                  <View style={{width:'100%',height:'80%',display:'flex', justifyContent :'flex-start', alignItems:'center'}}>
                  	<View style={{marginBottom:20,width:'100%',display:'flex', justifyContent :'center', alignItems:'center'}}>
	                  	<Text style={{fontSize:20, color:'white'}}>Nombre de pila</Text>
	                    <TextInput 
	                      style ={estiloInput}
	                      
	                     

	                      onChangeText={(data)=>{

	                        this.state.pila=data;
	                        this.forceUpdate();

	                      }}

                    	/>

                    </View>

                    <View style={{marginBottom:20,width:'100%',display:'flex', justifyContent :'center', alignItems:'center'}}>
	                  	<Text style={{fontSize:20, color:'white'}}>Contraceña</Text>
	                    <TextInput 
	                      style ={estiloInput}
	                      
	                      placeholder ="contracena"

	                      onChangeText={(data)=>{

							this.state.contracena.uno=data;
	                        this.forceUpdate();

	                        this.compararContracenas();


	                      }}

                    	/>

                    	<TextInput 
	                      style ={estiloInput}
	                      
	                      placeholder ="repetir contracena"

	                      onChangeText={(data)=>{

	                        this.state.contracena.dos=data;
	                        this.forceUpdate();

	                        this.compararContracenas();

	                      }}

                    	/>

                    </View>

                    <View style={{marginBottom:20,width:'100%',display:'flex', justifyContent :'center', alignItems:'center'}}>
	                  	<Text style={{fontSize:20, color:'white'}}>Foto de perfil</Text>
	                  	<Image source={{uri: this.state.image.uri}} style={{width:30,height:30}} >
                    </Image>
	                    <TouchableOpacity style={{marginTop:5 }}
	                    	onPress={

	                    		()=>{

	                    			const options = {
									  title: 'Select Avatar',
									  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
									  storageOptions: {
									    skipBackup: true,
									    path: 'images',
									  },
									};

									ImagePicker.showImagePicker(options, (response) => {
									 
									  if (response.didCancel) {
									    console.log('User cancelled image picker');
									  } else if (response.error) {
									    console.log('ImagePicker Error: ', response.error);
									  } else if (response.customButton) {
									    console.log('User tapped custom button: ', response.customButton);
									  } else {
									    
									    this.state.image.uri= response.uri;
									     this.state.image.name= response.fileName;

									    console.log(response.data);

									  //this.readFile(response.path);

									 //  console.log(blob);
									    
									   
									    this.state.image.diferente= true;
									    this.forceUpdate();
									  }
									});



	                    			

	                    		}

	                    	}
	                    >
	                      <View style ={estiloInput}>
	                        <Text style={{fontSize:15, color:'white'}}>Escojer</Text>
	                      </View>
	                    
	                    </TouchableOpacity>

                    </View>
                    
                    
                    <Button 
                      
                      style={{marginBottom:10}}
                      title="Enviar"
                      onPress={()=>{
                        this.enviar();
                      }}
                      
                    
                    />
                    
                    
                    
                  </View>
                
                  
                </ImageBackground>
  					</View>
          </ScrollView>
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