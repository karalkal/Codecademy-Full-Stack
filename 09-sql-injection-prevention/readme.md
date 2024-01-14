`const validator = require('validator')`

### Form validation

- isEmail() - Checks if the input is a valid email address.
- isLength() - Checks if the input is a certain length. An object with min and max can be passed as an argument.
- isNumeric() - Checks if the input is numeric.
- contains() - Checks if the input contains a certain value.
- isBoolean() - Checks if the input is a boolean value.
- isCurrency() - Checks if the input is currency-formatted.
- isJSON() - Checks if the input is JSON.
- isMobilePhone() - Checks if the input is a valid mobile phone number.
- isPostalCode() - Checks if the input is a valid postal code.
- isBefore() and isAfter() - Checks if a date is before or after another date.

```js
app.post('/submit', 
  (req, res) => {
    const response = {
      emailValid: validator.isEmail(req.body.email)
      passwordValid: validator.isLength(req.body.password, {min: 5, max: 10})
    }
    res.json({message: response})
});
```

### Data sanitation

`console.log(validator.normalizeEmail("     STUDENT@Codecademy.com"))`  
`console.log(validator.escape("<A>B&C'D"))`
`console.log(validator.escape('"'))`

```js
app.post('/email', 
  (req, res) => {
    const response = {
      normalizedEmail:  validator.normalizeEmail(req.body.emailForm)
    }
    res.json({message: response})
});

app.post('/date', 
  (req, res) => {
    const response = {
      sanitizedDate: validator.toDate(req.body.dateForm)  
    }
    res.json({message: response})
});

app.post('/escape', 
  (req, res) => {
    const response = {
      escapedValue: validator.escape(req.body.escapeForm)
    }
    res.json({message: response})
});
```

### Prepared statements: Placeholders

```js
db.all("SELECT * FROM Employee  WHERE FirstName = ? AND LastName = ? ", 
  [req.body.lastName, req.body.firstName], 
  (error, results) => {
  ...
});
```

input for injection:  
`1' OR '1' = '1`

### Prepared Statements: Named Placeholders

```js
db.all("SELECT * FROM Employee  WHERE FirstName = $firstName AND LastName = $lastName ", 
  {
    $firstName: req.body.firstName,
    $lastName: req.body.lastName
  },
  (error, results) => {
  ...
});
```
