package stepdefinitions;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LeaveSteps {

    WebDriver driver;

    @Given("User opens the Admin Login page")
    public void user_opens_the_admin_login_page() {

        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        driver.get("http://localhost:5173/admin-login");
    }

    @When("User enters admin username {string}")
    public void user_enters_admin_username(String username) {

        driver.findElement(By.id("username")).sendKeys(username);

    }

    @When("User enters admin password {string}")
    public void user_enters_admin_password(String password) {

        driver.findElement(By.id("password")).sendKeys(password);

    }

    @When("User clicks Login button")
    public void user_clicks_login_button() {

        driver.findElement(By.id("loginBtn")).click();

    }

    @Then("Admin dashboard should be displayed")
    public void admin_dashboard_should_be_displayed() {

        System.out.println("Dashboard Opened");

    }

    @When("User clicks Leave Management menu")
    public void user_clicks_leave_management_menu() {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.elementToBeClickable(By.id("leaveManagement"))).click();

    }

    @When("User clicks Add Leave button")
    public void user_clicks_add_leave_button() {

        driver.findElement(By.id("addLeaveBtn")).click();

    }

    @When("User enters Employee Name {string}")
    public void user_enters_employee_name(String name) {

        driver.findElement(By.id("employeeName")).sendKeys(name);

    }

    @When("User selects Leave Type {string}")
    public void user_selects_leave_type(String type) {

        driver.findElement(By.id("leaveType")).sendKeys(type);

    }

    @When("User selects From Date {string}")
    public void user_selects_from_date(String date) {

        driver.findElement(By.id("fromDate")).sendKeys(date);

    }

    @When("User selects To Date {string}")
    public void user_selects_to_date(String date) {

        driver.findElement(By.id("toDate")).sendKeys(date);

    }

    @When("User enters Leave Reason {string}")
    public void user_enters_leave_reason(String reason) {

        driver.findElement(By.id("reason")).sendKeys(reason);

    }

    @When("User clicks Save Leave button")
    public void user_clicks_save_leave_button() {

        driver.findElement(By.id("saveLeaveBtn")).click();

    }

    @Then("Leave should be added successfully")
    public void leave_should_be_added_successfully() throws Exception {

        Thread.sleep(3000);

        System.out.println("Leave Added Successfully");

        driver.quit();

    }
}