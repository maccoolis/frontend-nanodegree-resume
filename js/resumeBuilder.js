
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});	


// Header and contact information ------------------------------------------------------------------------
var bio ={
			"name": "Carl Poulton",
			"role": "Web Developer",
			"age": "45",	
			"skills": ["JS","programming","Github","HTML","CSS"],
			"contacts": {
				"mobile": "07962815834",
				"email": "hillsidecmp@gmail.com",
				"twitter":"CMPhh",
				"location": "Lichfield"
			},
			"bioPic": "./images/fry.jpg",
			"welcomeMessage": "Welcome to my resume"
};


var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
var formattedWelcMSG = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);

$("#topContacts").append(formattedName);
$("#topContacts").append(formattedRole);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);

$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcMSG);

//----------------------------------------------------------------------------------------------

// Display my career ----------------------------------------------------------------------------------
var work= {
	"jobs": [
		{
			"jobposition":"Head of IM&T",
			"employer": "Ofwat",
			"dates":"Aug 2006-Oct 2014",
			"location":"London",
			"description": "Working as the strategic lead for all technology teams and projects."
		},
		{
			"jobposition": "Head of Sys Dev",
			"employer": "Ofwat",
			"dates":"Jan 1998-Jul 2006",
			"location":"Birmingham",
			"description": "Managing and technically leading on all open source and proprietary systems."
		},
		{
			"jobposition": "Software developer",
			"employer": "Ofwat",
			"dates": "Jan 1993-Jun 2006",
			"location": "Leicester",
			"description": "Developing the financial model and supporting tools to set price limits in England and Wales"
		}
	]
};

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].jobposition);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);	
	}

}

displayWork();

// -------------------------------------------------------------------------------------------------------

// Display all of my education history --------------------------------------------------------------------------
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


education.display = function () {
	for (school in education.schools) {

	$("#education").append(HTMLschoolStart );

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchool);

		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedCity);
	
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].gradyear);
		$(".education-entry:last").append(formattedDates);	

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);	

	}

	for (onlineschool in education.online) {

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart );
	

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[onlineschool].title);
		$(".education-entry:last").append(formattedOnlineTitle);
	
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[onlineschool].school);
		$(".education-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[onlineschool].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[onlineschool].url);
		$(".education-entry:last").append(formattedOnlineURL);

	}
}
education.display();
// -------------------------------------------------------------------------------------------------------

// Display all of my projects --------------------------------------------------------------------------

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

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectDates.replace("%data%",projects.project[project].dates) + " " + HTMLprojectTitle.replace("%data%",projects.project[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
		$(".project-entry:last").append(formattedDescription);

	}
}

projects.display();
// -------------------------------------------------------------------------------------------------------


// Display my skills-----------------------------------------------------------------------------
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

displaySkills();

// -------------------------------------------------------------------------------------------------------

//Display map and internationlise button details ---------------------------------------------------------------------------


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


// Display a footer-----------------------------------------------------------------------------

function displayFooter () {

	if (bio.contacts.mobile.length > 0) {

		$("#footerContacts").append(bio.contacts[0]);
	}
}
displayFooter();
// -------------------------------------------------------------------------------------------------------


//************************************************************************************************************

/*function locationizer(work) {
	var locations =[];
	for (job in work.roles) {
		locations.push(work.roles[job].city)
	}
	return locations;
}

console.log(locationizer(work));

//************************************************************************************************************
These were lines used when learning via the course that i wish to keep as a record of what I wrote.

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