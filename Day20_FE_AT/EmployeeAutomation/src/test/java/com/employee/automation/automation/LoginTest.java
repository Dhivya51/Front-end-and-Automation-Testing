package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {

    @Test(priority = 1)
    public void login() throws Exception {

        // Open Landing Page
        driver.get("http://localhost:5173");

        Thread.sleep(2000);

        // Click Admin Login
        driver.findElement(By.className("admin-btn")).click();

        Thread.sleep(2000);

        // Enter Username
        driver.findElement(By.id("username")).sendKeys("admin");

        // Enter Password
        driver.findElement(By.id("password")).sendKeys("admin123");

        // Click Login
        driver.findElement(By.id("loginBtn")).click();

        Thread.sleep(3000);

        System.out.println("Admin Login Successful");
    }
}