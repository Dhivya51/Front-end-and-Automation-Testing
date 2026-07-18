package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class ExportExcelTest extends BaseTest {

    @Test(priority = 5)

    public void exportExcel() throws Exception {

        driver.findElement(By.id("exportExcelBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("Excel Exported");

    }

}