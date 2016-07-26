$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "id": "search-functionality-testing",
  "description": "As a customer of unibet \nI should be able to use search functionality\nI will be able to find proper search result.",
  "name": "Search Functionality Testing",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "search-functionality-testing;checking-whether-search-icon-is-displayed-or-not-in-unibet-home-page",
  "tags": [
    {
      "name": "@search",
      "line": 6
    }
  ],
  "description": "",
  "name": "Checking whether search icon is displayed or not in Unibet Home page",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I should be able to see textbox and search button",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "I click on the search icon",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I should be able to see textbox and search button",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 16516301000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 12515430000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_should_be_able_to_see_textbox_and_button()"
});
formatter.result({
  "duration": 91921000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_the_search_icon()"
});
formatter.result({
  "duration": 181207000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_should_be_able_to_see_textbox_and_button()"
});
formatter.result({
  "duration": 79976000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;checking-the-order-of-textbox-and-search-button-in-unibet-home-page",
  "tags": [
    {
      "name": "@search",
      "line": 14
    }
  ],
  "description": "",
  "name": "Checking the order of textbox and search button in Unibet Home Page",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I should be able to see textfox first and then search button",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 3192070000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10425920000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_able_to_see_textfox_first_and_then_search_button()"
});
formatter.result({
  "duration": 158755000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-the-color-and-text-of-search-button-in-unibet-home-page",
  "tags": [
    {
      "name": "@search",
      "line": 20
    }
  ],
  "description": "",
  "name": "Verifying the color and text of search button in Unibet Home Page",
  "keyword": "Scenario",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 22
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I should be able to see search button color as yellow and textcolr as black",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I should be able to see text search on the search button",
  "keyword": "And ",
  "line": 25
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 1638700000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10205896000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_able_to_see_search_button_color_as_yellow()"
});
formatter.result({
  "duration": 80415000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_able_to_see_text_search_on_the_search_button()"
});
formatter.result({
  "duration": 23614000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-the-validaty-of-search-result-by-clicking-on-search-button.",
  "tags": [
    {
      "name": "@search",
      "line": 27
    }
  ],
  "description": "",
  "name": "Verifying the validaty of search result by clicking on search button.",
  "keyword": "Scenario",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 30
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 31
});
formatter.step({
  "name": "I enter \"Golf\" on search text box",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 33
});
formatter.step({
  "name": "I should be on search results page",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I should be able to see the \"Golf\" in either description or header of the search results.",
  "keyword": "And ",
  "line": 35
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 1832845000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10429331000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 352575000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 5701245000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_on_search_results_page()"
});
formatter.result({
  "duration": 130097000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_the_keyword_in_either_description_or_header_of_the_search_results(String)"
});
formatter.result({
  "duration": 2388518000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-the-validaty-of-search-result-when-the-search-words-are-having-diffrent-meanings.",
  "tags": [
    {
      "name": "@search",
      "line": 36
    }
  ],
  "description": "",
  "name": "Verifying the validaty of search result when the search words are having diffrent meanings.",
  "keyword": "Scenario",
  "line": 37,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 38
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 39
});
formatter.step({
  "name": "I enter \"US sports\" on search text box",
  "keyword": "When ",
  "line": 40
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 41
});
formatter.step({
  "name": "I should be on search results page",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I should be able to match the result \"US,sport,America\" in either description or header of the search results.",
  "keyword": "And ",
  "line": 43
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 1562585000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10269926000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US sports",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 134942000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4478866000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_on_search_results_page()"
});
formatter.result({
  "duration": 77669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US,sport,America",
      "offset": 38
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_match_the_result_in_either_description_or_header_of_the_search_results(String)"
});
formatter.result({
  "duration": 3418782000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-the-validaty-of-search-result-by-pressing-enter-key-and-clicking-on-the-result-links.",
  "tags": [
    {
      "name": "@search",
      "line": 45
    }
  ],
  "description": "",
  "name": "Verifying the validaty of search result by pressing enter key and clicking on the result links.",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 47
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 48
});
formatter.step({
  "name": "I enter \"Football\" on search text box",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I click on Enter key in keyboard",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I should be on search results page",
  "keyword": "Then ",
  "line": 51
});
formatter.step({
  "name": "I should be able to see the \"Football\" in either description or header of the search results.",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "I should be able to click on search result links",
  "keyword": "And ",
  "line": 53
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 4140054000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10361378000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 125841000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Enter_key_in_keyboard()"
});
formatter.result({
  "duration": 100528000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_on_search_results_page()"
});
formatter.result({
  "duration": 1372452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_the_keyword_in_either_description_or_header_of_the_search_results(String)"
});
formatter.result({
  "duration": 2382594000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_the_links_in_the_search_results_page()"
});
formatter.result({
  "duration": 29522040000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-maximum-number-of-results-in-the-first-page-is-\"10\"",
  "tags": [
    {
      "name": "@search",
      "line": 55
    }
  ],
  "description": "",
  "name": "Verifying maximum number of results in the first page is \"10\"",
  "keyword": "Scenario",
  "line": 56,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 57
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 58
});
formatter.step({
  "name": "I enter \"Football\" on search text box",
  "keyword": "When ",
  "line": 59
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 61
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 5987785000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10223128000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 378132000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4842351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 130892000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-maximum-number-of-results-page-is-\"10\"",
  "tags": [
    {
      "name": "@search",
      "line": 63
    }
  ],
  "description": "",
  "name": "Verifying maximum number of results page is \"10\"",
  "keyword": "Scenario",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 65
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 66
});
formatter.step({
  "name": "I enter \"Football\" on search text box",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 68
});
formatter.step({
  "name": "I should be able to see maximum \"10\" pages of reults.",
  "keyword": "Then ",
  "line": 69
});
formatter.step({
  "name": "I click on the \"1\" page",
  "keyword": "When ",
  "line": 70
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 71
});
formatter.step({
  "name": "I click on the \"2\" page",
  "keyword": "When ",
  "line": 72
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "I click on the \"3\" page",
  "keyword": "When ",
  "line": 74
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 75
});
formatter.step({
  "name": "I click on the \"4\" page",
  "keyword": "When ",
  "line": 76
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 77
});
formatter.step({
  "name": "I click on the \"5\" page",
  "keyword": "When ",
  "line": 78
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 79
});
formatter.step({
  "name": "I click on the \"6\" page",
  "keyword": "When ",
  "line": 80
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 81
});
formatter.step({
  "name": "I click on the \"7\" page",
  "keyword": "When ",
  "line": 82
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 83
});
formatter.step({
  "name": "I click on the \"8\" page",
  "keyword": "When ",
  "line": 84
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 85
});
formatter.step({
  "name": "I click on the \"9\" page",
  "keyword": "When ",
  "line": 86
});
formatter.step({
  "name": "I should be able to see maximum \"10\" results in the Page.",
  "keyword": "Then ",
  "line": 87
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 1945507000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10245345000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 179294000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4449103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_pages_of_reults(String)"
});
formatter.result({
  "duration": 1350895000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 158855000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 701508000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 73738000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 514117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 66126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 505138000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 92534000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 503016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 84315000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 500258000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 74568000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 458569000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 95285000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 493907000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 65062000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 470133000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_click_on_the_page(String)"
});
formatter.result({
  "duration": 55978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_maximum_results_in_the_Page(String)"
});
formatter.result({
  "duration": 450978000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-the-correct-spelling-for-misspeld-words-in-search-results-page",
  "tags": [
    {
      "name": "@search",
      "line": 89
    }
  ],
  "description": "",
  "name": "Verifying the correct spelling for misspeld words in search results page",
  "keyword": "Scenario",
  "line": 90,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 91
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 92
});
formatter.step({
  "name": "I enter \"Gofl\" on search text box",
  "keyword": "When ",
  "line": 93
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 94
});
formatter.step({
  "name": "I should be able to see \"Showing results for Golf\" text in search results page",
  "keyword": "Then ",
  "line": 95
});
formatter.step({
  "name": "I should be able to see \"Search instead for Gofl\" text in the search results page",
  "keyword": "And ",
  "line": 96
});
formatter.step({
  "name": "I click on \"Golf\" link",
  "keyword": "When ",
  "line": 97
});
formatter.step({
  "name": "I should be on search results page of \"Golf\"",
  "keyword": "Then ",
  "line": 98
});
formatter.step({
  "name": "I navigate back to Unibet home page",
  "keyword": "When ",
  "line": 99
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 100
});
formatter.step({
  "name": "I enter \"Gofl\" on search text box",
  "keyword": "When ",
  "line": 101
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 102
});
formatter.step({
  "name": "I should be able to see \"Showing results for Golf\" text in search results page",
  "keyword": "Then ",
  "line": 103
});
formatter.step({
  "name": "I should be able to see \"Search instead for Gofl\" text in the search results page",
  "keyword": "And ",
  "line": 104
});
formatter.step({
  "name": "I click on \"Gofl\" link",
  "keyword": "When ",
  "line": 105
});
formatter.step({
  "name": "I should be on \"No Results\" page",
  "keyword": "Then ",
  "line": 106
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 2975738000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10733300000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gofl",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 176374000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4911038000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Showing results for Golf",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_Showing_results_for_text_in_search_results_page(String)"
});
formatter.result({
  "duration": 178961000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search instead for Gofl",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_Search_instead_for_text_in_search_results_page(String)"
});
formatter.result({
  "duration": 1190818000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on_link(String)"
});
formatter.result({
  "duration": 5299894000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_should_be_on_search_results_page_of(String)"
});
formatter.result({
  "duration": 3582308000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_navigate_back_to_Unibet_home_page()"
});
formatter.result({
  "duration": 292441000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 11934556000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gofl",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 157262000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4623305000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Showing results for Golf",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_Showing_results_for_text_in_search_results_page(String)"
});
formatter.result({
  "duration": 146687000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search instead for Gofl",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_should_be_able_to_see_Search_instead_for_text_in_search_results_page(String)"
});
formatter.result({
  "duration": 1160298000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gofl",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on_link(String)"
});
formatter.result({
  "duration": 3327098000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Results",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_should_be_on_No_Results_page(String)"
});
formatter.result({
  "duration": 901461000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-\"no-results\"-page-is-displaying-for-invalid-string-search",
  "tags": [
    {
      "name": "@search",
      "line": 108
    }
  ],
  "description": "",
  "name": "Verifying \"No Results\" page is displaying for invalid string search",
  "keyword": "Scenario",
  "line": 109,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 110
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 111
});
formatter.step({
  "name": "I enter \"()()()()\" on search text box",
  "keyword": "When ",
  "line": 112
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 113
});
formatter.step({
  "name": "I should be landed on \"No Results\" page",
  "keyword": "Then ",
  "line": 114
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 1762252000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10403376000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "()()()()",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_enter_on_search_text_box(String)"
});
formatter.result({
  "duration": 182791000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 6254872000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Results",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_should_be_landed_on_no_results_page(String)"
});
formatter.result({
  "duration": 115980000,
  "status": "passed"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-user-is-on-the-same-page-while-clicking-on-search-button-without-enetring-text",
  "tags": [
    {
      "name": "@searchfail",
      "line": 116
    }
  ],
  "description": "",
  "name": "Verifying user is on the same page while clicking on search button without enetring text",
  "keyword": "Scenario",
  "line": 117,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 118
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 119
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 120
});
formatter.step({
  "name": "I should be on same page",
  "keyword": "Then ",
  "line": 121
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 2710611000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10237295000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4644106000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_on_same_page()"
});
formatter.result({
  "duration": 19498000,
  "status": "failed",
  "error_message": "junit.framework.AssertionFailedError\n\tat junit.framework.Assert.fail(Assert.java:55)\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\n\tat com.cucumber.MavenCucumberPrototype.StepDefinition.i_should_be_on_same_page(StepDefinition.java:210)\n\tat ✽.Then I should be on same page(myFeature.feature:121)\n"
});
formatter.scenario({
  "id": "search-functionality-testing;verifying-user-is-on-the-same-page-while-clicking-on-the-search-button-after-entering-space",
  "tags": [
    {
      "name": "@searchfail",
      "line": 123
    }
  ],
  "description": "",
  "name": "Verifying user is on the same page while clicking on the search button after entering space",
  "keyword": "Scenario",
  "line": 124,
  "type": "scenario"
});
formatter.step({
  "name": "I am on unibet home page",
  "keyword": "Given ",
  "line": 125
});
formatter.step({
  "name": "I mousehover on the search icon",
  "keyword": "When ",
  "line": 126
});
formatter.step({
  "name": "I enter two space on the search text box",
  "keyword": "When ",
  "line": 127
});
formatter.step({
  "name": "I click on Search button",
  "keyword": "When ",
  "line": 128
});
formatter.step({
  "name": "I should be on same page",
  "keyword": "Then ",
  "line": 129
});
formatter.match({
  "location": "StepDefinition.I_am_on_unibet_home_page()"
});
formatter.result({
  "duration": 4989503000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.I_mouseover_on_the_search_icon()"
});
formatter.result({
  "duration": 10278353000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.enter_space()"
});
formatter.result({
  "duration": 129993000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Search_button()"
});
formatter.result({
  "duration": 4639998000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_be_on_same_page()"
});
formatter.result({
  "duration": 17577000,
  "status": "failed",
  "error_message": "junit.framework.AssertionFailedError\n\tat junit.framework.Assert.fail(Assert.java:55)\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\n\tat com.cucumber.MavenCucumberPrototype.StepDefinition.i_should_be_on_same_page(StepDefinition.java:210)\n\tat ✽.Then I should be on same page(myFeature.feature:129)\n"
});
});