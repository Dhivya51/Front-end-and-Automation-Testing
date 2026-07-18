package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class LogoutTest extends BaseTest {

    @Test(priority = 8)

    public void logout() throws Exception {

        driver.findElement(By.id("logoutBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("Logout Successful");

    }

}