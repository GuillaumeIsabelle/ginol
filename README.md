# ginol
* A Simple notification command line utility

```bash
ginol "Completed releasing of the Package"
```

```json
"scripts":[
"release":"npm run publish && ginol \"Completed releasing package\""
```


```json
"scripts":[
"release":"npm version patch && npm run publish && ginol \"Completed releasing package\" && git push"
```


# Website 
http://guillaumeisabelle.com/coding/ginol/
