# Vehicle Management CRUD Demo

This project is a demo for a Vehicle Management system implemented with Spring Boot and Angular 15.

## Introduction

This project demonstrates a basic CRUD (Create, Read, Update, Delete) and Search application for managing vehicle records. It features a RESTful API backend developed with Spring Boot and a frontend interface built using Angular.

![App Sample](crud-demo-vechile/src/main/webapp/image.png)

## Prerequisites

- Java Development Kit (JDK)
- Node.js and npm
- Spring Boot
- Angular 15

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Priyangaa-dhandapani/vechile_mgt.git
   ```
2. Install backend dependencies:
    ```bash
   ./gradlew build
    ```
3. Start backend spring server
   ```bash
   java -jar build/libs/management-0.0.1-SNAPSHOT.jar
   ```
4. Install frontend dependencies:
    ```bash
    cd src/main/webapp
    npm install
    ```
5. Start the frontend development server:
   ```bash
    ng serve
   ```
