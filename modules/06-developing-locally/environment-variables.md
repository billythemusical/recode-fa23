#### Environment Variables

We can temporarily save variables in our local environment using the `export` command like so:

```bash
$ export MYNAME="Billy"
$ echo $MYNAME
Billy
$ echo "$MYNAME is hungry 🤤"
Billy is hungry 🤤
```

As you can see above, to invoke the variable, we use the `$` sign followed by the variable name. If we close this terminal session, the variable MYNAME will be lost. 

### Built-In Variables

There are however built-in variables that are always available. These will vary depending on your operating system and environment. To see all that are available at any time, you can use the `printenv` command. 

To search for a specific variable, you can pipe the `printenv` into `grep` like so:

```bash
printenv | grep MYNAME
MYNAME=Billy
```
