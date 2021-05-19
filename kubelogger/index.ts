import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        var kubernetesServiceEndpoint = tl.getInput("kubernetesServiceEndpoint", true);
        console.log(kubernetesServiceEndpoint)
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();