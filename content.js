import React, { Component } from 'react'; 
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View} from 'react-native';
import Ini from './Ini.js';
import Login from './login.js';
import Dash from './dash2.js';
import Registrar from './registrar.js';
import Configuracion from './configuracion.js';

export default class Content extends Component{
	
	constructor(props){
		super(props);
		this.state = {pag : 'ini',nombreUser:''}
		this.cambiarEstado= this.cambiarEstado.bind(this);
	}
	
	
	cambiarEstado(estado,param){
	
	
	        if((param!=null)&&(estado="dashboard")){
	          console.log('pasamos por aqui');
	          this.state.nombreUser=param.nombreUser;
	          
	        }
		this.state.pag = estado;
		this.forceUpdate();
		console.log(this.state.pag);
		
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
					<Login callback={this.cambiarEstado}/>
				);
			
			break;
			
			
			case  'dashboard' :
				
				//contenido para la pagina principal
				
				return (
					// codigo JSX
					<Dash nombreUser={this.state.nombreUser} callback={this.cambiarEstado}/>
				
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
		}
		
		
	}
	
}

