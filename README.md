# Red Academy Angular Project Starter
# (formerly the Tour of Heroes to Mars (3rd rendition) )

The repository builds upon the most current (and stable) version of 
[Angular 2.x](https://angular.io/) .

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project based on this repo

Clone this repo into new project folder (e.g., `RA-Angular2Project`).
```bash
git clone  https://github.com/eapostol/ra-base-mars-repo-03.git  RA-Angular2Project
cd RA-Angular2Project
```

We have no intention of updating the source on my REPO. `eapostol/ra-base-mars-repo-03`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Copy its address (e.g. *`https://github.com/<my-org>/RA-Angular2Project.git`*) 
and push the *local repo* to the *remote*. ( where <<my-org>> is your github 
account, like mine is eapostol)

```bash
git remote add origin <repo-address>
git push -u origin master
```
## So - First , install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in your console
administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please 
install them manually with:

> `npm run typings -- install`

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your Angular2 Project!
