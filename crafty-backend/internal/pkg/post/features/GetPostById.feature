Feature: Get Post by ID

Scenario: Retrieve post by ID
    Given that I am User
    And have access to the post
    When I request to get a post with ID
    Then the system should return the post with that ID
