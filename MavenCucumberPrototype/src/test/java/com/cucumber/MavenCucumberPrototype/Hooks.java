package com.cucumber.MavenCucumberPrototype;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	//@Before("@search")
	public void beforeSearch() {
		
	 System.out.println("hooks before Search tag");
	}
	
	//@Before("@abc")
	public void beforeAbc() {
	 System.out.println("hooks before ABC tag");
	}
	
	//@After("@search")
	public void afterSearch(){
		System.out.println("hooks after search");
	}
	//@After("@abc")
	public void afterAbc(){
		System.out.println("hook after abc");
	}

}
