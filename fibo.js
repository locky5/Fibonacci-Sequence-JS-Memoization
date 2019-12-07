function noMemoFibo(n) {
  let arr = [1, 1]

  for (let i = 2; i < n + 2; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}

console.log(noMemoFibo(100))


function memoFibo(n, memo) {
  memo = memo || {}

  if (memo[n]) {
    return memo[n]
  }

  if (n <= 1) {
    return 1
  }

  return memo[n] = memoFibo(n - 1, memo) + memoFibo(n - 2, memo)
}

console.log(memoFibo(100))
