
/** 
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * 
 * */  


/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    
    const value = x.toString();
    const reversed = value.split('').reverse().join(''); 
	return value === reversed
    
};

console.log(isPalindrome(-121))