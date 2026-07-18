package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class AddEmployeeTest extends BaseTest {

    @Test(priority = 2)

    public void addEmployee() throws Exception {

        driver.get("http://localhost:5173/employees");

        Thread.sleep(2000);

        driver.findElement(By.id("addEmployeeBtn")).click();

        Thread.sleep(1000);

        driver.findElement(By.id("empName"))
                .sendKeys("Anu");

        driver.findElement(By.id("empDepartment"))
                .sendKeys("IT");

        driver.findElement(By.id("empPosition"))
                .sendKeys("Software Engineer");

        driver.findElement(By.id("empEmail"))
                .sendKeys("rahul@gmail.com");

        driver.findElement(By.id("empPhone"))
                .sendKeys("9876543210");

        driver.findElement(By.id("empImage"))
                .sendKeys("https://i.pravatar.cc/150?img=10");

        driver.findElement(By.id("empDOJ"))
                .sendKeys("2026-07-17");

        driver.findElement(By.id("empStatus"))
                .sendKeys("Active");

        driver.findElement(By.id("saveEmployeeBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("Employee Added Successfully");

    }

}