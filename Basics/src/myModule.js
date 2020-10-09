const message = 'Some message from myModule.js'
const name = 'Andrew';
const location = 'Philadelphia';

const getGreeting = (name) => {
    return `Welcome Here ${name}`
}
export { message, name,getGreeting, location as default }