# Password Generator Flask App

This is a simple password generator web application built with Flask, HTML, CSS, and JavaScript. The app allows users to generate random passwords based on their specified length and the number of passwords required.

## Features

- Generate multiple passwords with a customizable length.
- Secure password generation with a mix of lowercase, uppercase, and numbers.
- Simple and responsive user interface.

## Technologies Used

- **Flask**: Python web framework for handling backend logic.
- **HTML/CSS**: For the frontend interface and styling.
- **JavaScript**: To handle form submission and interact with the backend using `fetch`.
- **Python**: For password generation logic.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/DarkCoder47/Password_Generator_Web.git
cd password-generator-flask
```

### 2. Install dependencies
Ensure you have Python and pip installed, then install Flask:
```bash
pip install flask
```

### 3. Run the app
To run the Flask app, use the following command:
```bash
python app.py
```

The app will be hosted at `http://127.0.0.1:5000/`.

### 4. Open the app
Navigate to `http://127.0.0.1:5000/` in your web browser to access the app.

## Usage

1. Enter the desired number of passwords in the "Number of Passwords" input field.
2. Set the length of the passwords in the "Password Length" input field.
3. Click the "Generate" button to see the generated passwords.
4. Passwords will be displayed below the form in a list.

## Customization

You can customize the app by modifying the following:
- **Password generation logic**: Modify the `generate_password`, `replace_with_number`, and `replace_with_uppercase_letter` functions in `app.py` to change the way passwords are generated.
- **Frontend styling**: Modify `styles.css` to change the look and feel of the web page.
- **Additional features**: Feel free to add new features, such as password strength indicators, saving passwords, or exporting to a file.
