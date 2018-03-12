var portfolioApp = angular.module("portfolioApp", []);

portfolioApp.controller("PortfolioController", function PortfolioController($scope){
	$scope.firstname = "Jeorge";
	$scope.lastname = "of the Jungle";
	$scope.imgSrc = "img/pic.png";
	$scope.description = "I'm a passionate game artist and game developer who " +
			 "studied Computer Science with Specialization in Software Technology " +
			 "at De La Salle University Manila. I love crafting worlds and characters, telling their " +
			 "stories through interactive games.";
	$scope.email = "janajaneaustria@gmail.com";
	$scope.resumeLink = "http://google.com";
	$scope.resumeLoc = "Dropbox";
	$scope.location = "Manila, Philippines";
	$scope.projects = [
		{
			title: "Red's Adventure",
			featureImgSrc: "img/ggj.png",
			featured: true,
			coverImgSrc: "img/ra1.png",
			shortDescription: "Created the art assets for 2018 Global Game Jam. Little Red has to team up with her friends to survive the never ending nightmare.", 
			fullDescription: "Created the art assets for 2018 Global Game Jam. Little Red has to team up with her friends to survive the never ending nightmare.",
			imageFiles: "",
			downloadLink: "",
			playLink: "",
		},
		{	
			title: "Fable Friends",
			featureImgSrc: "img/ff1.png",
			featured: true,
			coverImgSrc: "img/ff1.png",
			shortDescription: "A collection of character designs inspired from the popular halloween and fairtytale characters, and world builds of spooky atmosphere.", 
			fullDescription: "A collection of character designs inspired from the popular halloween and fairtytale characters, and world builds of spooky atmosphere.",
			imageFiles: "",
			downloadLink: "",
			playLink: "",
		},
		{
			title: "Tricky Treats",
			featureImgSrc: "img/tt1.png",
			featured: false,
			coverImgSrc: "img/tt1.png",
			shortDescription: "First game I developed in HTML5 during my time in college. Help the alchemist gather ingredients from the forest to craft potions.", 
			fullDescription: "First game I developed in HTML5 during my time in college. Help the alchemist gather ingredients from the forest to craft potions.",
			imageFiles: "",
			downloadLink: "",
			playLink: "",
		}
	];
});