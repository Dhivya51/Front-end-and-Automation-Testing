package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class EditEmployeeTest extends BaseTest {

    @Test(priority = 4)

    public void editEmployee() throws Exception {

       driver.findElements(By.className("edit-btn")).get(0).click();

        Thread.sleep(2000);

        driver.findElement(By.id("empPosition"))
                .clear();

        driver.findElement(By.id("empPosition"))
                .sendKeys("Senior Software Engineer");

        driver.findElement(By.id("saveEmployeeBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("Employee Updated");

    }

}