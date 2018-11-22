var nrc = require('node-run-cmd');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escriba el nombre de la app: ', (answer1) => {
  rl.question('Ruta donde firmara la app : ', (answer2) => {
    var result = (+answer1) + (+answer2);
    nrc.run(["keytool -genkey -v -keystore my-release-key.keystore -alias " + answer1 + " -keyalg RSA -keysize 2048 -validity 10000', 'jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore ' + answer1 + '-release-unsigned.apk " + answer1, "zipalign -v 4 " +
      answer2 + "app-release-unsigned.apk " +
      answer2 + answer1 + ".apk"
    ]);
    console.log(`${answer1}.apk Generada con exito en ${answer2}`);
    rl.close();
  });
});