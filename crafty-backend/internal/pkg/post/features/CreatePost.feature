Feature: Create Post
    #
    Scenario: Owner creates Post with valid datas
        Given I am a "Owner"
        When I go to the Create Post
        And I fill in "Post datas"
        And "Post datas" is valid
        And I press "Create"
        Then I should see "Post datas"
        