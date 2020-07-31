import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,StatusBar} from 'react-native';
import ini from "./fechManager.js";

export default class Ini extends Component{

  constructor(props){

    super(props);
    this.state={
      'nombre':'',
      'roll':'',
      'image':'',
      'source':''

    }

    this.prueba= this.prueba.bind(this);

  }

  componentDidMount(){
    console.log(this.props.credenciales);
    var data ='id='+this.props.credenciales.id;
    console.log(data);
    ini("http:\//167.71.173.198:3000/getUser",true,null,data,'post','json',
      (data)=>{
       ///root@167.71.173.198:3000/proyects/serverFirsapp
              
        console.log(data);
        this.state.nombre= data[0].correo;
        this.state.roll= data[0].roll;
        if(data[0].fotoPerfil=="sinFoto"){

          this.state.image="http:\//167.71.173.198:3000/file?archivo=noImage.png";

        }

        else{
            this.state.image="http:\//167.71.173.198:3000/file?archivo="+data[0].fotoPerfil;

        }
        
        this.forceUpdate();

       // this.prueba();
        
        
      }
      ,
      (error)=>{
        console.log(error)
        
      }
    );

    



  }

  prueba(){

    ini(this.state.image,false,null,'','post','text',
      (data)=>{
        this.state.source= data;
        console.log(data);

      }
      ,
      (error)=>{
        console.log(error)
        
      }

    );


  }
	
	render(){
    const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
        
				<View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
          
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#053A88" translucent = {true}/>
          <View style={{width:'100%',height:'100%'}}>
            <View style={{width:'100%',height:'100%'}}>

              <View style={viewPortada}>
                <ImageBackground style={{width:'100%',height:'100%'}} source={image}>
                </ImageBackground>




              </View>

              <View style={viewInformation}>

                <View style={{backgroundColor:'white',width:'50%',height:'40%',borderColor:'white',borderWidth:2}}>
                  <Image source={{uri:  "http:\//167.71.173.198:3000/file?archivo=noImage.png"}} style={{width:'100%',height:'100%'}}>
                  </Image>
                </View>

                <View style={contentName}>

                  <Text style={{fontSize:25,color:'white'}}>{this.state.nombre}</Text>

                </View>

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
                </View>
              </View >



            </View>
            
            
          </View>  
				</View>
        
			
			);
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
  height:'50%',
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
