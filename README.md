# **Dynamic Clock and Background Application**

This JavaScript-based application enhances your digital environment by providing a **live clock**, updating the **day of the week**, and dynamically changing the **background**. Designed to offer both utility and aesthetic appeal, it serves as a vibrant addition to any screen it adorns.

## **Features**

- **Live Clock**: Displays the current time and updates it every second for accuracy.
- **Day of the Week**: Updates the displayed day at the start of each new day, keeping you in sync with the calendar.
- **Dynamic Background**: The background transitions every minute, introducing a refreshing visual element that keeps the display lively.

## **How It Works**

The application initializes by calling the **initialize** function, which in turn activates three key functionalities:

1. **Clock Update**: The **updateClock** function is called immediately and then every second thereafter to ensure the time displayed is always current.
2. **Day of the Week Update**: The **updateDayOfWeek** function is called once and then every hour to reflect the correct day of the week.
3. **Background Update**: The **updateMorningBackground** function changes the background at the start and then every minute to keep the visual display engaging.
