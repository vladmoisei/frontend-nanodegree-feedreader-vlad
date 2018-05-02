# Feed Reader Testing
### Udacity Front-End Web Developer Nanodegree Project 4

## Project Overview

It was provided a web-based application that reads RSS feeds. The original developer have included [Jasmine](http://jasmine.github.io/) and even started writing first test suite, but quit without finishing the app's test suite! The challange in this project was to practice test-driven development using [Jasmine](http://jasmine.github.io/) to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Getting started

The starting source code was cloned from: Original [Project assets](http://github.com/udacity/frontend-nanodegree-feedreader).


## Project Requirements

* Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Write a new test suite named `"The menu"`.
* Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Write a test suite named `"Initial Entries"`.
* Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Write a test suite named `"New Feed Selection"`.
* Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
* No test should be dependent on the results of another.
* Callbacks should be used to ensure that feeds are loaded before they are tested.
* Implement error handling for undefined variables and out-of-bound array access.
* When complete - all of your tests should pass.


## Acces to project

* [Link to Project](https://vladmoisei.github.io/frontend-nanodegree-feedreader-vlad/)
