import React, { Component } from 'react'; 
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View} from 'react-native';

import Ini from './Ini.js';

import Login from './login.js';
import Dash from './dash2.js';
import Registrar from './registrar.js';
import Configuracion from './configuracion.js';
import Estudio from './estudio.js';

import MyCamara from './videoExperiment.js';

export default class Content extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			pag : 'ini',
			nombreUser:'',
			user:{
				id:null,
				rol:null
			}
		}
		this.cambiarEstado= this.cambiarEstado.bind(this);
		this.actualizarUser= this.actualizarUser.bind(this);
	}
	
	
	cambiarEstado(estado,param){
	

		this.state.pag = estado;
		this.forceUpdate();
		console.log(this.state.pag);
		
	}

	actualizarUser(id, rol){


		this.state.user.id= id;
		this.state.user.rol=rol;
		this.forceUpdate();
		console.log(this.state.user);

	}
	
	render(){
		var contenido;
		
		switch (this.state.pag) {
			case 'ini' :
				//contenido para el ini
				return (
					<Ini callback={this.cambiarEstado} />
				
				);
			
			break;
			
			case 'login' :
			
				//contenido para el login
				
				return (
					// codigo JSX
					<Login callback={this.cambiarEstado} actualizarCredenciales={this.actualizarUser}/>
				);
			
			break;
			
			
			case  'dashboard' :
				
				//contenido para la pagina principal
				
				return (
					// codigo JSX
					<Dash nombreUser={this.state.nombreUser} callback={this.cambiarEstado} credenciales={this.state.user}/>
				
				);
			
			break;

      		case  'registrar' :
				
				//contenido para la pagina principal
				
				return (
					// codigo JSX
					<Registrar callback={this.cambiarEstado}/>
				
				);
			
			break;
			
			case 'configuracion' :
			
				//contenido para el articulo
			
				return (
					// codigo JSX
          			<Configuracion callback={this.cambiarEstado}/>
				);
				
			break;


			case 'estudio':

				return(

					<Estudio />

				);

			break;

			case 'camara':
				return(

					<MyCamara/>


				);

			break;
		}
		
		
	}


	
}

