export class FileLoader {
    static download(filename, data) {
        const element = document.createElement('a');
        element.setAttribute('href', `data:application/text;charset=utf-8,${data}`);
        element.setAttribute('download', filename);
        element.style.display = 'none';

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    static readFile(fileInput) {
        if (!window.FileReader || !window.File) {
            return Promise.reject(new Error('The File APIs are not fully supported in this browser.'));
        }

        const file = fileInput.files[0];
        if (!file) {
            return Promise.reject(new Error('No File'));
        }

        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (() => (e) => {
                // eslint-disable-next-line no-param-reassign
                fileInput.value = '';
                resolve(e.target.result);
            })(file);
            reader.readAsText(file);
        });
    }
}

module.exports = FileLoader;
