async function myBirthday (notCoke) {
    if (!notCoke) {
        return 5;
    }
    throw new Error("Not cokes!")
}

async function f() {
    try {
        let result = await myBirthday(false);
        console.log(`i have ${result} cokes`)
    } catch (err) {
        console.log(err);
    }
}

f()