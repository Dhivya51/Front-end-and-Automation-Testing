package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class DepartmentAddTest extends BaseTest {

    @Test(priority = 9)
    public void addDepartment() throws Exception {

        driver.get("http://localhost:5173/departments");

        Thread.sleep(2000);

        driver.findElement(By.id("departmentName"))
                .sendKeys("Testing");

        driver.findElement(By.id("departmentHead"))
                .sendKeys("Dhivya");

        driver.findElement(By.id("saveDepartmentBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("Department Added Successfully");
    }
}