package com.employee.automation.automation;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class ExportPdfTest extends BaseTest {

    @Test(priority = 6)

    public void exportPDF() throws Exception {

        driver.findElement(By.id("exportPdfBtn"))
                .click();

        Thread.sleep(3000);

        System.out.println("PDF Exported");

    }

}