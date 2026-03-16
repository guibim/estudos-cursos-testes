# Labour Hours Dashboard – QA Test Design

This repository contains a **QA testing exercise** focused on validating a workforce labour aggregation system and its dashboard interface.

The goal of the exercise is to demonstrate **test planning, test design, risk analysis, and automation strategy** for a system that calculates worked hours and displays them in a dashboard interface.

The deliverables include:

- Test Plan
- Test Cases
- Automation Strategy

This project focuses on **quality thinking, risk identification, and structured testing**, rather than implementation.

---

# System Overview

The system processes **employee clock-in and clock-out records** and calculates the total hours worked per employee.

The backend aggregates raw time records and produces structured data that is consumed by a **React-based dashboard interface**.

Managers use the dashboard to view employees and their total worked hours.

---

# Time Period Configuration

Worked hours are categorized into four configurable time periods:

| Period | Name | Default Hours |
|------|------|------|
| period1 | Morning | 5:00 AM – 12:00 PM |
| period2 | Afternoon | 12:00 PM – 6:00 PM |
| period3 | Evening | 6:00 PM – 11:00 PM |
| period4 | Late Night | 11:00 PM – 5:00 AM |

If a shift crosses a boundary between periods, the worked hours must be **split proportionally across those periods**.

---

# API Response Structure

The backend returns labour data through a JSON API.

Example response:

```json
{
  "employee_id": 1,
  "first_name": "Cave",
  "last_name": "Johnson",
  "labour": [
    {
      "date": "2016-01-01",
      "total": 9.20,
      "labour_by_time_period": {
        "period1": 2.20,
        "period2": 5.00,
        "period3": 1.00,
        "period4": 1.00
      }
    }
  ]
}

### Data Schema

**Each employee object contains:**
- `employee_id`
- `first_name`
- `last_name` (nullable)

**The labour array includes:**
- `date`
- Total hours worked
- Breakdown by time period

---

### Business Rules

The aggregation logic must respect the following rules:

**Shift Attribution**
All worked hours must be attributed to the date when the shift started, even if the shift ends on the next day.
> **Example:**
> Clock-in: Jan 4 – 11:00 PM
> Clock-out: Jan 5 – 6:00 AM
> *All hours must be assigned to Jan 4.*

**Period Splitting**
If a shift crosses a time period boundary, the hours must be split proportionally between periods.

**Multiple Shifts Per Day**
- An employee may have multiple shifts on the same day.
- All shifts must be merged into a single labour entry for that date.

**Multiple Work Dates**
- Employees may have shifts across multiple dates.
- Each date must generate a separate entry in the labour array.

**Data Consistency**
For every labour entry:
- `sum(period1 + period2 + period3 + period4) = total`
- Totals must be rounded to two decimal places.

---

### Dashboard Requirements

The front-end dashboard consumes the aggregated API data and displays employee cards.

**Employee Cards**
Each card must display:
- Employee full name
- Total hours worked across all dates
- The number of cards rendered must equal the number of employee objects returned by the API.

**Employee Filtering**
The dashboard includes a text input labeled: **Filter employees**. Filtering must:
- Work in real time
- Be case-insensitive
- Match employee names

**Empty State**
If no employees match the filter:
- No cards should be rendered
- A clear empty state message must be displayed

**Responsive Layout**
The dashboard layout must be responsive:
- **Desktop:** Multi-column grid layout
- **Tablet:** Single-column stacked layout

---

### Dataset Edge Cases

The dataset intentionally includes edge scenarios that must be handled correctly:
- An employee with `last_name = null`
- Employees with shifts across multiple dates
- Shifts that span midnight
- Shifts entirely inside one time period
- Shifts that span all four periods

*These cases are important for validating the robustness of the aggregation logic.*

---

### Out of Scope

The following features are considered outside the scope of this exercise:
- Authentication and authorization
- Pagination
- Editing clock records via UI
- Export or printing features

---

### QA Deliverables

This project includes three main QA deliverables:

**1. Test Plan**
Defines:
- Scope
- Testing strategy
- Risk areas

**2. Test Cases**
Representative scenarios covering:
- Happy paths
- Edge cases
- Negative cases

**3. Automation Strategy**
Defines:
- Automation priorities
- Suggested testing tools
- Scenarios suited for exploratory testing

---

### QA Focus Areas

The testing strategy prioritizes areas with the highest business and technical risk:
- Labour hour aggregation logic
- Overnight shift attribution
- Time period boundary calculations
- Rounding consistency
- Frontend and backend data consistency
- UI filtering behavior

---

### Author

**Guilherme Bim**
*QA Engineer | Software Engineering Student*

- **Portfolio:** [https://guibim.github.io/](https://guibim.github.io/)
- **GitHub:** [https://github.com/guibim](https://github.com/guibim)