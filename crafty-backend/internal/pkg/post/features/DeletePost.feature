Feature: Delete Post
    #
    Scenario: delete post success
        Given I am the crafter
        When I want to delete user by using ID which is valid
        Then The post should be deleted

    Scenario: delete post failed
        Given I am the crafter
        When I want to delete user by using ID which is invalid
        Then The system should show error "ID is invalid"