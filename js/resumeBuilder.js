
var projects = {
  "projects": ["Fernstudium.com", "2009-2017", "Portal Building", "images/197x148.gif"],   /// Q: How is to put more projects into
  "projects": ["Aristolo.com", "2016-2017", "Performance Optimization", "images/Aristolo.png"],
  "projects": ["Hypnose-Experte.de", "2014-present", "Performance Optimization, SEO, UX", "images/HypnoseExperte.png"],


};

var bio = {
  "name": "Mario Schröder",
  "role": "Front End Developer",
  "welcomeMessage": "Hi there I am your new Front End Ninja",
  "biopic": "images/fry.jpg",
  "contacts": {
  	"mobile": "0049 163 2709807",
  	"email": "schroedi2001@gmail.com",
  	"github": "ischroedi",
  	"twitter": "@ischroedi",
  	"location": "Erfurt (Germany)"
  },
  "skills": ["Python", "HTML5", "CSS3", "JavaScript"]
};

var education = {
  "schools": {
  	"name": "IUBH",
  	"location": "Erufrt",
  	"degree": "Bachelor",
  	"dates": "2014-present",
  	"url": "http://iubh-fernstudium.de"
  },
  "onlineCourses": {
  	"title": "IPND",
  	"school": "Udacity",
  	"dates": "2017",
  	"url": "https://Udacity.com/ud000"
  },
  "onlineCourses": {
  	"title": "Front-End Web Developer",
  	"school": "Udacity",
  	"dates": "2017",
  	"url": "https://Udacity.com/ud000"
  },
  "onlineCourses": {
  	"title": "REACT Nanodegree",
  	"school": "Udacity",
  	"dates": "planned",
  	"url": "https://Udacity.com/ud000"
  }
};

var work = {
       jobs : [{ //Q: Whats this DataStructure and How do I getting information of this? 

        "employer" : "Police TH",  // Q: or is this the better choice ? 
        "title" : "IT Trainer",
        "location" : HTMLworkLocation.replace("%data%","Meiningen"), // Q: is this version also possible to work with
        "datesWorked" : HTMLworkDates.replace("%data%","2017-present"),
        "description" : HTMLworkDescription.replace("%data%","Teaching the COPS IT skills.")
    },
    {
        "employer" : HTMLworkEmployer.replace("%data%","Police Officer"),
        "title" : HTMLworkTitle.replace("%data%","Police Officer on Patrol"),
        "location" : HTMLworkLocation.replace("%data%","Jena"),
        "datesWorked" : HTMLworkDates.replace("%data%","2010-2017"),
        "description" : HTMLworkDescription.replace("%data%","To project and serve ! ")
    },
    {
        "employer" : HTMLworkEmployer.replace("%data%","Police Officer"),
        "title" : HTMLworkTitle.replace("%data%","Software Engineer"),
        "location" : HTMLworkLocation.replace("%data%","Erfurt"),
        "datesWorked" : HTMLworkDates.replace("%data%","2006-2010"),
        "description" : HTMLworkDescription.replace("%data%","Developing Software like BI for statistics")
    },
    {
        "employer" : HTMLworkEmployer.replace("%data%","Police Officer (BGS)"),
        "title" : HTMLworkTitle.replace("%data%","HP-Unix, Linux Administrator"),
        "location" : HTMLworkLocation.replace("%data%","Koblenz"),
        "datesWorked" : HTMLworkDates.replace("%data%","2003-2006"),
        "description" : HTMLworkDescription.replace("%data%","HP-UX and Linux #FTW")
    }
    ]
  };
 


// Bio section
function displayBio(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);


 
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedBioPic);



if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkills);
  var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkills);
}


  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#header").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#header").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#header").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#header").append(formattedLocation);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedMessage);
};

displayBio();



// Section Projects

var displayProjects = function () {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[i].images.length > 0) {
      for (image in projects.projects[i].images) {
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};
displayProjects();

//>>>>>>> 8a77242fa1d1d4ccfd2add3dd9d59b03563fe309 -- Problem with github - with working on two pc - automerge

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);




//work Section
function displayWork(){
  for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

      /// Q: How is the adresse the work.jobs ..... 
      // its a dict with an array ? 

///// Q: - how had I put it into the website
//// Q: should I use the for-in Loop or other Loops instead in practical use? 

/**
	if (work.hasOwnProperty(job)){
	   $("#workExperience").prepend(HTMLworkStart);

	  console.log(work[job]);
	}

	**/

	//console.log(work[works.jobs.title]);
	//console.log(work[works.jobs.location]);
	//datesWorked



   } // end of for
}; //end of display work

displayWork();