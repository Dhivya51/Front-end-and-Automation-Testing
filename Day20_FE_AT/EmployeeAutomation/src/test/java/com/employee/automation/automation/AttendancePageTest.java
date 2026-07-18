package com.employee.automation.automation;

import org.testng.annotations.Test;

public class AttendancePageTest extends BaseTest {

    @Test(priority = 13)
    public void openAttendancePage() throws Exception {

        driver.get("http://localhost:5173/attendance");

        Thread.sleep(3000);

        System.out.println("Attendance Page Opened Successfully");
    }
}