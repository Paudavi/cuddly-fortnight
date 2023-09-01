const fs = require('fs');

class Utils {
  constructor(page) {
    this.fileName = this.startFile();
  }

  startFile() {
    const today = new Date();
    const timestamp = today.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
    return `products-${timestamp}.txt`;
  }

  writeProductDetails(lineNumber, link, name, cost) {
    fs.appendFileSync(this.fileName, `Result number ${lineNumber + 1}\nLink: ${link}\nName: ${name}\nCost: ${cost}\n`);
  }

  writeNumberOfPageResults(number) {
    fs.appendFileSync(this.fileName, `Results of page number ${number + 1}\n`);
  }
  writeLineSeparation(){
    fs.appendFileSync(this.fileName, '\n\n')
}

}

  
exports.Utils = Utils;
