Feature: Edit Post
    #
    Scenario: Owner edits Post with valid datas
        Given I am a "Owner"
        When I go to the Edit Post
        And I fill in "Post datas" with "new Post datas"
        And "new Post datas" is valid
        And I press "update"
        Then I should see "Post datas updated"
    
