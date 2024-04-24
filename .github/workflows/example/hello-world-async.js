module.exports = async ({github, context, core, text}) => {
  // wait for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000))
      .then(() => {console.log('Hello, World!', text)})
}