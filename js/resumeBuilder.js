var bio = {
	"name": "Kate",
	"role": "Student of the World",
	"contacts": {
		"email": "katie.jill@outlook.com",
		"github": "katemayo",
		"linkedin": "https://www.linkedin.com/in/katiemayo/",
		"location": "Washington, DC, USA",
    "flickr": "https://www.flickr.com/people/141176327@N06/"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently working in the federal consulting in the DC metro area. I love learning new things and "+
			  "starting projects.",
	"skills": ["JavaScript", "Web Development", "Chinese", "Spanish", "SQL"]
};

var work = {
	"jobs": [
		{
			"employer": "AFS",
			"title": "Senior Analyst",
			"location": "Washington, DC, USA",
			"datesWorked": "December 2016 - Present",
			"description": "I am currently working in the cybersecurity space, applying out of the box security solutions to protect "+
				"the business."
		},
		{
			"employer": "AFS",
			"title": "Analyst",
			"location": "Washington, DC, USA",
			"datesWorked": "July 2015 - December 2016",
			"description": "My primary responsibilities involved testing and delivering custom dashboards to help monitor critical  " +
				"business tasks in real time." 
		},
	]
};

var education = {
	"schools": [
		{ "name": "University of Virginia",
			"datesAttended": "2011 - 2015",
			"location": "Charlottesville, VA, USA",
			"degree": "B.S.E.",
			"major": "Systems Engineering",
			"focusArea": "Chinese language",
		}		
	]
};

var projects = {
	"projects": [
		{
			"title": "Personal website",
			"datesWorked": "January 2018 - Present",
			"description": "Created an personal brand website to practice coding skills." 
			"url": "http://www.katiemayo.com"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
formattedContactInfo.push(HTMLflickr.replace("%data%", bio.contacts.flickr));
formattedContactInfo.push(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolfocusArea = HTMLschoolfocusArea.replace("%data%", education.schools[i].focusArea);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolfocusArea);
		}

		
	}
}

education.display();

