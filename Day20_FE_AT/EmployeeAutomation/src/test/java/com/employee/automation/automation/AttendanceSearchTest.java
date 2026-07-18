package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class AttendanceSearchTest extends BaseTest {

    @Test(priority = 14)
    public void searchAttendance() throws Exception {

        driver.get("http://localhost:5173/attendance");

        Thread.sleep(2000);

        driver.findElement(By.id("attendanceSearch"))
                .sendKeys("Dhivya");

        Thread.sleep(3000);

        System.out.println("Attendance Search Successful");
    }
}