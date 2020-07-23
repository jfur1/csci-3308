$(document).ready(function() {    
    var apiKey = 'cfee9a6bb14ec2d354c98ef0623eaff1' // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url

    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    for(var i = 0; i < Object.keys(state_info).length; i++){
        state_name = Object.keys(state_info)[i]
        var state_obj = state_info[state_name];
        var url =`https://api.darksky.net/forecast/${apiKey}/${state_obj.lat},${state_obj.lng}`;

        $.ajax({ajaxI:state_name, url:url, dataType:"jsonp"}).then(function(data) {
                    
                    console.log(data.currently.apparentTemperature)
                    var temperature = null
                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                    var temperature = data.currently.apparentTemperature;
                    state_name = this.ajaxI;
                    console.log(state_name)

                    //TODO 
                    // Default color gray
                    // Create a series of if else blocks to set the color for the state based on the temperature
                    // Less than equal to 10 should be blue
                    if(temperature <= 10){
                        $('#'+state_name).css('fill', 'blue');
                    }
                    // Between 11 and 30 should be cyan
                    else if(temperature > 10 && temperature <= 30){
                        $('#'+state_name).css('fill', 'cyan');
                    }
                    // Between 31 and 50 should be green
                    else if(temperature > 30 && temperature <= 50){
                        $('#'+state_name).css('fill', 'green');
                    }
                    // Between 51 and 80 should be orange
                    else if(temperature > 50 && temperature <= 80){
                        $('#'+state_name).css('fill', 'orange');
                    }
                    // Greater than 80 should be red
                    else if(temperature > 80){
                        $('#'+state_name).css('fill', 'red');
                    }

                    //$('#CO').css('fill', "blue");   // Example on how to fill colors for your state.    
        });
    }
});