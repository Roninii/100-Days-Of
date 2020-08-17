export const getQuote = async () => {
  const res = await fetch('https://quotes.rest/qod?language=en')
  const json = await res.json()
  return {
    author: json.contents.quotes[0].author,
    quote: json.contents.quotes[0].quote,
  }
}
