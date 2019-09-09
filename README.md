<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->

# TROPHY HUNTER
link to live site: https://trophyhunter.herokuapp.com/

## Collaborators
* **Alyssa Monera**
* **Jiha Hwang**

## About
This app allows users to publish and share their own guides for specific video games.

## Tech used

* Rails
* React
* PostgreSQL
* Local storage


## User Stories

* Users will be able to add game guides.
* Users will be able to view a list of available game guides.
* Users will be able to click on any game guide to view more information.
* Users will be able to edit and delete their guides.
* Users will be able to save guides as favorites. (They will be displayed in the sidebar.)

## Challenges
* We tried to implement a rich-text editor, but there was something in the code for the tool (react-quill) that worked in development but not in production. We ended up just using a regular textarea. That being said, we did manage to make each post render as HTML, so we could have line breaks in each post.
* Figuring out how to display a show page also took some time. We ended up mixing in some of the earlier lessons with the most recent grapevine lesson - adding a currentGuide object to the app on top of a guide array.

## Future Improvements
* Working tags
* Rich text editor
* Search bar
* Authentication
