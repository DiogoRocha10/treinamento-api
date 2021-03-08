const create = (response​​​​) => {
    const ​​​​{id, name, valueUnitary, amount} = response
    return {​​​​id, name, valueUnitary, amount}​​​​
};
module.exports = () => ({create})