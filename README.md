# Pokedex
A web-based pokedex built with React, Typescript, HTML/CSS and the PokeAPI
Test it out [here](https://arigny.github.io/pokedex/)

![pokedex project screenshot](public/assets/pokedex.png)

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Pushes the React app to the github repository and deploys it to Github Pages. Under the hood the `predeploy` script will build a distributable version of the React app and store it in the `build` folder. The `deploy` script will then push the contents of that folder to a new commit on the `gh-pages` branches.

The Github repository is already configured to deploy from the `gh-pages` branch. This is set in the 'Code and Automation' section of settings.

You can also specify a custom commit message with `npm run deploy -m 'deploy message'`

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
