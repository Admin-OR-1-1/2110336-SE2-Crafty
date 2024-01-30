Feature: Get Post by ID

Scenario: Retrieve post by ID
    Given that I am User
    And have access to the post
    When I request to get a post with ID
    Then the system should return the post with that ID

Scenario: Fail to retrieve post by non-existent ID
    Given that I am User
    And have access to the post
    When I request to get a post with non-existent ID
    Then the system should respond with an error message
