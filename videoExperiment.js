import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import ini from "./fechManager.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={

      'apiKey':null,
      'sessionId':null,
      'token':null

    }
  }


  componentDidMount(){
    
    ini("http:\//167.71.173.198:3000/videoChat",false,null,'','post','json',
      (data)=>{
       
              
        console.log(data);
        this.state.apiKey=data.apiKey;
        this.state.sessionId=data.session;
        this.state.token=data.token;
        this.forceUpdate();
        
      }
      ,
      (error)=>{
        console.log(error)
        //
      }
    );


  }


  render() {
    console.log(this.state);


    if(this.state.apiKey!=null){


      return (
        <View style={{ backgroundColor:'red', flexDirection: 'row',width:'100%',height:'100%' }}>
          <OTSession apiKey={this.state.apiKey} sessionId={this.state.sessionId} token={this.state.token}>
            <OTPublisher style={{ width: 100, height: 100 }} />
            <OTSubscriber style={{ width: 100, height: 100 }} />
          </OTSession>
        </View>
      );



    }

    else{


      return(
        <View>
          <Text>Cargando</Text>
        </View>
      );
    }
    
  }
}