1. What problem does the context API help solve?
As you build out larger React apps, traditional prop drilling can be quite cumbersome. The Context API allows you to store data on a context object, and pass it to the relevant components


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are information that describe events in the UI and have a corresponding reaction to those events. Reducers work with actions to understand how to update state. The reducer does the actual updating. The store is essentially the central branch of state. This is where the data will live and be passed down. That’s why it’s the single source of truth. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global while component state is specific to each component. You would need data to be passed down for component states. If state doesn’t need to be shared with a lot of components, you can use component state. If there is a lot of state-sharing, you would use application state. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a package that allows us to apply middleware to our redux. It will allow us to make asynchronous api calls and add a buffer between the action creators and the actual state change. This allows for more flexibility. 


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the Context API. It's very simple & intuitive.
