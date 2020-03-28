# be-the-hero
Repository for the project "Be the Hero" from OmniStack 11.0 week. 03/23/2020 - 03/27/2020
Rocketseat

Tools, Tecnologies and Funcionalities
- Visual Studio Code
- Insomnia
- sqlite client
- Backend = node.js, express, Database (sqllite3), Database abstraction Layer (knex), security (cors)
- Frontend = react.js, client http (axios)
- Mobile = react native, expo, integration with whatsapp and mail application

Packages and commands
# Backend initialization
cd /Users/elcio/devel/javascript/OmniStack/aulas/backend
npm init -y

# micro framework router and parameters
npm install express

# Frontend initialization
cd /Users/elcio/devel/javascript/OmniStack/aulas
npx create-react-app frontend


# Install nodemon in Dev environment
npm install nodemon -D

# Database Abstraction Layer
npm install knex

# Sqlite packages
npm install sqlite3

# knex initialization
npx knex init

# Create/Run migrations
npx knex migration:make create_ongs
npx knex migration:make create_incidents
npx knex migration:latest

# Security module
npn install cors

# Aditional icons
npm install react-icons

# Routes
npm install react-router-dom

# Client http
npm install axios

# expo installation
npm install -g expo-cli

# Mobile initialization
expo init mobile

# React Navigation
npm install @react-navigation/native

# React Navigation with expo
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# React Navigation - stacknavigation
npm install @react-navigation/stack

# Aditional package - status bar
npm install expo-constants

# Aditional package - sendmail
expo install expo-mail-composer

# Client http - folder mobile
npm install axios

# Aditional package - internationalization
npm install intl

# Validation
npm install celebrate

# Test
npm install jest

# jest initializado - backend folder
npx jest --init

1) Would you like to use Jest when running "test" script in "package.json"?
choose Yes - press <Y>
2) Choose the test environment that will be used for testing › - Use arrow-keys. Return to submit.
❯   node
choose node - press <enter>
3) Do you want Jest to add coverage reports? › (y/N)
choose No - press <N>
4) Automatically clear mock calls and instances between every test? › (y/N)
choose Yes - press <Y>

# Aditional package - Automatic change database configuration (Tests Database)
npm install cross-env

# Tests API
npm install supertest
