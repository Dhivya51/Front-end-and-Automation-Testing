package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

public class DepartmentSearchTest extends BaseTest {

    @Test(priority = 10)
    public void searchDepartment() throws Exception {

        // Open Department Page
        driver.get("http://localhost:5173/departments");

        Thread.sleep(2000);

        // Search Department
        driver.findElement(By.id("searchDepartment"))
                .sendKeys("Information Technology");

        Thread.sleep(2000);

        // Verify the result
        WebElement result = driver.findElement(
                By.xpath("//table//tbody//tr[1]/td[2]"));

        String departmentName = result.getText();

        Assert.assertEquals(departmentName, "Information Technology");

        System.out.println("Department Search Successful");
    }
}