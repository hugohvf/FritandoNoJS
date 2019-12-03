const MinhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
});

// async function executaPromise(){
//     console.log(await MinhaPromise());
//     console.log(await MinhaPromise());
//     console.log(await MinhaPromise());

// }

const executaPromise = async () => {
    console.log(await MinhaPromise());
    console.log(await MinhaPromise());
    console.log(await MinhaPromise());
};

executaPromise();