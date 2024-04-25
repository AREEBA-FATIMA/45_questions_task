// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 
function make_shirts(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`You have ordered a ${size} sized shirt with the following message: "${message}".`);
}

make_shirts();
make_shirts("Medium");
make_shirts("Small", "JavaScript Rocks!");
