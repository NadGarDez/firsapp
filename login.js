   import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,Dimensions,StatusBar} from 'react-native';
import ini from "./fechManager.js";

export default class Ini extends Component{


  constructor(props){
    super();

    this.state={

      'tamanos':{
        'margenSuperior':0,
        'cuerpo':0
      },

      'correo':'',
      'contracena':''

    }//////

    this.calcularTamanos= this.calcularTamanos.bind(this);

    var obj = this.calcularTamanos();

    this.state.tamanos.margenSuperior= obj.margenSuperior;
    this.state.tamanos.cuerpo = obj.cuerpo;
    this.enviar = this.enviar.bind(this);
    //c

  }   
  enviar(){

    if((this.state.correo!='')&&(this.state.contracena!='')){
      var data ='correo='+this.state.correo+"&contracena="+this.state.contracena;
      console.log(data);
      ini("http:\//167.71.173.198:3000/login",true,null,data,'post','json',
      (data)=>{
       ///root@167.71.173.198:3000/proyects/serverFirsapp
              
        console.log(data.id);
        
        if(data.id){
          this.props.actualizarCredenciales(data.id,data.roll);
          this.props.callback('dashboard','');
          console.log('login valido');

        }

        else{

          console.log('login invalido');

        }

        /*
        if(data.validado==true){//condicional que evaluara si el registro fue exitoso

          Alert.alert('Validado exitosamente');

          this.props.actualizarUser();
          this.props.callback('dashboard',{nombreUser:'Pedro'});

        }*/
        
        
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
	
	render(){
      const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#053A88" translucent = {true}/>
					<ScrollView>
  					<View style={{width:'100%',height:600,backgroundColor:'#1159BF'}}>
                <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
                  <TouchableOpacity onPress={()=>{this.props.callback('ini',null);}} >
                    <View style={{disply:'flex',flexDireccion:'row', marginTop:20}}>
                      <Text style={{color:'white',fontSize:20}}>Retroceder</Text>
                    </View>
                  </TouchableOpacity>
  						
                  <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                    <Text style={{fontSize:35, color:'white'}}>Iniciar Secion</Text>
                    
                  </View>
                  <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                  
                    <TextInput 
                      style ={estiloInput}
                      
                      placeholder ="Nombre de usuario o correo"

                      onChangeText={(data)=>{

                        this.state.correo=data;
                        this.forceUpdate();

                      }}

                    />
                    <TextInput 
                      style ={estiloInput}
                      secureTextEntry={true}
                      placeholder ="Contraceña"

                      onChangeText={(data)=>{

                        this.state.contracena=data;
                        this.forceUpdate();


                      }}
                    />
                    
                    <Button 
                      
                      style={{marginBottom:10}}
                      title="Enviar"
                      onPress={()=>{
                        this.enviar();
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