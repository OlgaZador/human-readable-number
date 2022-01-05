module.exports = function toReadable (number) {
    number = Math.floor(number)
    var ones = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ]
    var tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ]
  
    var numString = number.toString()
      
    if (number === 0) return 'zero'
  
    //1 - 20
    if (number < 20) {
      return ones[number]
    }
  
    if (numString.length === 2) {
        if (numString[1] === '0')
        return tens[Number(numString[0])]
      else
      return tens[Number(numString[0])] + ' ' + ones[Number(numString[1])]
    }
  
    //100-999
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[Number(numString[0])] + ' hundred'
      else
        return (
          ones[Number(numString[0])] +
          ' hundred ' +
          toReadable(+(numString[1] + numString[2]))
        )
    }
  
    return ''
  }