export default function getElement(sel) {
  const ele = document.querySelector(sel);
  if (ele) {
    return ele;
  } else {
    throw Error("You didn't selected Element");
  }
}

// export default getElement;
