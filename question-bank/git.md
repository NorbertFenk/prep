## Git & Version Control

### Q: What is Git and why is it used?
A: Git is a distributed version control system designed to track changes in source code over time. It allows multiple developers to collaborate simultaneously, roll back to prior commits, and maintain safe history checkpoints.

### Q: What is the difference between `git pull` and `git push`?
A: `git pull` downloads commits from a remote repository and automatically merges them into your current local branch. Conversely, `git push` uploads your local branch commits to update the corresponding remote repository.

### Q: What is a merge conflict and how do you resolve it?
A: A merge conflict occurs when Git cannot automatically reconcile differing edits made to the exact same lines of code across merging branches. It is resolved by manually opening the conflicted files, picking the desired code between the conflict markers, staging the changes, and committing the merge.

### Q: What is a Git branch and how do branching workflows work?
A: A branch is an independent pointer to a line of commits that enables developers to isolate feature development or bug fixes without touching stable code. Branching workflows typically utilize a central `main` branch with short-lived feature branches merged back via reviews.

### Q: What is a pull request (PR)?
A: A pull request (or merge request) is a notification mechanism on platforms like GitHub or GitLab proposing to merge changes from one branch into another. It provides a shared review space where team members inspect code diffs, run automated checks, and discuss changes before approving the merge.


