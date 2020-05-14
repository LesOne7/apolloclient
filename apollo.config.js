module.exports = {
    client: {
        name: 'Space Explorer [web]',
        service: 'space-explorer',
    },
};

if (process.env.NODE_ENV !== 'test') {
    server
        .listen({ port: process.env.PORT || 4000 })
        .then(({ url }) => {
            console.log(`🚀 app running at ${url}`)
        });
}