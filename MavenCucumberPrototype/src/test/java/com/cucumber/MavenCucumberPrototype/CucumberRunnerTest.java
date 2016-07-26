package com.cucumber.MavenCucumberPrototype;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.conf.Config;
import com.cucumber.utils.DriverFactory;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
// format = { "pretty", "html:target/html" }, features = { "src/test/feature" }
// plugin = {"pretty",
// "html:target/cucumber-htmlreport","json:target/cucumber-report.json"}
features = "src/test/feature/", tags = Config.tags, plugin = { "pretty",
		"html:target/cucumber" })

public class CucumberRunnerTest {
	@BeforeClass
	public static void setup() {
		System.out.println("Webdriver is starting Firefox");
		if (!DriverFactory.startWebdriver(Config.browser)) {
			//System.out.println("Webdiver failed to start Firefox");
		}
	}

	@AfterClass
	public static void teardown() {
		DriverFactory.closeWebdriver();
		System.out.println("Execution completed");
	}
}
