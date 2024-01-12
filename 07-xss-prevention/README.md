# Some notes on the project

1. StackOverflow article about `express-validator`
Since you are using `express-validator` which works as a wrapper over `validator.js`, the input is injected to the blacklist method by the express-validator and in your case, since you are using check() method of express-validator the input will be the parameter with the label that you have provided as the argument to check() method which might exist in any of the following request objects:

- req.body
- req.cookies
- req.headers
- req.params
- req.query

In your case for check("restaurant").notEmpty().blacklist("<>"), a parameter with the label of restaurant will be extract from either one of the aforementioned request objects and for check("review").notEmpty().blacklist("<>"), a parameter with the label review will be extracted.  
So the only argument that should be provided for the check method is a regex string which specifies the characters that must get removed.

2. Replace risky methods like:
```
<script>
  document.write("<b>Current URL</b> : " + document.baseURI);
</script>
```

I have replaced it with (the ridiculously complicated) after first creating `<h1 id="urlinfo"> </h1>`:
```
<script>
    let urlinfo = document.getElementById("urlinfo");
    let titleWrapper = document.createElement("b");    
    titleWrapper.textContent = "Current URL";
    urlinfo.appendChild(titleWrapper);
    let dataWrapper = document.createElement("span");
    dataWrapper.textContent = ": " + document.baseURI;
    urlinfo.appendChild(dataWrapper);
</script>
```


