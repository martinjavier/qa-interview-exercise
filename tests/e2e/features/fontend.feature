@e2e
Feature: Partners E2E test
    As a user
    I want to test
    the partners funcionality

    @VerifyMainMenu
    Scenario: Test AXA web application is open
        Given I open the web application on the browser
        Then Main title should be visible
        Then Services Menu should be visible
        Then About Menu should be visible
        Then Contact Menu should be visible
        Then Wildfire Menu should be visible
        Then Open Services Menu
        Then Close the Browser
        
    @CompleteAllTheSteps
    Scenario: Complete all the required steps
        Given I open the web application
        Then Select Meet Our Preferred Partners option
        Then Select the Computer Vision Hazard Detection checkbox
        Then Verify if Computer Vision Hazard Detection card is visible
        Then Verify just two cards are visible
        Then Click On Reset All button
        Then Input Genda$ into the Search field
        Then Clean the Search Field
        Then Input Genda into the Search field
        Then Click On Search Button
        Then Click On Read More Link
        Then Click On Submit Your Message Button
        Then Verify Form Multiple Errors
        Then Input User Name On Request An Introduction Form
        Then Input Invalid Email On Request An Introduction Form
        Then Click On Submit Your Message Button
        Then Verify Email Invalid Format Error Message
        Then Input Invalid Name On Request An Introduction Form
        Then Click On Submit Your Message Button
        Then Verify Invalid Name Format Error Message
        Then Input Invalid Message On Request An Introduction Form
        Then Click On Submit Your Message Button
        Then Verify Invalid Message Format Error Message
        Then Input Name On Request An Introduction Form
        Then Input Email On Request An Introduction Form
        Then Select Country On Request An Introduction Form
        Then Input Message On Request An Introduction Form
        Then Close the Browser
