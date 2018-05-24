$(function () {
  //code to be executed on page load
  $("#lavenderBrown").hide();
})

var welcomeRoutine = function(){
	$("#lavenderBrown").show().delay(4000).fadeOut();
	$("#theLavenderExperienceWelcomeMp3").get(0).play();
}

var playFartOrPokemon = function(){
	var max = 2; //exclusive
	var min = 0; //inclusive
	var random = Math.floor(Math.random() * (max - min)) + min;
	if(random === 0){
		$("#naturalFart").get(0).play();
	}
	else{
		$("#pokemonSoundClip").get(0).play();
	}
}