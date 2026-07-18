package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class DeleteEmployeeTest extends BaseTest {

    @Test
    public void deleteEmployee() throws Exception {

        // Login
        

        
        // Employee Page
        driver.get("http://localhost:5173/employees");

        Thread.sleep(2000);

        // Delete Employee
        driver.findElement(By.id("deleteEmployeeBtn")).click();
        driver.switchTo().alert().accept();

        Thread.sleep(3000);

        System.out.println("Employee Deleted Successfully");
    }
}