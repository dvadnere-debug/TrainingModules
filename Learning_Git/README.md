# Commands

GitThe Github Flow
git clone
git checkout -b branch_name
git add .
git commit -m "message"
git push
open a PR
merge or solve mergeConflicts

## 1. Branching commands

- git checkout -b branch-name (to add changes to a new branch)
- git show (to view the history of the project)
- git switch main ( to return to the main branch)
- git branch (to see all the branches)
- git branch -d branch-name (to delete a branch)
- git push --delete origin branch-name (to delete a branch in remomte repository)

## 2. Merging

To merge changes, we must be on the branch where we want to receive the changes.

## 3. Stashing

-git stash (to save the uncommitted changes)
-git stash apply (to apply whatever is stashed away without removing it from the stash, also useful to apply stashed changes to multiple branches)
-git stash pop (to remove the most recently stashed changes from the stash)
-git stash list( to view the stash)
-git stash apply stash@{2} (specifying a particular stash to apply)
-git stash clear ( clearing the stash)

## 4. Rebasing

## 5. Reverting

## 6. Resetting
