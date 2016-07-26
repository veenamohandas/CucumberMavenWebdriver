package com.cucumber.pageObject;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.conf.Config;

public class Basepage {
	protected WebDriver driver;
	protected String pageUrl;

	public Basepage(WebDriver driver, String pageUrl) {
		// TODO Auto-generated constructor stub
		this.driver = driver;
		this.pageUrl = Config.baseUrl + pageUrl;
		//System.out.println("Constructor of Base page object is invoked");

	}
	


	public void goToPageUrl() {
		driver.get(pageUrl);
	}

	public void closeBrowser() {
		driver.close();
		driver = null;
	}

	public String getCurrentBrowserUrl() {
		return driver.getCurrentUrl();
	}

	public String getPageUrl() {
		return pageUrl;
	}

	public void navigateBack() {
		driver.navigate().back();
	}

	public void prsenceOfElement(WebElement str) {
		WebDriverWait wait = new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.visibilityOf(str));

	}

	public void presenceOfElements(List<WebElement> we) {
		for (int i = 0; i < 10; i++) {
			WebDriverWait wait = new WebDriverWait(driver, 50);
			wait.until(ExpectedConditions.visibilityOf(we.get(i)));
		}
	}

	public String newWindowHandle() throws InterruptedException {
		String currentWindowHandle = this.getCurrentWindowHandle();
		ArrayList<String> windowHandles = new ArrayList<String>(
				driver.getWindowHandles());

		for (String window : windowHandles) {
			if (window != currentWindowHandle)
				return window;
		}
		return "No new Handle";
	}

	public String getCurrentWindowHandle() {
		return driver.getWindowHandle();
	}

	public void switchToNewWindow(String handle) {
		driver.switchTo().window(handle);
	}

	public void scrollDown() {
		JavascriptExecutor javascript = (JavascriptExecutor) driver;
		javascript.executeScript("window.scrollBy(0,100)", "");

	}
}
