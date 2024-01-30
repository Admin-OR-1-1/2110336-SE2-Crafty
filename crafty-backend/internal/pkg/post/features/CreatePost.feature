Feature: Create Post
    #
    Scenario: create post success
        Given I am the crafter
        When I go to the Create Post
        And I fill in the valid informations
        Then I should can craete post success

    Scenario: create post failed
        Given I am the crafter
        When I go to the Create Post
        And I fill in the invalid informations
        Then I should get error "Post informations is invalid"