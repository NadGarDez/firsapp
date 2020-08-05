import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,Dimensions,StatusBar} from 'react-native';

import ini from "./fechManager.js";

export default class Ini extends Component{

  constructor(props){
    super(props);
    this.state={

      'correo':{'texto':'','validado':false}, 
      'contracena':{
        'uno':'',
        'dos':'',
        'validado':false
      },
      'tamanos':{
        'margenSuperior':0,
        'cuerpo':0
      },

    }
    this.validarCorreo= this.validarCorreo.bind(this);
    this.compararContracenas= this.compararContracenas.bind(this);
    this.enviar= this.enviar.bind(this);
    this.isUnique= this.isUnique.bind(this);
    this.calcularTamanos= this.calcularTamanos.bind(this);
    
    var obj = this.calcularTamanos();

    this.state.tamanos.margenSuperior= obj.margenSuperior;
    this.state.tamanos.cuerpo = obj.cuerpo;
       
  }

  calcularTamanos(){
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    var retorno = {

      margenSuperior:0,
      cuerpo:0

    };

    retorno.margenSuperior = 4*height;
    retorno.margenSuperior = retorno.margenSuperior/100;
    retorno.margenSuperior=Math.trunc(retorno.margenSuperior);


    retorno.cuerpo = height-retorno.margenSuperior;
    

    return retorno;


  }

  validarCorreo(){
    console.log(this.state.correo.texto);
    if(this.state.correo.texto.length>7){
        this.isUnique();
        
        console.log('esta validao');

    }
    else{
        this.state.correo['validao']=false;
        this.forceUpdate();
        console.log('no esta validado');
    }
  }

  isUnique(){ // funcion para verificar que no haya un correo igual en los demas usuarios regitrados
    var unique = true;
    var data = "option=1&correo="+this.state.correo.texto;

    ini("http:\//167.71.173.198:3000/isUnique",true,null,data,'post','text',
      (data)=>{
        console.log(data);
        data = JSON.stringify(data);

        
        if(data.validado==true){//condicional que evaluara la respuesta del servidor 
          this.state.correo.validado=true;

        }
        else{
          this.state.correo.validado=true;
        }
        this.forceUpdate();
        
      }
      ,
      (error)=>{
        console.log(error)
        
      }
    );


    
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
    console.log(this.state.correo.validado);
    console.log(this.state.contracena.validado);
    if((this.state.correo.validado==true)&&(this.state.contracena.validado==true)){
      var data ='correo='+this.state.correo.texto+"&contracena="+this.state.contracena.uno;
      console.log(data);
      ini("http:\//167.71.173.198:3000/registrar",true,null,data,'post','json',
      (data)=>{
        console.log(data);

        
        if(data.registrado==true){//condicional que evaluara si el registro fue exitoso

          Alert.alert('registrado exitosamente. Ahora inicie secion');
          this.props.callback('login',null)

        }
        
        
      }
      ,
      (error)=>{
        console.log(error)
        
      }
    );
      

    }
    else{
      console.log('no entro');
    }

  }
	
	render(){

     
     
      const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#053A88" translucent = {true}/>
					
            <ScrollView>
  			       <View style={{width:'100%',height:600,backgroundColor:'#1159BF'}}>
                <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
                <TouchableOpacity onPress={()=>{this.props.callback('ini',null);}}>
                  <View style={{disply:'flex',flexDireccion:'row'}}>
                    <Text style={{color:'white',fontSize:20}}>Retroceder</Text>
                  </View>
                </TouchableOpacity>
  						
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
                      placeholder ="Contraseña"
                      onChangeText={(data)=>{

                        this.state.contracena.uno=data;
                        this.forceUpdate();

                        this.compararContracenas();


                      }}
                    />

                    <TextInput 
                      style ={estiloInput}
                      secureTextEntry={true}
                      placeholder ="confirmar contraseña"
                      onChangeText={(data)=>{

                        this.state.contracena.dos=data;
                        this.forceUpdate();

                        this.compararContracenas();


                      }}
                    />
                    
                    <Button 
                      
                      style={{marginBottom:10}}
                      title="Registrar"
                      onPress={()=>{
                        this.enviar();
                      }}
                      
                    
                    />
                    
                    
                    
                  </View>
                
                  <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                    <Text style={{fontSize:20, color:'#053A88'}}>Nad Aplication</Text>
                    
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

