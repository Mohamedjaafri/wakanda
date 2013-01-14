

for (var i=1; i<=100000; i++) {
	var myclass1 = new ds.Company();
	myclass1.dateAjout = new Date();
	myclass1.name = "Company_1_"+i;
	myclass1.save();
	
	var myClass2 = new ds.Employee();
	myClass2.name = "Employee_2_"+i;
	myClass2.company = myclass1;
	myClass2.save();
};


for (var i=1; i<=20000; i++) {
	var fat = new ds.People();
	fat.name = "Father_famille_"+(i/5);
	fat.age = 43;
	fat.cbool = true;
	fat.save();
	
	var mot = new ds.People();
	mot.name = "Mother_famille_"+(i/5);
	mot.age = 38;
	mot.cbool = false;
	mot.save();
	
	var child1 = new ds.People();
	child1.name = "Children_1_famille_"+(i/5);
	child1.age = 15;
	child1.cbool = false;
	child1.father = fat;
	child1.mother = mot;
	child1.save();
	
	var child2 = new ds.People();
	child2.name = "Children_2_famille_"+(i/5);
	child2.age = 13;
	child2.cbool = true;
	child2.father = fat;
	child2.mother = mot;
	child2.save();
	
	var child3 = new ds.People();
	child3.name = "Children_3_famille_"+(i/5);
	child3.age = 7;
	child3.cbool = true;
	child3.father = fat;
	child3.mother = mot;
	child3.save();
};






