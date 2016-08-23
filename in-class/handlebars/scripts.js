"use strict"

let entryData = {
  title: 'This is the title of my new post',
  body: 'This is the body of my new post',
  author_first_name: "Matt",
  author_last_name: "Kraatz",
  date: "February 25, 1989",
  tags: [
    {
      category: "technology",
      name: "handlebars"
    },
    {
      category: "test",
      name: "again"
    }
  ]
}


// ADDING A PARTIAL FOR REFERENCE IN TEMPLATES

// Register a partial, do the same compilation and data injection
let tagline = $("#tagline-partial").html();
let taglineTemplate = Handlebars.compile(tagline);
let taglineHTML = taglineTemplate(entryData);
// Then, hold on to the partial until it's called in another template
Handlebars.registerPartial("tagline",taglineHTML);


// CREATING A HELPER FUNCTION TO REFERENCE IN TEMPLATES
Handlebars.registerHelper("inc", function(value, options) {
  return parseInt(value) + 1;
})

// BASIC FUNCTIONALITY

// Grab the template
let source = $("#entry-template").html();

// Compile the template into a function
let template = Handlebars.compile(source);

// Inject our data into the template function
let html = template(entryData);

// Print the output to the DOM
$("#articlesOutput").append(html);
