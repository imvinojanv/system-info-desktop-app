document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <div class="mb-4">
            <h2>App Version</h2>
            <ul class="list-group">
                <li class="list-group-item">Node: ${window.api.getNodeVersion()}</li>
                <li class="list-group-item">Chrome: ${window.api.getChromeVersion()}</li>
                <li class="list-group-item">Electron: ${window.api.getElectronVersion()}</li>
            </ul>
        </div>

        <div class="mb-4">
            <h2>System Specifications</h2>
            <ul class="list-group">
                <li class="list-group-item">Process Indentifier: ${window.api.getProcessIdentifier()}</li>
                <li class="list-group-item">Platform: ${window.api.getPlatformInformation()}</li>
            </ul>
        </div>
    `;
});
