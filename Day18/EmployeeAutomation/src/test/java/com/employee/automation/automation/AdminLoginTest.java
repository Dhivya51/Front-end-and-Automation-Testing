package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class AdminLoginTest extends BaseTest {

    @Test
    public void adminLoginTest() throws Exception {

        driver.get("http://localhost:5173/admin-login");

        driver.findElement(By.name("username")).sendKeys("admin");

        driver.findElement(By.name("password")).sendKeys("admin123");

        driver.findElement(By.cssSelector("button[type='submit']")).click();

        Thread.sleep(2000);

        driver.switchTo().alert().accept();

        Thread.sleep(2000);

        Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"));

        System.out.println("Admin Login Test Passed");
    }
}