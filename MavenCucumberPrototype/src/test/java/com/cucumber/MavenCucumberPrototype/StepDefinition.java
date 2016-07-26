package com.cucumber.MavenCucumberPrototype;

import java.util.List;

import junit.framework.Assert;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.pageObject.HomePage;
import com.cucumber.pageObject.SearchPage;
import com.cucumber.utils.DriverFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	WebDriver driver;
	HomePage homePage;
	SearchPage searchPage;

	public StepDefinition() {
		this.driver = DriverFactory.getCurrentDriver();
		homePage = PageFactory.initElements(driver, HomePage.class);
		searchPage = PageFactory.initElements(driver, SearchPage.class);
	}

	@SuppressWarnings("deprecation")
	@Given("^I am on unibet home page$")
	public void I_am_on_unibet_home_page() throws Throwable {
		homePage.goToPageUrl();
		Assert.assertEquals(driver.getCurrentUrl(), homePage.getPageUrl());
		//System.out.println("I am on unibet page");
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see Search icon on the right hand side$")
	public void I_should_be_able_to_see_Search_icon_on_the_right_hand_side()
			throws Throwable {
		boolean iconPresent = homePage.getSearchIcon().isDisplayed();
		Assert.assertEquals(true, iconPresent);

	}

	@When("^I mousehover on the search icon$")
	public void I_mouseover_on_the_search_icon() throws Throwable {
		homePage.mouseHover();
		Thread.sleep(5000);
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see textbox and search button$")
	public void I_should_be_able_to_see_textbox_and_button() throws Throwable {
		boolean textPresent = homePage.isTextboxDisplayed();
		boolean buttonPresent = homePage.isSearchButtonDisplayed();
		Assert.assertEquals(true, textPresent);
		Assert.assertEquals(true, buttonPresent);
	}

	@When("^I click on the search icon$")
	public void i_click_on_the_search_icon() throws Throwable {
		homePage.clickSearchIcon();
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see textfox first and then search button$")
	public void i_should_be_able_to_see_textfox_first_and_then_search_button()
			throws Throwable {
		int xText = homePage.getCoordinatesTextbox();
		int xButton = homePage.getCoordinatesSearchButton();
		Assert.assertTrue(xText < xButton);

	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see search button color as yellow and textcolr as black$")
	public void i_should_be_able_to_see_search_button_color_as_yellow()
			throws Throwable {
		String bgColor = homePage.getBackgroundColor();
		Assert.assertEquals(bgColor, "rgba(254, 200, 0, 1)");
		String textColor = homePage.getTextColor();
		Assert.assertEquals(textColor, "rgba(51, 51, 51, 1)");

	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see text search on the search button$")
	public void i_should_be_able_to_see_text_search_on_the_search_button()
			throws Throwable {
		Assert.assertEquals(homePage.getButtonText(), "Search");
	}

	@When("^I enter \"(.*?)\" on search text box$")
	public void i_enter_on_search_text_box(String keyword) throws Throwable {
		homePage.typeText(keyword);
	}

	@When("^I click on Search button$")
	public void i_click_on_Search_button() throws Throwable {
		homePage.clickSearchButton();
		Thread.sleep(3000);
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be on search results page$")
	public void i_should_be_on_search_results_page() throws Throwable {
		Assert.assertTrue(searchPage.searchResultsIsDispalyed());
	}

	@Then("^I should be able to see the \"(.*?)\" in either description or header of the search results\\.$")
	public void i_should_be_able_to_see_the_keyword_in_either_description_or_header_of_the_search_results(
			String keyword) throws Throwable {
		// Assert.assertTrue(homePage.getTextFirstResult().contains(keyword));
		searchPage.resultComparison(keyword);
	}

	@When("^I click on Enter key in keyboard$")
	public void i_click_on_Enter_key_in_keyboard() throws Throwable {
		homePage.pressingEnter();
	}

	@Then("^I should be able to see \"(.*?)\" text in search results page$")
	public void i_should_be_able_to_see_Showing_results_for_text_in_search_results_page(
			String arg1) throws Throwable {
		Assert.assertEquals((arg1), searchPage.showingResults());
		// Assert.assertEquals(arg1, homePage.showingResultsLink(arg1));
	}

	@And("^I should be able to see \"(.*?)\" text in the search results page$")
	public void i_should_be_able_to_see_Search_instead_for_text_in_search_results_page(
			String arg1) throws Throwable {
		Assert.assertEquals(arg1, searchPage.searchInstead());
		Thread.sleep(1000);
		// Assert.assertEquals(arg1, homePage.searchInsteadLink(arg1));

	}

	@When("^I click on \"(.*?)\" link$")
	public void i_click_on_link(String arg1) throws Throwable {
		searchPage.showingResultsLinkClick(arg1);
		Thread.sleep(3000);
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be on search results page of \"(.*?)\"$")
	public void i_should_be_on_search_results_page_of(String arg1)
			throws Throwable {
		Assert.assertTrue(searchPage.searchResultsIsDispalyed());
		searchPage.resultComparison(arg1);
		Thread.sleep(1000);
	}

	@When("^I navigate back to Unibet home page$")
	public void i_navigate_back_to_Unibet_home_page() throws Throwable {
		homePage.navigateBack();
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be on \"(.*?)\" page$")
	public void i_should_be_on_No_Results_page(String arg1) throws Throwable {
		Assert.assertTrue(searchPage.noResultsPage().equals(arg1));
	}

	@And("^I should be able to click on search result links$")
	public void i_click_on_the_links_in_the_search_results_page()
			throws Throwable {
		searchPage.allResultLink();

	}

	@Then("^I should navigate to proper page$")
	public void i_should_navigate_to_proper_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// throw new PendingException();
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see maximum \"(.*?)\" results in the Page\\.$")
	public void i_should_be_able_to_see_maximum_results_in_the_Page(String arg1)
			throws Throwable {
		Assert.assertTrue(searchPage.totalResultCount().toString().equals(arg1));
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be able to see maximum \"(.*?)\" pages of reults\\.$")
	public void i_should_be_able_to_see_maximum_pages_of_reults(String arg1)
			throws Throwable {
		Assert.assertTrue(searchPage.numberOfResultPages().toString()
				.equals(arg1));
	}

	@When("^I click on the \"(.*?)\" page$")
	public void i_click_on_the_page(String arg1) throws Throwable {
		searchPage.clickNextLink(arg1);

	}

	@SuppressWarnings("deprecation")
	@Then("^I should be landed on \"(.*?)\" page$")
	public void i_should_be_landed_on_no_results_page(String arg)
			throws Throwable {
		Assert.assertTrue(searchPage.noResultsInvalidString().equals(arg));
	}

	@SuppressWarnings("deprecation")
	@Then("^I should be on same page$")
	public void i_should_be_on_same_page() {
		Assert.assertTrue(homePage.getCurrentBrowserUrl().equals(
				homePage.getPageUrl()));
	}

	@When("^I enter two space on the search text box$")
	public void enter_space() {
		homePage.enterSpace();
		homePage.enterSpace();
	}

	@Then("^I should be able to match the result \"(.*?)\" in either description or header of the search results\\.$")
	public void i_should_be_able_to_match_the_result_in_either_description_or_header_of_the_search_results(
			String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String[] searchword = arg1.split(",");
		
		Assert.assertTrue(searchPage.resultMatch(searchword));

	}

}
