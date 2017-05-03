import React, {Component} from 'react';

// https://addpipe.com/blog/correct-syntax-html-media-capture/
// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications

const FilePreview = ({file, key}) => (
    <li key={key}>
        <img src={URL.createObjectURL(file)} height="60px" alt={file.name} onLoad={() => URL.revokeObjectURL(file)} />
        <span>{file.name} : {file.size} bytes</span>
    </li>
);

const FilePreviewList = ({files}) => (
    <ul>
        {files.map((fileInfo, index) => FilePreview({file: fileInfo, key: index}))}
    </ul>
);

const routeClickToHiddenInput = (e, id) => {
    document.querySelector(id).click();
    e.preventDefault();
};

const FileChooser = ({files, onFileChange}) => (
    <div>
        <input type="file" id="fileElem" multiple accept="image/*" style={{display:'none'}} onChange={(ev) => onFileChange(ev.target.files)} />
        <a href="#" id="fileSelect" onClick={(e)=> routeClickToHiddenInput(e, '#fileElem')}>Select some files</a>
        <FilePreviewList files={files} />
    </div>
);

class ImageCapture extends Component {
    constructor() {
        super();
        this.state = {
            files: []
        };
    }

    onAddFile(file) {
        this.setState({
            files: [...this.state.files, ...file]
        });
    }

    render() {
        return (
            <FileChooser files={this.state.files} onFileChange={(file) => this.onAddFile(file)} />
        );
    } 
}

export default ImageCapture;