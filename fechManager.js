function ini(url,option,headers,data,method,formateResponse,callback,callbakError,contentType='application/x-www-form-urlencoded'){

	console.log(url);
	
		
		if(option==true){

			var object={
				'method':method,
				headers: {
            		'Content-Type': contentType
        		},
				'body':data
			}

			fetch(
				url,
				object
			)
			.then(
				function(data){
					switch (formateResponse){
						case 'text':

							return data.text();


						break;
						case 'json':

							return data.json();


						break;

					}
				}
			)
			.then(
				function(data){
					callback(data);
				}
			)
			.catch(
				function(error){
					callbakError(error);

				}

			);
		}
		else{


			fetch(
				url
			)
			.then(
				function(data){
					switch (formateResponse){
						case 'text':

							return data.text();


						break;
						case 'json':

							return data.json();


						break;

					}
				}
			)
			.then(
				function(data){
					callback(data);
				}
			)
			.catch(
				function(error){
					callbakError(error);

				}

			);



		}


		
		console.log('yo soy fetch.ini');

}

export default ini;


