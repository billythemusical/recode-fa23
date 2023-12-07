---
title: Git & Github
module: 10 Git & Github
---

# Git & Github

Git is a very powerful version control system for file management. Github integrate's Git's features in a cloud-based way online. Understanding how to use these tools can make you a much better programmer and connect you to the larger open source community as well as show you how to collaborate remotely with coders around the globe.

VS Code also has much of the core functionality of Git built into it's IDE, but it's also useful to understand the basic commands as you will inevitably find yourself working in the command line.

## Basic Commands

`git init` - initilaizes a repository and asks some basic info like 'want a README?'
`git add <file(s)>` - stages files to be committed
`git commit -m 'note about commit'` - used to commit the changes with a note, best to be done incrementally
`git push` - pushes the changes to the remote repo, typically on Github
`git pull` - a combo of two commands `fetch`, to get the remote changes, and `merge` to update the local code
`git fetch` - simply updates the local machine with the latest changes, like new branches and info about the repo, but does not change the local code
`git status` - ran often to check the current branch

## Branching

Feature branching is used when a working version of the code needs to be preserved while a new feature is added. 

To create a new branch, simply type: 
```bash
git branch my-new-feature
``` 
and then... 
```bash
git checkout my-new-feature
``` 
...to switch over to that new branch. You can check the current branch at any time by typing `git branch`.

This method protects the working code while new features are developed and tested on separate machines or environments. When the new code is tested and ready to be merged into the main branch, the process goes like so:

```bash
git checkout main
git merge my-new-feature main
```
...and the new feature will be merged into the main branch, assuming there are no conflicts that need to be resolved (VS Code is helpful in the case of conflicts).

## Stashing

1. **Creating a stash:** When you have made changes in your working directory that you are not ready to commit, but you need to switch branches or work on something else, you can use `git stash` to temporarily store these changes. 

    Another example may be when you're working with a remote repo that is being updated by collaborators and you pull their remote changes.

2. **Viewing a stash:** To see the list of stashed changes, use `git stash list`. This will show you all the stashes you've stored, indexed by a stash identifier (e.g., `stash@{0}`, `stash@{1}`, etc.).

3. **Applying Stashed Changes:**
        To bring back your stashed changes, there are a couple of commands you can use:
            `git stash apply`: This command applies the changes from the most recent stash to your current working directory but keeps the stash in your stash list. You can apply a specific stash using its identifier (e.g., `git stash apply stash@{1}`).
            `git stash pop`: Similar to git stash apply, but it applies the most recent stash and then removes it from the stash list. This is useful when you are done with the stashed changes and want to clear them from the list.

#### **Handling Conflicts**

When you apply or pop a stash, there's a possibility of conflicts, just like when merging branches. If there's a conflict, Git will notify you, and you'll need to manually resolve these conflicts.

#### **Other Stash Commands**

**Creating a Named Stash:** You can create a stash with a specific message using `git stash save "message"`. This can help you remember what the stash contains.
Dropping a Stash: To remove a specific stash from your stash list, use `git stash drop stash@{n}`, where n is the index of the stash.
Clearing All Stashes: If you want to remove all stashed entries, use `git stash clear`.

Stashing is a powerful feature in Git, especially when juggling multiple tasks or needing to quickly switch contexts. It's important to understand that stashes should be temporary and not used as a long-term versioning strategy.

## .gitignore

We've looked at the `.gitignore` file this semester and how we use it in detail. But let's look at another case below.

#### SPECIAL CASE: Ignoring the file contents, but not the file itself... 

To ignore the contents of a file but not the file itself in a Git repository, you'll need to track the file initially but then prevent any future changes to it from being tracked. This is commonly done with files like configuration files, where you might want to have a template in the repository, but don't want to track changes like personal API keys or passwords. Here's how you can do it:

1. Add the File to the Repository: First, add the file with its initial contents (which you want to be tracked) to the repository and commit it. For example, if it's a configuration file, you might include generic default settings.

2. Ignore Future Changes to the File: To ignore future changes to this file, use the following command in your Git terminal:

```bash
git update-index --assume-unchanged <file>
```
Replace <file> with the path to the file you want to ignore changes for. This command tells Git to assume that the file is unchanged, so any modifications made to it won't be included in future commits.

3. Revert If Needed: If you need to start tracking changes to this file again, you can use:

```bash
    git update-index --no-assume-unchanged <file>
```

It's important to note that this method doesn't ignore the file in the sense of `.gitignore`; it just temporarily ignores changes to the file. If you clone the repository somewhere else, or if another team member clones the repository, they will need to run the same `git update-index --assume-unchanged <file>` command on their own machine to ignore changes to the file locally.