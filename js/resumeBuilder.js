
var projects = {
  "projects": ["Fernstudium.com", "2009-2017", "Portal Building", "images/197x148.gif"],
  "projects": []

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
       jobs : [{

        "employer" : "Police TH",
        "title" : "IT Trainer",
        "location" : HTMLworkLocation.replace("%data%","Meiningen"),
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
 


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);




//work Section

for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].employer);

/**
	if (work.hasOwnProperty(job)){
	   $("#workExperience").prepend(HTMLworkStart);

	  console.log(work[job]);
	}

	**/

	//console.log(work[works.jobs.title]);
	//console.log(work[works.jobs.location]);
	//datesWorked



//}