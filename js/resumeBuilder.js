
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

        "employer" : HTMLworkEmployer.replace("%data%","Police TH"),
        "title" : HTMLworkTitle.replace("%data%","IT Trainer"),
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
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);



var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedBioPic);


for (works in work){
	console.log(work[works.jobs]);
}