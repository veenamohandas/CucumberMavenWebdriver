Feature: Search Functionality Testing
  As a customer of unibet 
  I should be able to use search functionality
  I will be able to find proper search result.

  @search
  Scenario: Checking whether search icon is displayed or not in Unibet Home page
    Given I am on unibet home page
    When I mousehover on the search icon
    Then I should be able to see textbox and search button
    When I click on the search icon
    Then I should be able to see textbox and search button

  @search
  Scenario: Checking the order of textbox and search button in Unibet Home Page
    Given I am on unibet home page
    When I mousehover on the search icon
    Then I should be able to see textfox first and then search button

  @search
  Scenario: Verifying the color and text of search button in Unibet Home Page
    Given I am on unibet home page
    When I mousehover on the search icon
    Then I should be able to see search button color as yellow and textcolr as black
    And I should be able to see text search on the search button

    @search
  
  Scenario: Verifying the validaty of search result by clicking on search button.
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "Golf" on search text box
    When I click on Search button
    Then I should be on search results page
    And I should be able to see the "Golf" in either description or header of the search results.
@search
  Scenario: Verifying the validaty of search result when the search words are having diffrent meanings.
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "US sports" on search text box
    When I click on Search button
    Then I should be on search results page
    And I should be able to match the result "US,sport,America" in either description or header of the search results.

  @search
  Scenario: Verifying the validaty of search result by pressing enter key and clicking on the result links.
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "Football" on search text box
    When I click on Enter key in keyboard
    Then I should be on search results page
    And I should be able to see the "Football" in either description or header of the search results.
    And I should be able to click on search result links

  @search
  Scenario: Verifying maximum number of results in the first page is "10"
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "Football" on search text box
    When I click on Search button
    Then I should be able to see maximum "10" results in the Page.

  @search
  Scenario: Verifying maximum number of results page is "10"
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "Football" on search text box
    When I click on Search button
    Then I should be able to see maximum "10" pages of reults.
    When I click on the "1" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "2" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "3" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "4" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "5" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "6" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "7" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "8" page
    Then I should be able to see maximum "10" results in the Page.
    When I click on the "9" page
    Then I should be able to see maximum "10" results in the Page.

  @search
  Scenario: Verifying the correct spelling for misspeld words in search results page
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "Gofl" on search text box
    When I click on Search button
    Then I should be able to see "Showing results for Golf" text in search results page
    And I should be able to see "Search instead for Gofl" text in the search results page
    When I click on "Golf" link
    Then I should be on search results page of "Golf"
    When I navigate back to Unibet home page
    When I mousehover on the search icon
    When I enter "Gofl" on search text box
    When I click on Search button
    Then I should be able to see "Showing results for Golf" text in search results page
    And I should be able to see "Search instead for Gofl" text in the search results page
    When I click on "Gofl" link
    Then I should be on "No Results" page

  @search
  Scenario: Verifying "No Results" page is displaying for invalid string search
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter "()()()()" on search text box
    When I click on Search button
    Then I should be landed on "No Results" page

  @searchfail
  Scenario: Verifying user is on the same page while clicking on search button without enetring text
    Given I am on unibet home page
    When I mousehover on the search icon
    When I click on Search button
    Then I should be on same page

  @searchfail
  Scenario: Verifying user is on the same page while clicking on the search button after entering space
    Given I am on unibet home page
    When I mousehover on the search icon
    When I enter two space on the search text box
    When I click on Search button
    Then I should be on same page
