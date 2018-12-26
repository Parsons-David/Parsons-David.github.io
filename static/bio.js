const tailwind = require('../tailwind');

module.exports = {
  name: 'David Parsons', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  titles : [
    'Rutgers Alumni',
    'Eagle Scout',
    'FIRST Volunteer',
    'Software Engineer at Capital One'
  ],
  projects : [
    {
      "title" : "Rutgers Course API",
      "link" : "https://github.com/Parsons-David/Rutgers-Course-API",
      "description" : "A serverless API for Rutgers University Course Data built with AWS.",
      "bg" : "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
    },
    {
      "title" : "FSD",
      "link" : "https://github.com/Parsons-David/FSD",
      "description" : "A lightweight process, virtual memory, and file system implementation written in C.",
      "bg" : "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
    },
    {
      "title" : "Poker Trainer",
      "link" : "https://github.com/Parsons-David/Poker-Trainer",
      "description" : "Android App & Java Applet for learning to recognize and rank poker hands.",
      "bg" : "linear-gradient(to right, #009245 0%, #FCEE21 100%)"
    },
    {
      "title" : "CS 111 Practice",
      "link" : "https://github.com/Parsons-David/CS-111-Practice",
      "description" : "Provides practice problems for students in introductory Computer Science courses.",
      "bg" : "linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
    }
  ],
  "linkedin" : "https://www.linkedin.com/in/Parsons-David/",
  "github" : "https://github.com/Parsons-David"
};
