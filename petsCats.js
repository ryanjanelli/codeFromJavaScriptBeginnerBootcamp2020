var catOwner = 'Ryan';

var totalPetsCats = function () {
	var catsInLifetime = ['Bonzai', 'Simba', 'Mittens', 'Coco', 'Batman', 'Mugen'];
    var livingCats = ['Coco', 'Batman', 'Mugen'];
	var currentPets = function() {
	     return catOwner + ' has had ' + catsInLifetime.length + ' cats in his life. He currently has ' 
		+ livingCats.length + '. Their names are ' + livingCats[0] + ', ' 
		+ livingCats[1] + ', and ' + livingCats[2] + '.'
    }
   return currentPets()
}

totalPetsCats();