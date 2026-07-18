Feature: Leave Management

  Scenario: Add Leave Request

    Given User opens the Admin Login page
    When User enters admin username "admin"
    And User enters admin password "admin123"
    And User clicks Login button
    Then Admin dashboard should be displayed

    When User clicks Leave Management menu
    And User clicks Add Leave button
    And User enters Employee Name "Rahul Sharma"
    And User selects Leave Type "Casual Leave"
    And User selects From Date "2026-07-20"
    And User selects To Date "2026-07-22"
    And User enters Leave Reason "Family Function"
    And User clicks Save Leave button

    Then Leave should be added successfully