package com.cucumber.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverFactory {

	public static WebDriver driver = null;
	public static String browser;

	public static boolean startWebdriver(String browserName) {
		browser = browserName;
		try {
			if (browserName.equalsIgnoreCase("firefox")) {
				driver = new FirefoxDriver();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

		if (driver == null)
			return false;
		return true;

	}

	public static WebDriver getCurrentDriver() {

		return driver;
	}
	
	public static WebDriver driverReopen(){
		if(driver==null)
		startWebdriver(browser);
		else
			System.out.println("Driver is already alive");
		return driver;
	}

	public static void closeWebdriver() {
		if (driver != null)
			try {
				driver.quit();

			} catch (Exception e) {
				e.printStackTrace();
			}

	}

}
