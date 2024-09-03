Feature: Baggage Allowance
  Everybody wants to know their baggage allowance

  Scenario Outline: Guest is checking their baggage allowance
    Given guest is a "<tier>" member
    When guest has a "<fare>" fare
    Then guest should be told "<answer>"

  Examples:
    | tier   | fare | answer        |
    | Beyond | LT   | Carry-On Only |
    | Gold   | CH   | 2 x 23kg      |
    | Red    | FL   | 1 x 23kg      |