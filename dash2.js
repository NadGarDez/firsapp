import React, { Component } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';

export default class Ini extends Component{
	
	render(){
    const image = { uri: "https://static.vecteezy.com/system/resources/previews/000/266/873/non_2x/sky-background-with-clouds-layers-vector.jpg" };
			return(
        
				<View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
          <View style={{zIndex:3,backgroundColor:'red',width:'50%',height:'25%',position: 'absolute',borderColor:'white',borderWidth:2,left:'25%',top:'30%'}}>
            <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRxjbWzi3jsxTOzms3s36gqZQ13lIx64jnIv9SSTvR_GYYYgzf&usqp=CAU'}} style={{width:'100%',height:'100%'}}>
            </ImageBackground>
          </View>
          <View style={{width:'100%',height:'4%', backgroundColor:'#053A88',zIndex:1,}}>
						
					</View>
          <View style={{width:'100%',height:'96%',zIndex:1}}>
            <View style={{width:'100%',height:'90%'}}>

              <View style={viewPortada}>
                <ImageBackground style={{width:'100%',height:'100%'}} source={image}>
                </ImageBackground>




              </View>

              <View style={viewInformation}>

                <View style={contentName}>

                  <Text style={{fontSize:25,color:'white'}}>Pedrito Perez</Text>

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
            
            <View style={contentMenuInferior}>
              <TouchableOpacity style={botonMenuInferior}>
                    <View style={viewBotonInferior}>
                      <Text style={{fontSize:20,color:'white'}}>&</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={botonMenuInferior}>
                    <View style={viewBotonInferior}>
                      <Text style={{fontSize:20,color:'white'}}>@</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={botonMenuInferior}>
                    <View style={viewBotonInferior}>
                      <Text style={{fontSize:20,color:'white'}}>$</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={botonMenuInferior}>
                    <View style={viewBotonInferior}>
                      <Text style={{fontSize:20,color:'white'}}>%</Text>
                    </View>
                  </TouchableOpacity>
            </View>
          </View>  
				</View>
        
			
			);
	}
}


var viewInformation={
  backgroundColor:'rgb(9,136,181)',
  width:'100%',
  height:'60%',
  display:'flex',
  flexDirection:'column'
}


var viewPortada={
  backgroundColor:'rgb(26,184,213)',
  width:'100%',
  height:'40%'

}


var contentName={
  borderStyle:'solid',
  borderColor:'black',
  padding:'5%',
  boxSizing:'border-box',
  display:'flex',
 // justifyContent :'center', 
  flexDirection:'column-reverse',
  alignItems:'center',
  
  width:'100%',
  height:'50%'

}

var contentOption={
  width:'100%',
  height:'50%',
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
