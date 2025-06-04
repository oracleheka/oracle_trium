(function (jsPDFAPI) {
  var font = 'AAEAAAASAQAABAAgR0RFRrRCsIIAAjbsAAACcG1h...'; // (base64 raccourci)
  jsPDFAPI.addFileToVFS("Roboto-Regular.ttf", font);
  jsPDFAPI.addFont("Roboto-Regular.ttf", "Roboto", "normal");
})(jsPDF.API);
