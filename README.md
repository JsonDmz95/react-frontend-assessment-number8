# React Frontend Assessment (React + Vite)

This the MVP React app working in Vite with HMR and some ESLint rules.

The project was structured following the principles of ** Clean Architecture **

## Setup (Installation and Run)

1. Go to the `client` carpet
2. In case you don't have `.env` file in the root with the following variables: 
```
VITE_API_URL= #API URL
```
You can also use the `.env.example` to create your own

3. Install the dependencies, executing in the terminal : 
```
npm install 
```

4. Start the server executing:
```
npm run dev
```

### Optional: Testing and UI documentation

This project is using **Vitest** for the testing and **Storybook** for the UI documentation

* You can run the tests by executing
```
npm run test
```

* You can run the UI doc by executing
```
npm run storybook
```

----
## Project structure
```plaintext
/
├── .storybook/                 # Storybook configuration
├── public/                     # Public images
├── src/  
│   ├── assets/         
│   ├── components/             # Global components
│   ├── hooks/                  # Reusable custom hooks
│   ├── models/                 # Data Modeling and Routes declaration
│   ├── pages/
│   │   ├── PropertiesListing/  # Properties Listing React Page
│   │   │   ├── components/     # Components just for the page 
│   │   ├── PropertyDetails/    # Product Listing React Page
│   │   │   ├── components/     # Components just for the page
│   ├── store/                  # Global State Manager setup
│   ├── styles/                 # Global Styles
│   ├── utilities/              # Common used utilities
│   ├── App.tsx                 # Base App file and react-router setup
│   ├── main.tsx                # React root file
├── .env                        # Environment variable
├── .gitignore                  # Files and carpets ignored by git
├── eslint.config.js            # ESlint rules configuration
├── index.html                  # Root file
├── package.json                # Project and dependencies scripts 
├── README.md
├── setupTests.ts               # Unit Tests setup
├── tsconfig.*.json             # Types configuration files
├── vite.config.ts              # Vite config file
```

----
## Dependencies

| Package               | Version      | Description |
|-----------------------|--------------|-------------|
| `@emotion/react`     | `^11.13.3`   | A library for writing CSS styles with JavaScript, allowing for dynamic styling in React components. |
| `@emotion/styled`    | `^11.13.0`   | A library for creating styled components using Emotion's styling capabilities. |
| `@mui/icons-material`| `^6.1.0`    | Provides Material Design icons for use in React applications, integrated with Material-UI. |
| `@mui/material`      | `^6.1.0`    | A popular React UI framework that provides a set of components and styles following Material Design guidelines. |
| `@mui/x-data-grid`   | `^7.17.0`   | A high-performance data grid component for React, part of the Material-UI X suite, used for displaying and managing tabular data. |
| `react`              | `^18.3.1`   | A JavaScript library for building user interfaces, focused on creating reusable UI components. |
| `react-dom`          | `^18.3.1`   | Provides DOM-specific methods that allow React to interact with the browser's DOM, enabling rendering of React components in web pages. |
| `react-router-dom`   | `^6.26.2`   | A collection of navigational components that enable routing in React applications, managing URLs and rendering different views based on the URL. |
| `rxjs`               | `^7.8.1`    | A library for reactive programming using Observables, making it easier to compose asynchronous or callback-based code. |
| `sass`               | `^1.78.0`   | A preprocessor scripting language that is interpreted or compiled into CSS, adding features like variables, nested rules, and mixins. |
| `zustand`            | `5.0.0-rc.2` | A small, fast, and scalable state management library for React, providing a simple API for managing and sharing state across components. |
