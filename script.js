function generatePyramid(char, height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let chars = char.repeat(2 * i - 1);

    console.log(spaces + chars);
  }
}

//input 2 ตัว กำหนดตัวอักษรได้
generatePyramid('o', 5);

function generatePyramidVersionTwo(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let chars = 'x'.repeat(2 * i - 1);

    console.log(spaces + chars);
  }
}

//input 1 ตัว กำหนดตัวอักษรเป้น x
generatePyramidVersionTwo(5);
