package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class AttendanceMarkTest extends BaseTest {

    @Test(priority = 15)
    public void markAttendance() throws Exception {

        driver.get("http://localhost:5173/attendance");

        Thread.sleep(2000);

        driver.findElements(By.className("markAttendanceBtn"))
                .get(0)
                .click();

        Thread.sleep(3000);

        System.out.println("Attendance Updated Successfully");
    }
}