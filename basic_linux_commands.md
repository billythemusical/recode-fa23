# BASIC LINUX COMMANDS

## FILES & NAVIGATING

- **ls**: directory listing (list all files/folders in current dir)
- **ls -l**: formatted listing
- **ls -la**: formatted listing including hidden files
- **cd dir**: change directory to dir (dir will be directory name)
- **cd ..**: change to parent directory
- **cd ../dir**: change to dir in parent directory
- **cd ~**: change to home directory
- **pwd**: show current directory
- **mkdir dir**: create a directory dir
- **rm file**: delete file
- **rm -f dir**: force remove file
- **rm -r dir**: delete directory dir
- **rm -rf dir**: remove directory dir
- **cp file1 file2**: copy file1 to file2
- **mv file1 file2**: rename file1 to file2
- **mv file1 dir/file2**: move file1 to dir as file2
- **touch file**: create or update file
- **cat file**: output contents of file
- **cat > file**: write standard input into file
- **cat >> file**: append standard input into file
- **tail -f file**: output contents of file as it grows

## NETWORKING

- **ping host**: ping host
- **whois domain**: get whois for domain
- **dig domain**: get DNS for domain
- **dig -x host**: reverse lookup host
- **wget file**: download file
- **wget -c file**: continue stopped download
- **wget -r url**: recursively download files from url
- **curl url**: outputs the webpage from url
- **curl -o meh.html url**: writes the page to meh.html
- **ssh user@host**: connect to host as user
- **ssh -p port user@host**: connect using port
- **ssh -D user@host**: connect & use bind port

## PROCESSES

- **ps**: display currently active processes
- **ps aux**: detailed outputs
- **kill pid**: kill process with process id (pid)
- **killall proc**: kill all processes named proc

## SYSTEM INFO

- **date**: show current date/time
- **uptime**: show uptime
- **whoami**: who you're logged in as
- **w**: display who is online
- **cat /proc/cpuinfo**: display cpu info
- **cat /proc/meminfo**: memory info
- **free**: show memory and swap usage
- **du**: show directory space usage
- **du -sh**: displays readable sizes in GB
- **df**: show disk usage
- **uname -a**: show kernel config

## COMPRESSING

- **tar cf file.tar files**: tar files into file.tar
- **tar xf file.tar**: untar into current directory
- **tar tf file.tar**: show contents of archive

## PERMISSIONS

- **chmod octal file**: change permissions of file
- **chmod 777**: rwx for everyone
- **chmod 755**: rw for owner, rx for group and world

## SOME OTHERS

- **grep pattern files**: search in files for pattern
- **grep -r pattern dir**: search for pattern recursively in dir
- **locate file**: find all instances of file
- **whereis app**: show possible locations of app
- **man command**: show manual page for command

## ADDITIONAL COMMANDS

- **sudo**: 'super user do' - execute a command as the superuser
- **| (pipe)**: Takes the output of one command and uses it as input for another, e.g.:
```bash
ls dir | grep file # outputs file name if file is in directory
```
- **\* (star)**: wildcard - represents zero or more characters, e.g.:
```bash
mv 'Screen\ Shot*.png' ~/.Trash # move all screen shots in the current directory to the trash (on Mac)
```


