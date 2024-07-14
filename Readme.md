# The Calendar is developed without using the external library

## Tech stack used

- React + Typescript
- CSS

## Calendar Features

This calendar interface provides a user-friendly way to view and navigate dates. Below are the key functionalities:

**1. Month and Year Display:**

- Displays the current month and year at the top left (e.g., "July 2024").

**2. Date Navigation:**

- Today Button: Quickly navigate back to the current date.
- Previous and Next Month Buttons: Navigate to the previous or next month using the "<" and ">" buttons.

**3.Weekdays Header:**

- Lists the days of the week from Sunday to Saturday at the top of the calendar grid.

**4. Calendar Grid:**

- Displays all the days of the current month in a grid format.
- Each cell represents a day, organized in weekly rows starting from Sunday and ending on Saturday.
- Days from the previous or next month are either left blank or grayed out to focus on the current month.

**5. Current Date Highlight:**

- Highlights the current date with a distinctive red circle for easy identification.

## How to setup locally

### Prerequisites

- [Node.js](https://nodejs.org/) (Ensure you have Node.js installed)

### Installation

1. **Clone the repository**
   ```sh
   git clone hhttps://github.com/Dharmik3/calendar.git
   ```
2. Navigate to the project directory

   ```sh
   cd calendar
   ```

3. Install dependencies
   ```sh
   npm install
   ```

4. Start the application
    ```sh
    npm run dev
    ```
5. Open your browser and navigate to
    ```sh
    http://localhost:5173/
    ```
    **Note:** If already other app is running on this (5173) port then see the terminal, that will start the app in another port , so kindly navigate to that url and port