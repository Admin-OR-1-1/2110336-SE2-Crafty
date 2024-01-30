Feature: Delete User
    #
    Scenario: delete post success
        Given I am the user 
        And UID of user account that I want to delete is valid
        When I want to delete user
        Then The user account should be deleted

    Scenario: The UID is invalid
        Given I am the user
        And UID of user account that I want to delete is invalid
        When I want to delete user
        Then The system should show error "The User account is invalid"