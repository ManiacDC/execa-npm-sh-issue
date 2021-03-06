Pre-requisites:

```
npm install
```

Open a Git Bash window

note that script-shell in .npmrc is set to "sh"

Run the following script:

```
./launch.sh
```

OR run:

```
node ./test.js
```

(Both should result in the same issue occurring)

Verify in Process Explorer or Task Manager that node.exe is running

Then send Ctrl+C to the Git Bash Window and the process will terminate

Verify in Process Exporer or Task Manager that node.exe remains running and must be killed manually.


The results vary based on the shell being used by npm (script-shell in .npmrc) and the shell used to launch the node script. See the table below for reference

|                      | sh   | bash | powershell | <blank= default to cmd> |
|----------------------|------|------|------------|-------------------------|
| ./launch.sh          | fail | fail | pass       | pass                    |
| node test.js         | fail | fail | fail       | fail                    |
| sh -c 'node test.js' | fail | fail | pass       | pass                    |