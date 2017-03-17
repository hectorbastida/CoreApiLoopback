# Contributing guidelines

## Documentation

Document all your code.

Use [jsdoc](http://usejsdoc.org) where possible.

## Pull Requests

Send your pull requests to the `development` branch, please verify your PR follows the following set of rules:

* Make sure that your branch is free of conflicts.
* Affect only files that are related to the ticket.
* If your branch is out of date, please pull changes from development branch. `git pull --rebase [remote] development`.
* Remove dead code (code commented 'temporarily').
* Include tests. Unless your fix is a typo, it must have tests.
* If specific steps are required for others to test (install a library, test with certain data, etc) make sure this is added to the description.

The above will not guarantee your Pull Request will be approved, but it will allow others to START testing at least. Without any of the items in the checklist, we won't waste time reviewing it.

At least TWO approvals are required before merging your Pull Request.

## Branching

Always create a new branch to work on your changes, please create it from the default branch(development).

## Linters

Your code has to pass all lint configurations before merge, remember you can check them running `npm run lint` and use the auto fixer with `npm run fixlint`

## Commit message guidelines

Our commit messages have a specific format meant to make it faster to recognize the scope of a given change and make history more readable.

Each commit message consists of a scope and a subject.

~~~
<ticket number><scope> <subject>
~~~

Example:

~~~
[#3][datasource] Add amazon datasource for development
~~~

Make sure that no line exceeds 100 characters. This ensures that messages will be more readable in various terminal tools and on the github web UI.

### Scope

Use **only** the following tags in your commit messages (in brackets please, no colon after the tag):

* **[base]** This scope only happens once, when a project is scaffolded with loopback-generator
* **[seed]** for when seed jsons/functionality are added or modified
* **[method]** for when a remote method was added or modified
* **[hook]** for when a remote hook was added or modified
* **[test]** for when a test was added or modified
* **[datasource]** for when a datasource was added or modified
* **[model]** for when a model was added or modified
* **[docs]** docs were created or modified
* **[devops]** any devops related modifications or features
* **[dependency]** a dependency or dev dependency was added or deleted in the package.json

If a commit would cover two of the above cases (for example, a new page that also uses a new component), split them into separate, focused commits instead.

Do **not** create commits just to fix conflicts from another branch. Instead, rebase and fix conflicts during the rebase process.

### Subject

The subject is a short and to-the-point summary of the change. It should:

* use the imperative tense ("change", instead of "changes" or "change")
* not have a dot (.) at the end

**Also please take a look at the wiki of this repo**
