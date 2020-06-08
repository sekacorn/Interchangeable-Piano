function BufferLoader(context, noteList, playMethod) {
	this.context = context;
    this.noteList = noteList;
    this.onload = playMethod;
    this.bufferList = new Array();
    this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(noteFile, index) {
    var request = new XMLHttpRequest();
    request.open("GET", noteFile, true);
    request.responseType = "arraybuffer";

    var loaderBuf = this;

    request.onload = function() {
        loaderBuf.context.decodeAudioData(
            request.response,
            function(buffer) {
                if (!buffer) {
                    alert('error decoding file data: ' + noteFile);
                    return;
                }
                loaderBuf.bufferList[index] = buffer;
                if (++loaderBuf.loadCount == loaderBuf.noteList.length)
                    loaderBuf.onload(loaderBuf.bufferList);
            }    
        );
    }

    request.onerror = function() {
        alert('BufferLoader: XHR error');        
    }

    request.send();
}

BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.noteList.length; ++i)
        this.loadBuffer(this.noteList[i], i);
}