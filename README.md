# Angular Router Config

You have joined a new team as an Angular Developer. The existing application already has some components, but without any routing. There is only *app-routing.module.ts* created with an empty config.

Your first angular mission is to create a routing configuration that meets the following requirements:

1. All routing paths placed in the application (`navigation` and `user-list` components) should render proper components.
2. `PathNotFoundComponent` should be available under `404` path.
3. Non-existing paths should be handled properly (redirected to `404`).
4. User paths should be accessible (activated) only for logged-in users.

## Hints

*  Modify **only `app-routing.module.ts`** file! All other visible files are read-only.
*  Look for path names in components from p. 1.
*  Services for p. 4 are in `/services` directory.
*  Don't use 'children' routes. Create simple flat routing objects collection.
*  Run tests to check the task progress.
