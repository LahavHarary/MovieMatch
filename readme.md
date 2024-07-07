# MovieMatch

## Overview
MovieMatch is an innovative application designed to help people find a movie that everyone will enjoy. By creating user profiles and swiping left or right on suggested movies, users can easily agree on a movie to watch together based on their preferences.

## Features
- Create user profiles with movie preferences.
- Swipe left or right on movie suggestions.
- Match movies based on group preferences.

## Getting Started

These instructions will help you set up and run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/MovieMatch.git
    cd MovieMatch
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Install MongoDB locally:

    - **macOS:**
        ```sh
        brew tap mongodb/brew
        brew install mongodb-community@5.0
        ```

    - **Windows:**
        Download and install from [MongoDB Community Download](https://www.mongodb.com/try/download/community).

    - **Linux:**
        Follow the instructions on the [MongoDB Installation Documentation](https://docs.mongodb.com/manual/installation/).

4. Start the MongoDB server:
    ```sh
    mongod --dbpath ~/mongodb/data/db
    ```

### Running the Project Locally

1. **NPX**
   ```sh
   npx ts-node src/index.ts
