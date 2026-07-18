package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class SearchEmployeeTest extends BaseTest {

    @Test(priority = 3)

    public void searchEmployee() throws Exception {

        driver.get("http://localhost:5173/employees");

Thread.sleep(2000);

driver.findElement(By.id("searchEmployee")).clear();

driver.findElement(By.id("searchEmployee")).sendKeys("Rahul");

Thread.sleep(3000);

System.out.println("Search Successful");
    }

}