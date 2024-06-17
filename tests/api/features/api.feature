@api
Feature: E2E test manage notes


    @testExample2
    Scenario: Check health API notice service
        Given The user execute a GET to the "health-check" endpoint
        Then The response status code is "200" successful
        And The response message is "Notes API is Running"

    @loginUser
    Scenario: Check user login process
        Given The user execute a POST to the "users" endpoint for login with "martin@gmail.com" user and "ClaveSecreta" password
        Then The response status code is "200" successful
        And The response message is "Login successful"

    @getProfileInformation
    Scenario: Check the getting of profile information
        Given The user execute a GET to the "users/profile" endpoint in order to get profile information
        Then The response status code is "200" successful
        And The response message is "Login successful"

