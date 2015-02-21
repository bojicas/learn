Feature: Authorable Landing Page

  As an author
  I want to curate a landing page
  So that I can entice people to purchase my book

  Scenario: Visitors can see a book heading
    Given I am a new visitor
    When I navigate to the landing page
    Then I see the heading "My Book"
