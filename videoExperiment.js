import React, { Component,useRef } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import {RTCView,getUserMedia} from 'react-native-webrtc';
//import Permissions from 'react-native-permissions';

export default class Record extends Component{

	constructor(props){
		super(props);

		this.state={
			videoURL:null,
			permiso:null,
			permiso2:null

		}

		

		this.iniciarStream= this.iniciarStream.bind(this);
	}

	iniciarStream(){

		getUserMedia({
	        audio: true,
	        video: {
	          mandatory: {},
	        }
	    },
	    stream => {
	    	console.log(stream);
	       this.setState({ videoURL: stream.toURL() });
	    },
	      err => console.error(err)
	    );

	}


	componentDidMount() {
	  	permiso = await Permissions.getAsync('CAMERA');
		permiso2 = await Permissions.getAsync('AUDIO_RECORDING');
		this.state.permiso= permiso;
		this.state.permiso2= permiso2;

		
		this.forceUpdate();
  	}
	render(){

		
		<View style={{height:'100%',width:'100%',backgroundColor:'blue',flex:1}}>
			<TouchableOpacity
				onPress={

					this.iniciarStream
				}
			>
			</TouchableOpacity>

		</View>


    
	}
}


