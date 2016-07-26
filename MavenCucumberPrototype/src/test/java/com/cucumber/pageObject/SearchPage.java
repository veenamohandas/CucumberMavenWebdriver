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
public class SearchPage extends Basepage {
	private static final String pageUrl = "";

	private static final String String = null;

	public SearchPage(WebDriver driver) {
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

	public boolean searchResultsIsDispalyed() {
		return searchResults.isDisplayed();
	}

	public String getTextFirstResult() {
		return firstSearchResult.getText();
	}

	@SuppressWarnings("deprecation")
	public void resultComparison(String str1) {
		// String[] str2 = str1.split("\\b+");
		for (int i = 0; i < allResult.size(); i++) {

			Assert.assertTrue(allResult.get(i).getText().contains(str1));
			// System.out.println(allResult.get(i).getText());
			// Assert.assertTrue(allElements.get(i).getText().contains(str1),
			// "Search result validation failed at instance [ + i + ].");
		}
	}

	@SuppressWarnings("deprecation")
	public boolean resultMatch(String[] match) {
		boolean flag = true;
		boolean isPresent;
		for (WebElement elm : allResult) {
			isPresent = false;
			for (String string : match) {

				if (elm.getText().contains(string)) {
					isPresent = true;
				}

			}
			flag = flag && isPresent;

		}
		return flag;

	}

	public String showingResults() {
		return showResultText.getText();
	}

	public String showingResultsLink(String str1) {
		return showResultLink.getText();
	}

	public String searchInstead() {
		return searchInsteadText.getText();
	}

	public String searchInsteadLink(String str1) {
		return searchInsteadLink.getText();
	}

	public void showingResultsLinkClick(String str) throws InterruptedException {
		// System.out.println(showResultLink.getText());
		if (str.equals(showResultLink.getText())) {
			showResultLink.click();
			Thread.sleep(2000);
		} else
			searchInsteadLink.click();
	}

	public void allResultLink() throws InterruptedException {
		String currentWindowHandle = this.getCurrentWindowHandle();
		// System.out.println(linksofAllResults.size());
		for (WebElement webElement : linksofAllResults) {
			webElement.click();
			scrollDown();
		}
	}

	public Integer totalResultCount() {
		// System.out.println(allResult.size());
		return allResult.size();
	}

	public String noResultsPage() {
		return noResultsPage.getText();
	}

	public Integer numberOfResultPages() {
		return numberOfResultPages.size();
	}

	public void clickNextLink(String arg1) {
		// System.out.println(numberOfResultPages.get(Integer.parseInt(arg1))
		// .getText());
		// ;
		// System.out.println(numberOfResultPages.size());
		// for (int i=0;i<10;i++) {
		// if(numberOfResultPages.get(i).getText().equals(arg1))
		// ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
		// numberOfResultPages.get(Integer.parseInt(arg1)));
		// }
		((JavascriptExecutor) driver).executeScript("arguments[0].click();",
				numberOfResultPages.get(Integer.parseInt(arg1)));
	}

	public String noResultsInvalidString() {
		return noResultsInvalidString.getText();
	}

}