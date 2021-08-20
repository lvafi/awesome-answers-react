create react app:
1 - nvm install 14.15.4
2 - nvm use 14.15.4
3 - npx create-react-app awesome_answers
4 - delete unnecessary stuff:
    App.js -> get rid of everything inside a header
    App.js -> remove import logo from './logo.svg';
    App.test.js
    logo.svg 
5 - npm start 
6 - create show page
7 - create a component folder to have files to get data from
    
8 - there is this warning in console log that you see alot working with react
        Warning: Each child in a list should have a unique "key" prop.

        Check the render method of `AnswerList`. See https://reactjs.org/link/warning-keys for more information.
            at AnswerDetails (http://localhost:3000/static/js/main.chunk.js:275:3)
            at AnswerList (http://localhost:3000/static/js/main.chunk.js:419:3)
            at main
            at QuestionShowPage
    to avoid this warning we have to define key property
    key={i}
    this is something you should do everytime you user list of something        

9 - download  react dev tools  -> 
    open inspector then you will see the purple react logo component tab got added.
    this is basically your react component Tree
    
10 - before we said that we are not allowed to render out a bunch of sibiling
     elements, but you could do it if you use specific elements. 
     inside your react element you can use fragment that let you list the sibilings
     <React.Fragment></React.Fragment> or a shorthand for it is an empty tag
     <> </>
