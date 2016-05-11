

console.log("This is working");

$('.pure_button').click(function(e) { 
	e.preventDefault()
		console.log("click noticed")
	
	$.ajax({
		
		
		url: "https://restcountries.eu/rest/v1/name/" + $('.pure-input-rounded').val() +  "?fullText=true",
		type: "GET",
		success: function(data) {
			var country = $('.pure-input-rounded').val();
			console.log("This works too")
			debugger
			console.log(data)
			var capital = data[0].capital
			var people = data[0].demonym
			var region = data[0].region
			var nat_name = data[0].nativeName
			var domain = data[0].topLevelDomain
			$('.world_facts p').addClass("animated fadeInDown")
			$('#region').text(country + " is located in " + region + ".")
			$('#capital').text("Its capital is " + capital + ".")
			$('#people').text("People from " + country + " are called " + people + ".")
			$('#nat_name').text(people + " people call their country " + nat_name + ".")
			$('#domain').text("Websites registered in " + country + " have the top level domain name of " + domain + ".")
		}
	});
});


$(":reset").click(function(e) {
	e.preventDefault()
		$(".zipform")[0].reset()
		console.log("Form reset")
		$(".world_facts p").empty().removeClass("animated fadeInDown")

	});


