import React, { Component } from 'react'; 
import {Picker,FlatList,ActivityIndicator,StyleSheet,AppRegistry, ScrollView, Image, Text, View, TouchableOpacity,Button,Alert,TextInput,ImageBackground,Modal,RefreshControl,Switch,StatusBar,SectionList} from 'react-native';

	var paginas=[

		{
			title:'pag1',
			index:0

		},
		{
			title:'pag2',
			index:1

		},
		{
			title:'pag3',
			index:2
		}

	];


 var data = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];


var elementos =[
	{
		id:1,
		dato:'dato 1'
	},

	{

		id:2,
		dato:'dato 2'

	},

	{

		id:3,
		dato:'dato 3'

	},

	{
		id:4,
		dato:'dato 4'
	},

	{

		id:5,
		dato:'dato 5'

	},

	{

		id:6,
		dato:'dato 6'

	},

	{
		id:7,
		dato:'dato 7'
	},

	{

		id:8,
		dato:'dato 8'

	},

	{

		id:9,
		dato:'dato 9'

	},

	{
		id:10,
		dato:'dato 10'
	},

	{

		id:11,
		dato:'dato 11'

	},

	{

		id:12,
		dato:'dato 12'

	}


]



export default class Estudio extends Component{

	constructor(props){

		super(props);

		this.state={


			'modal1':false,
			'switch1':false,
			'colorSwtch':'#5dd4b',
			'picker':'1'

		};



		this.controlarModal= this.controlarModal.bind(this);
		this.controlarSwitch= this.controlarSwitch.bind(this);
		this.controladorPicker= this.controladorPicker.bind(this);

		console.log(this.controlarModal);

	}
	controladorPicker(value){
		this.state.picker="1";
		this.forceUpdate();

	}

	controlarModal(){

		this.state.modal1= !this.state.modal1;
		this.forceUpdate();

	}

	controlarSwitch(){
		this.state.switch1= !this.state.switch1;

		if(this.state.switch1==true){
			this.state.colorSwtch='#5dd4b';
			Alert.alert('activado');
		}

		else{

			this.state.colorSwtch='#f4f3f4';

		}

		this.forceUpdate();
	}


	render(){
		

		return(

			<View>
			<ScrollView>
			<View style={{width:'100%',height:1000}}>
			

				<View style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'30%', backgroundColor:'blue'}}>
					<Text>Flat list</Text>
					<FlatList 
						data={elementos}


						renderItem={

							({item,index,separator})=>(
									<View style={{backgroundColor:'white'}}>
										<Text>{item.dato}</Text>
									</View>

								)

						}

						keyExtractor={item => item.id}


					/>
					

				</View>


				<View style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'30%', backgroundColor:'red'}}>
					

					<Text>Activiti indicator</Text>

					<ActivityIndicator size='large' color='#0000ff'/>
					

				</View>


				

				<View style={{}}>
					<Text>Modal</Text>

					<Modal

						animationType="slide"
						transparent={true}
						visible={this.state.modal1}


					>

						<View style={{backgroundColor:'green'}}>

							<Text>Hola mundo</Text>

							<Button
								title="cerrar"


								onPress={
									

										this.controlarModal
									

								}


							/>

						</View>

					</Modal>



					<Button 
						title="aparecer Modal"
						onPress={


								this.controlarModal
							

						}

					/>
				</View>

				<ScrollView style={{heigth:500}}

						refreshControl={
							<RefreshControl refreshing={false} onRefresh={()=>{Alert.alert('refrescando');}}/>
							
						}
					

				>

					<View style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
						<Text>Refresh</Text>

					</View>


				</ScrollView>

				<View style={{}}>
					<Text>Switch</Text>

					<Switch

						trackColor={{ false: "#767577", true: "#81b0ff" }}
						thumbColor={this.state.colorSwtch}
						ios_backgroundColor="#3e3e3e"
				        onValueChange={

				        
				        		this.controlarSwitch
				        	
				        }
				        value={this.state.switch1}


					/>
						
					

				</View>


				<View style={{height:200}}>
					<Text>Status bar</Text>
					
					<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
  
						
					

				</View>
				<View>

					<Text>Picker</Text>

					<Picker
						selectedValue={this.state.picker}

						style={{ height: 50, width: 150 }}
        				onValueChange={(itemValue, itemIndex) => {
        						this.controladorPicker(itemValue);
        					}
        				}
					>


						<Picker.item label="item 1" value="1"/>
						<Picker.item label="item 2" value="2"/>
					</Picker>





				</View>

				<View style={{height:2000}}>
					<Text>Section list</Text>
					
					<SectionList
						sections = {data}
						keyExtractor={(item, index) => item + index}
						renderItem = {

							({item})=>(

								<Text>item {item}</Text>

							)

						}

						renderSectionHeader= {


							({section : {title}})=>(
								<Text>Titulo {title}</Text>

							)
						}

					/>



					
						
					

				</View>

			</View>
			</ScrollView>
			</View>


		);


	}





}