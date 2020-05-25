import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export default class Ini extends Component{


  constructor(props){
      super(props);

      this.state={
        form: new FormData(),
        image: null,
        nombreCompleto:null,
        apellido:null,
        ciudad:null,
        direccion:null

      };

      this.anaidirForm= this.anaidirForm.bind(this);

  }

  componentDidMount(){


      

  }

  anaidirForm(option,name,value,blob,filename){


    switch(option){


      case 1 :

        this.state.form.set(name,value);

      break;


      case 2 :

        this.state.form.set(name,blob,filename);

      break;



    }

    this.forceUpdate();


  }



  permisoImagenes = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      

    if (status !== 'granted') {
      alert('la aplicacion necesita acceso a la libreria para su foto de perfil');
    }


  }

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.state.image=result.uri;
        
        this.buscarBlomb(result.uri);

        var parts = result.uri;

        
        

        console.log(this.state.form);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };


   async buscarBlomb(uri){

      console.log(uri);
      var file = await FileSystem.readAsStringAsync(uri,{encoding:FileSystem.EncodingType.Base64});
      
        console.log(file);
        
        var parts= uri;
        parts = parts.split('/');
      //  parts= parts.split('/');

        




        this.anaidirForm(2,'avatar',null,file,parts[parts.length-1]);



   


  }
	
	render(){
      const image = { uri: "https:\//static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
				<View style={{width:'100%',height:'100%'}}>
					<View style={{width:'100%',height:'4%', backgroundColor:'#053A88'}}>
						
					</View>
          <ScrollView>
					
  					<View style={{width:'100%',height:600,backgroundColor:'#1159BF'}}>
                <ImageBackground source={image} style={{width:'100%',height:'100%'}}>
  						
                  <View style={{width:'100%',height:'32%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                    <Text style={{fontSize:35, color:'white'}}>Configuracion</Text>
                    
                  </View>
                  <View style={{width:'100%',height:'50%',display:'flex', justifyContent :'center', alignItems:'center'}}>
                  
                    <TextInput 
                      style ={estiloInput}
                      secureTextEntry={false}
                      placeholder ="Nombres"

                      onChangeText={(data)=>{

                        this.anaidirForm(1,'nombre',data,null,null);

                      }}
                    />
                    <TextInput 
                      style ={estiloInput}
                      secureTextEntry={false}
                      placeholder ="Apellido"

                      onChangeText={(data)=>{

                        this.anaidirForm(1,'apellidos',data,null,null);


                      }}

                    />

                    <TextInput 
                      style ={estiloInput}
                      secureTextEntry={false}
                      placeholder ="ciudad"

                      onChangeText={(data)=>{

                        this.anaidirForm(1,'ciudad',dasta,null,null);


                      }}

                    />

                    <TextInput 
                      style ={estiloInput}
                      secureTextEntry={false}
                      placeholder ="direccion"

                      onChangeText={(data)=>{

                       this.anaidirForm(1,'direccion',data,null,null); 


                      }}




                    />

                    <View style={{marginBottom:10}}>
                    
                      <Button 
                        
                        style={{marginBottom:10}}
                        title="Seleccionar imagen"
                        onPress={()=>{
                          this._pickImage ();
                        }}
                        
                      
                      />
                    </View>

                    <View style={{marginBottom:10}}>

                      <Button 
                        
                        
                        title="Enviar"
                        onPress={()=>{
                          this.props.callback('dashboard',{nombreUser:'Peddro'});
                        }}
                        
                      
                      />

                    </View>
                    
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