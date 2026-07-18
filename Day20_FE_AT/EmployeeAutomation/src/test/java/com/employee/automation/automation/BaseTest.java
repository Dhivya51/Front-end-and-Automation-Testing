package com.employee.automation.automation;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseTest {

    public static WebDriver driver;

    @BeforeSuite
    public void setup() throws Exception {

        WebDriverManager.chromedriver().setup();

        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        driver.get("http://localhost:5173");

        Thread.sleep(2000);

        // Click Admin Login
        driver.findElement(By.xpath("//button[contains(text(),'Admin Login')]")).click();

        Thread.sleep(2000);

        // Login
        driver.findElement(By.id("username")).sendKeys("admin");
        driver.findElement(By.id("password")).sendKeys("admin123");
        driver.findElement(By.id("loginBtn")).click();

        Thread.sleep(3000);

        System.out.println("Login Successful");
    }

    @AfterSuite
    public void tearDown() {

        driver.quit();

        System.out.println("Browser Closed");
    }
}