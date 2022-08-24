const imageExt = ["jpeg", "gif", "png", "png", "svg", "bmp", "ico", "jpg", "webp"];
const isImage = (name, mimetype) => {
  return imageExt.some((e) => name == null ? void 0 : name.toLowerCase().endsWith(`.${e}`)) || (mimetype == null ? void 0 : mimetype.startsWith("image/"));
};
function readFile(FileElement, CallBackFunction) {
  try {
    if (!FileElement.files || !FileElement.files.length) {
      return CallBackFunction();
    }
    const file = FileElement.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function(evt) {
        var _a;
        CallBackFunction((_a = evt.target) == null ? void 0 : _a.result);
      };
      reader.onerror = function() {
        CallBackFunction();
      };
    }
  } catch (Exception) {
    const fallBack = ieReadFile(FileElement.value);
    if (fallBack != false) {
      CallBackFunction(fallBack);
    }
  }
}
function ieReadFile(filename) {
  try {
    const fso = new ActiveXObject("Scripting.FileSystemObject");
    const fh = fso.OpenTextFile(filename, 1);
    const contents = fh.ReadAll();
    fh.Close();
    return contents;
  } catch (Exception) {
    return false;
  }
}
export { isImage as i, readFile as r };
