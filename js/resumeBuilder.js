var bio ={
			"name": name,
			"age": "45",	
			"skills": ["JS","programming","Github","HTML","CSS"],
			"contacts": {
				"mobile": "07900399399",
				"email": "hillsidecmp@gmail.com",
				"location": "Lichfield UK"
			},
			"pictureURL": "images/fry.jpg",
			"welcomeMessage": "Welcome to my resume"
};

var work= {
	"jobs": [
		{
			"jobposition":"Head of IM&T",
			"employer": "Ofwat",
			"yearsworked":"Aug 2006-Oct 2014",
			"location":"London",
			"description": "kzlkdsckdsmckdsmcklmdscmkds skd aslkjcijlskaj lcjlckj a jsak jsajcl ksajljasljdslkjlkasjlksaj claskjl"
		},
		{
			"jobposition": "Head of Sys Dev",
			"employer": "Ofwat",
			"yearsworked":"Jan 1998-Jul 2006",
			"location":"Birmingham",
			"description": "kzlkdsckdsmckdsmcklmdscmkds skd aslkjcijlskaj lcjlckj a jsak jsajcl ksajljasljdslkjlkasjlksaj claskjl"
		},
		{
			"jobposition": "Software developer",
			"employer": "Ofwat",
			"yearsworked": "Jan 1993-Jun 2006",
			"location": "Birmingham",
			"description": "kzlkdsckdsmckdsmcklmdscmkds skd aslkjcijlskaj lcjlckj a jsak jsajcl ksajljasljdslkjlkasjlksaj claskjl"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Lancaster University",
			"location": "Lancaster",
			"major": "BA Hons",
			"gradyear": "1990",
			"url": "htttp://"
		},
		{
			"name": "Chase Terrace High School",
			"location": "Burntwood",
			"major": "5 A Levels",
			"gradyear": "1987",
			"url": "htttp://"
		}
	],

	"onlinecourses": [
		{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1950678559/m-1936858588"
		},

		{
			"title": "Github and Git",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/"
		},

		{
			"title": "HTML and CSS",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/"
		}	
	]
};


var projects = {
	"project": [
		{
			"title": "iPad and iPhone deployment",
			"description": "Implemented CESG secure iPads and iPhones to 200 people.",
			"dates": "2010-13"
		},
		{
			"title": "Hyper-V virtualisation",
			"description": "Managed the migration to a virtualised server environment",
			"dates": "2013-14"
		}
	]
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});	

var name = "Carl Poulton";
var role = "Web developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName);
$("#header").append(formattedRole);



displaySkills();

displayWork();

function displaySkills() {
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {

	for (job in work.roles) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].jobposition);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);

		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedYearsWorked = HTMLworkDates.replace("%data%",work.jobs[job].yearsworked);
		$(".work-entry:last").append(formattedYearsWorked);

		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobposition[job].description);
		$(".work-entry:last").append(formattedDesc);	
	}

}

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
		$(".project-entry:last").append(formattedDates);
	}
}

projects.display();

function inName(name) {

    name = name.split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    name = name.join(" ");    
   
    return name;

}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//************************************************************************************************************

/*function locationizer(work) {
	var locations =[];
	for (job in work.roles) {
		locations.push(work.roles[job].city)
	}
	return locations;
}

console.log(locationizer(work));


These were lines used when learning via the course

var name = "Carl Poulton";
var role = "Web developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

    newHTML = newHTML.replace(/<findtext>/g,<replacetext>); replace all matches in string


$("#main").append(formattedName);
$("#main").append(formattedRole);

$("#main").append(bio.name);

$("#main").append(bio.skills);
$("#main").append(bio.contactinfo);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);


var myname = "Carl";
var awesomethoughts = "I am " + myname + " and I am awesome!";
var funthoughts = awesomethoughts.replace("awesome","fun");

console.log(awesomethoughts);

$("#main").append(myname);
$("#main").append(funthoughts);
*/


/* This code for testing string manipulation
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!

    // this below...
    s = s[1].toUpperCase() + s.slice(2);
	
	// does the same as this...
	var u = s.slice(-7,2);
    u = u.toUpperCase();
    s= s.slice(-6);
    s= u + s;
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

*/

/* Array manipulation lesson

var sampleArray = [1,2,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turn into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!

    // My answer below is the same as....
	var lastArray = sampleArray[2];
	lastArray = lastArray + 1;
	newArray = [sampleArray[0],sampleArray[1],lastArray];

	//This that was provided by the course....
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

*/

/* More string manipulation

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    // This is what I did....
    finalName = finalName.toLowerCase();
    nameArray = finalName.split(' ');

    var firstName = nameArray[0];
    var lastName = nameArray[1];

    firstName = firstName[0].toUpperCase() + firstName.slice(1);
	lastName = lastName.toUpperCase()
    
    finalName = firstName + " " + lastName; 	

	// Answer given....
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

*/