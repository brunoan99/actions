const { sum, sub } = require('.')

async function main() {
  if (sum(1, 2) !== 3) {
    throw new Error('Should sum 1 and 2 return 3')
  }
  if (sub(2, 1) !== 1) {
    throw new Error('Should sub 2 and 1 return 1')
  }
}

main()