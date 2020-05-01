import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,Dimensions} from 'react-native';

export default class Ini extends Component{


  constructor(props){
    super();

    this.state={

      'tamanos':{
        'margenSuperior':0,
        'cuerpo':0
      }

    }

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
	
	render(){
      const image = { uri: "https://static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<View style={{width:'100%',height:this.state.tamanos.margenSuperior, backgroundColor:'#053A88'}}>
						
					</View>
					<ScrollView>
  					<View style={{width:'100%',height:600,backgroundColor:'#1159BF'}}>
                <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
                  <TouchableOpacity onPress={()=>{this.props.callback('ini',null);}}>
                  <View style={{disply:'flex',flexDireccion:'row'}}>
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