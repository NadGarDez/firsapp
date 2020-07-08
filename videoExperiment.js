import React, { Component,useRef } from 'react'; 
import {StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground} from 'react-native';
import { Camera } from 'expo-camera';

export default class Record extends Component{

	constructor(props){
		super(props);

		this.state={
			permiso:null,
			type:null,
			ref:null

		}

		

		this.permiso= this.permiso.bind(this);
		this.photo= this.photo.bind(this);
		this.video= this.video.bind(this);
		this.referenciar= this.referenciar.bind(this);
	}

	referenciar(ref){

		this.state.ref= ref;
		

		this.forceUpdate();
		console.log(this.state.ref);

	}


	async permiso(){


		permiso = await Camera.requestPermissionsAsync();
		
		this.state.permiso= permiso;

		this.state.type= Camera.Constants.Type.front;
		this.forceUpdate();
	}

	async photo(){

		var referencia= this.state.ref;

		let photo = await referencia.takePictureAsync();

		console.log(photo);

	}

	async video(){

		var referencia= this.state.ref;

		let video = await referencia.recordAsync();

		var intervalo = setIntervarl(
			
			async ()=>{


				referencia.stopRecording();
				video = await referencia.recordAsync();
				
			},

			1000


		);

		console.log(photo);

	}

	componentWillMount(){

		this.permiso();

	}

	
	render(){

		


		if(this.state.permiso==null){

				

				return(

					<View>
						<Text>No Granted</Text>
					</View>



				);


		}

		else{

			return(

					<View style={{height:'100%',width:'100%',backgroundColor:'blue'}}>

						<Camera type={this.state.type} style={{height:'100%',width:'100%'}} 
							ref={
								this.referenciar
							}
						>

							<View style={{display:'flex',alignItems:'space-around',justifyContent :'center',height:'100%',width:'100%'}}>


								<TouchableOpacity onPress={


									this.photo

								}
								>
									<Text>Tomar foto</Text>
								</TouchableOpacity>
								<TouchableOpacity >
									<Text>Grabar Video</Text>
								</TouchableOpacity>



							</View>
	        
      					</Camera>
						
					</View>


				);



		}


    
	}
}


