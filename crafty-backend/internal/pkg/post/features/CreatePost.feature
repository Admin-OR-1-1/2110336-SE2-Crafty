Feature: Create Post
    #
    Scenario: Crafter creates Post with valid datas
        Given I am a "Crafter"
        When I go to the Create Post
        And I fill in "Post datas"
        And "Post datas" is valid
        And I press "Create"
        Then I should see "Post datas"
    