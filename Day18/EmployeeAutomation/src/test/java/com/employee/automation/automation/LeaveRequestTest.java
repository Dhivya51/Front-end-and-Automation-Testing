package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class LeaveRequestTest extends BaseTest {

    @Test(priority = 1)
    public void submitLeaveRequest() throws Exception {

        // Open Leave Request page
        driver.get("http://localhost:5173/leave-request");

        Thread.sleep(2000);

        // Leave Type
        driver.findElement(By.id("leaveType"))
                .sendKeys("Casual Leave");

        // From Date
        driver.findElement(By.id("fromDate"))
                .sendKeys("2026-07-20");

        // To Date
        driver.findElement(By.id("toDate"))
                .sendKeys("2026-07-22");

        // Reason
        driver.findElement(By.id("reason"))
                .sendKeys("Family Function");

        // Submit
        driver.findElement(By.id("saveLeaveBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("Leave Request Submitted Successfully");
    }
}