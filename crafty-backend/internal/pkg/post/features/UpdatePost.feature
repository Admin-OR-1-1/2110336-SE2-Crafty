Feature: Update Post
    #
    Scenario: update post success
        Given I am the crafter
        When I go to the Update Post
        And fill in new informations which are valid
        Then I should can update post success

    Scenario: update post failed
        Given I am the crafter
        When I go to the Update Post
        And fill in new informations which are invalid
        Then I should get error "New informations is invalid"
    
