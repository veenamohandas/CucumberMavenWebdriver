package com.cucumber.pageObject;

import java.util.List;

import junit.framework.Assert;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

//public class HomePage extends Basepage {
public class HomePage extends Basepage {
	private static final String pageUrl = "";

	private static final String String = null;

	public HomePage(WebDriver driver) {
		super(driver, pageUrl);

	}

	@FindBy(how = How.XPATH, using = "//*[@id='topnav']/nav/div[3]/div/div/div[3]/ul/li[1]")
	WebElement searchIcon;

	@FindBy(how = How.ID, using = "cse-search-input-box-id")
	WebElement textBox;

	@FindBy(how = How.CLASS_NAME, using = "searchButton")
	WebElement searchButton;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div")
	@CacheLookup
	WebElement searchResults;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[1]/div[1]/table/tbody/tr/td[2]")
	@CacheLookup
	WebElement firstSearchResult;

	@FindBy(xpath = "//td[contains(@class,'gsc-table-cell-snippet-close')]")
	List<WebElement> allResult;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[1]/div/div[1]")
	WebElement showResultText;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[1]/div/div[1]/a/b/i")
	WebElement showResultLink;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[1]/div/div[2]")
	WebElement searchInsteadText;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[1]/div/div[2]/a/b/i")
	WebElement searchInsteadLink;

	@FindBy(how = How.XPATH, using = "//*[@id='cookie-notification']/div/a")
	WebElement cookieCloseButton;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[2]/div[2]/div[1]/table/tbody/tr/td[2]/div[1]/a")
	WebElement resultLink;

	@FindBy(xpath = "//div[@class='gs-title gsc-table-cell-thumbnail gsc-thumbnail-left']/following::a")
	List<WebElement> allResultsLinks;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[2]/div/div")
	WebElement noResultsPage;

	@FindBy(how = How.XPATH, using = "//*[@id='cse']/div/div/div/div[5]/div[2]/div/div/div[1]/div")
	WebElement noResultsInvalidString;

	@FindBy(how = How.CSS, using = " div.gs-webResult.gs-result > table > tbody > tr > td.gsc-table-cell-snippet-close > div.gs-title.gsc-table-cell-thumbnail.gsc-thumbnail-left > a")
	List<WebElement> linksofAllResults;

	@FindBy(how = How.CSS, using = "div.gsc-cursor>div")
	List<WebElement> numberOfResultPages;

	@FindBy(how = How.CSS, using = "header >div.clearfix category tags > a > span")
	WebElement newTabText;

	public WebElement getSearchIcon() {
		return searchIcon;
	};

	public boolean isSearchIconDisplayed() {
		return searchIcon.isDisplayed();
	}

	public WebElement getTextbox() {
		return textBox;
	};

	public boolean isTextboxDisplayed() {
		return textBox.isDisplayed();
	}

	public WebElement getSearchButton() {
		return searchButton;
	};

	public boolean isSearchButtonDisplayed() {
		return searchButton.isDisplayed();
	}

	public void mouseHover() throws InterruptedException {
		if (cookieCloseButton.isDisplayed() == true)
			cookieCloseButton.click();
		Thread.sleep(5000);
		Actions action = new Actions(driver);
		action.moveToElement(searchIcon).build().perform();
	}

	public void clickSearchIcon() {
		searchIcon.click();
	}

	public String getBackgroundColor() {
		return searchButton.getCssValue("background-color");
	}

	public String getTextColor() {
		return searchButton.getCssValue("color");
	}

	public String getButtonText() {
		return searchButton.getAttribute("value");
	}

	public void typeText(String text) {
		prsenceOfElement(textBox);
		textBox.sendKeys(text);
	}

	public void clickSearchButton() {
		searchButton.click();
	}

	public int getCoordinatesTextbox() {
		Point point = textBox.getLocation();
		int xcord = point.getX();
		return xcord;

	}

	public int getCoordinatesSearchButton() {
		Point point = searchButton.getLocation();
		int xcord = point.getX();
		return xcord;

	}
	public void pressingEnter() {
		// driver.fi
		searchButton.sendKeys(Keys.ENTER);
		// System.out.println(allResult.size());
	}
	public void enterSpace() {
		textBox.sendKeys(Keys.SPACE);
	}


	}