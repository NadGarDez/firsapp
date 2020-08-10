import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,StatusBar} from 'react-native';
import ini from "./fechManager.js";

export default class Ini extends Component{

  


	
	render(){

    console.log(this.props.roll);

    switch(this.props.roll){

      case '':
        return (<Text>Cargando</Text>);
      break;

      case 'pasiente':
      
       

        return(
                  <View style={contentOption}>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>$</Text>
                        <Text style={{fontSize:15,color:'white'}}>Agendar</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>€</Text>
                        <Text style={{fontSize:15,color:'white'}}>Agendadass</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>£</Text>
                        <Text style={{fontSize:15,color:'white'}}>Asistir</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Declinar</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}
                      onPress={()=>{

                          this.props.callback('configuracion',null);

                      }}
                    >
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Cuenta</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}
                      onPress={()=>{

                            this.props.logout();
                        }}


                    >
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Logout</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              );  
      
      break;


      case 'psicologo':

        return(
                  <View style={contentOption}>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:10,color:'white'}}>Configuracion de establecimiento</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>$</Text>
                        <Text style={{fontSize:15,color:'white'}}>Agendar</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>€</Text>
                        <Text style={{fontSize:15,color:'white'}}>Agendadass</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>£</Text>
                        <Text style={{fontSize:15,color:'white'}}>Asistir</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Declinar</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Cuenta</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}
                        onPress={()=>{

                            Alert.alert('hola mundo');

                        }}

                      >
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Logout</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              );  

      break;


      case 'administrador':

        return(
                  <View style={contentOption}>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>$</Text>
                        <Text style={{fontSize:15,color:'white'}}>Agendar</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>€</Text>
                        <Text style={{fontSize:15,color:'white'}}>Agendadass</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>£</Text>
                        <Text style={{fontSize:15,color:'white'}}>Asistir</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Declinar</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}>
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Cuenta</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={botonItem}
                      onPress={this.props.logout}

                    >
                      <View style={viewOptionItem}>
                        <Text style={{color:'rgb(26,184,213)',fontSize:30, marginRight:7}}>¥</Text>
                        <Text style={{fontSize:15,color:'white'}}>Logout</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              );  

      break;

    }
    
    
        
			
			
	}
}


var viewInformation={
  backgroundColor:'rgb(9,136,181)',
  width:'100%',
  height:'70%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  paddingTop:'1%'
}


var viewPortada={
  backgroundColor:'rgb(26,184,213)',
  width:'100%',
  height:'30%'

}


var contentName={
  borderStyle:'solid',
  borderColor:'black',
  padding:'5%',
  boxSizing:'border-box',
  display:'flex',
 // justifyContent :'center', 

  alignItems:'center',
  
  width:'100%',
  height:'20%'

}

var contentOption={
  width:'100%',
  height:'40%',
  display: 'flex',
  flexDirection:'row',
  flexWrap:'wrap'
}

var botonItem={
  width:'50%',
  height:'30%',
  display:'flex',
  justifyContent :'center', 
  alignItems:'center',

}

var viewOptionItem={
  boxSizing:'border-box',
  width:'90%',
  height:'90%',
  display:'flex',
  flexDirection:'row',
  justifyContent :'center', 
  alignItems:'center',
  padding:'5%',
  borderWidth:1,
  borderColor:'white',
  borderBottomLeftRadius: 20, 
	borderBottomRightRadius: 20, 
	borderTopLeftRadius: 20, 
	borderTopRightRadius:20,
}

var contentMenuInferior={

  display:'flex',
  flexDirection:'row',
  width:'100%',
  height:'10%',
  backgroundColor:'rgb(26,184,213)'
}

var botonMenuInferior={
  width:'25%',
  height:'100%'
}

var viewBotonInferior={
  width:'100%',
  height:'100%',
  display:'flex',
  justifyContent :'center', 
  alignItems:'center',

}
