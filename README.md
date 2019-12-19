# ginol
* A Simple notification command line utility that uses any operating system desktop notification system (ex. Toast, Growl)

```bash
ginol "Completed releasing of the Package"

# Failure/Warn
ginol -f "My failure message"

# Success
ginol -s "My success message

```

# Conditional CLI command 
```bash
tar czf /backup/www.tar /var/www \
    && ginol -s "Backup www was a success"\
    || ginol -f "Backup www failed"

```

# Usage in NPM Script
```json
"scripts":[
"release":"npm run publish && ginol -s \"Completed releasing package\" || ginol -f \"Failed  releasing package\""
```


```json
"scripts":[
"release":"npm version patch && npm run publish && ginol -s \"Completed releasing package\"  && git push || ginol -f \"Failed  releasing package\""
```


# Website 
http://guillaumeisabelle.com/coding/ginol/
