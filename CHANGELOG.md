# How versioning works for this
Unlike a lot of project, I've decided to do this all a bit differently. Here's the low-down on how I work:  
The version number (etc `2.48.8.7`) is broken into `a.b.c.d` for the sake of this explanation. This whole versioning system is based on the expected life of the change - the longer the change, the earlier of the numbers are changed.  
* `a` is changed for permanent (>=1 year) changes like UI overhauls, moving to new frameworks, or additional features.  
* `b` is changed for long lasting (>=3 months) changes like policy updates (see below), general code base changes and all that.
* `c` is changed for temperary (>=1 month) changes like tests, mitigations and that.
* `d` is changed for quick fixes that will probably be improved within the week.

## Updating version numbers
Updates often may not come with a version number change for each push. It might be a few weeks before I update the version number where I'll update all four parts at once with the number of changes for each.

## Regarding policies
To make sure that policies are relevant, helpful and just good, I aim to review each of them 6 months after the last time they were changed. Let me know if I've missed one, or if there's something bugging you.