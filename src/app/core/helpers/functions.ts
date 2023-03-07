export function convertTime(isoTime) {
  let hours: any = parseInt(isoTime.substring(0, 2), 10);
  console.log(hours);
  let minutes = isoTime.substring(3, 5);
  let ampm = "am";

  if (hours == 12) {
    ampm = "pm";
  } else if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    ampm = "pm";
  }

  if (hours.toString().length == 1) {
    hours = `0${hours}`;
  }

  return hours + ":" + minutes + "" + ampm;
}

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export function dataURItoBlob(dataURI) {
  const byteString = window.atob(dataURI);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([int8Array], { type: "image/png" });
  return blob;
}
