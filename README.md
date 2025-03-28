# D280 JAVASCRIPT PROGRAMMING - Develop an Interactive World Map

## INTRODUCTION

Throughout your career in software engineering, you will be asked to enhance website functionality using JavaScript programming in conjunction with existing frameworks, assets, and web content. For this assessment, you will enhance a website using the Angular JavaScript framework and various application programming interfaces (APIs) by creating a visual interface for a SVG map.

The skills you demonstrate in this task will be useful in responding to technical interview questions for future employment. This website may also be added to your portfolio.

The required integrated development environment (IDE) and APIs for this assignment are MS Visual Studio Code, GeoNames, and Worldbank, found in the Web Links section. Install the IDE and access the APIs using these sources.

## SCENARIO

You are a developer for a state government office. On a previous project, your supervisor asked you to build a website with several pages related to a geographic area in the United States. Now your supervisor wants you to expand on this site and provide a website that provides information on each country in the world.

Your task is to present a map of the world in a scalable vector graphic (SVG) format so that each country is highlighted upon a mouse event. Then you will convert the SVG map into an interactive Angular component and connect the application to API services to provide the country information.

## REQUIREMENTS

A.  Identify an SVG map of the world you will use to provide the visual interface for this project.

B.  Using either the GeoNames or Worldbank API from the Web Links section, identify each of the following six properties for each country:
    - country name (e.g., Chad)
    - country capital (e.g., N’Djamena)
    - country region (e.g., Sub-Saharan Africa)
    - income level (e.g., low income)
    - two additional country properties of your choice

C.  Assign the map component to the default URL using an Angular routing module.

D.  Create an HTML layout with two columns: one column for the map itself and one column to show the required country information from the API in part B.

E.  Convert the SVG map into an interactive Angular component by connecting all the “path” tags inside the SVG file to mouse event handlers so each path is recognized and transmitted to the parent component hosting the map if a mouse event occurs.

F.  Generate an API service that uses the built-in Angular module HTTP client to make HTTP calls and include the following:
    - one method that accepts a country name as an input parameter that returns additional information gathered from the API for the selected country
    - one method that will trigger the API call when a country is selected and set a local variable that will receive the information about the country for display in the right column of the HTML page

G.  Provide a compressed file of your website, including each of the following files:
    - HTML
    - TS
    - SVG
    - JSON configuration files
