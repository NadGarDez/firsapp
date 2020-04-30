import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';

import superFetch from "./fechManager.js";

export default class Ini extends Component{

  constructor(props){
    super(props);
    this.state={'correo':{'texto':'','validado':false}, 'contracena':{'uno':'','dos':'','validado':false}}
    this.validarCorreo= this.validarCorreo.bind(this);
    this.compararContracenas= this.compararContracenas.bind(this);
    this.enviar= this.enviar.bind(this);
    this.isUnique= this.isUnique.bind(this);
  }

  validarCorreo(){
    console.log(this.state.correo.texto);
    if((this.state.correo.texto.length>7)&&(this.isUnique()== true)){
        this.state.correo['validao']=true;
        this.forceUpdate();
        console.log('esta validao');

    }
    else{
        this.state.correo['validao']=true;
        this.forceUpdate();
        console.log('no esta validado');
    }
  }

  isUnique(){ // funcion para verificar que no haya un correo igual en los demas usuarios regitrados
    var unique = true;


    return unique;
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
  
  enviar(){
    if((this.state.correo.validado==true)&&(this.state.contracena.validado==true)){
      var url='';
      var data ={
        'method':'post',
        'body':JSON.stringify({'correo': this.state.correo.texto,'contracena' : this.state.contracena}),
        headers:{
          'Content-Type': 'application/json'
        }
      }
      fetch(url,data)
      .then(function(data){
        return data.json();
      })
      .then(
        function(data){
          if(data){
            this.props.callback('configuracioin',{'idUser':'1234'});

          }

        }
      )
      .catch(
        function(error){

          console.log('hubo un error '+error.message);
         

        }
      );

    }

  }
	
	render(){
      const image = { uri: "https://static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<View style={{width:'100%',height:'4%', backgroundColor:'#053A88'}}>
						
					</View>
					
					<View style={{width:'100%',height:'96%',backgroundColor:'#1159BF'}}>
              <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
						
                <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                  <Text style={{fontSize:35, color:'white'}}>Registrarse</Text>
                  
                </View>
                <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                
                  <TextInput 
                    style ={estiloInput}
                    
                    placeholder ="correo"
                    onChangeText={(data)=>{

                      this.state.correo.texto=data;
                      this.forceUpdate();

                      this.validarCorreo();


                    }}
                  />
                  <TextInput 
                    style ={estiloInput}
                    secureTextEntry={true}
                    placeholder ="Contraceña"
                    onChangeText={(data)=>{

                      this.state.contracena.uno=data;
                      this.forceUpdate();

                      this.compararContracenas();


                    }}
                  />

                  <TextInput 
                    style ={estiloInput}
                    secureTextEntry={true}
                    placeholder ="confirmar contracena"
                    onChangeText={(data)=>{

                      this.state.contracena.dos=data;
                      this.forceUpdate();

                      this.compararContracenas();


                    }}
                  />
                  
                  <Button 
                    
                    style={{marginBottom:10}}
                    title="Guardar"
                    onPress={()=>{
                      this.props.callback('configuracion',null);
                    }}
                    
                  
                  />
                  
                  
                  
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