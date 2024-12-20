# Project 1 Quiz Game

## Deadline: 15th January

### Description

This project challenges you to build a fun and interactive quiz game using HTML, CSS, and JavaScript. Your quiz will ask multiple-choice questions and give players immediate feedback on their answers. A progress bar or scoreboard will show how many questions the player has answered correctly, and at the end of the quiz, they will see their final score.

## Requirements

- [ ] Structure the page with HTML to display the questions, answer options, and navigation buttons.
- [ ] Style the quiz using CSS so that it’s easy to read and visually appealing.
- [ ] Use JavaScript to load questions one by one, handle user clicks on the answers, and show whether those answers are correct or incorrect.
- [ ] Work with async/await to fetch questions from Quiz API without making the page reload.
- [ ] Catch and handle errors so your quiz can gracefully tell users if something goes wrong, like missing data.
- [ ] Minimum 10 questions.
- [ ] Multiple choice answers.
- [ ] Any category and any difficulty level.
- [ ] Add comments where applicable.
- [ ] Deploy to Netlify.

### Deliverables

- [ ] GitHub repository containing all source code.
- [ ] Live URL.

# Webpack Template

To intall packages run "npm i"

To run tests run "npm test"

To build run "npm run build"

To start the project in development mode run "npm run dev"

## Deploy

Follow these steps to deploy your project to Github Pages:

0. Make a new branch to deploy from by running the command below. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.

   ```bash
   git branch gh-pages

   ```

1. Make sure you have all your work committed. You can use `git status` to see if there’s anything that needs committing.
2. Run

   ```bash
   git checkout gh-pages && git merge main --no-edit
   ```

   to change branch and sync your changes from main so that you’re ready to deploy.

3. Now let’s bundle our application into `dist` with your build command, i.e.

   ```bash
   npm run build

   ```

4. Now there are a few more commands. Run each of these in order:

   ```bash
   git add dist -f && git commit -m "Deployment commit"
   ```

   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

   ```bash
   git checkout main
   ```

5. Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the `gh-pages` branch. That should be everything!
