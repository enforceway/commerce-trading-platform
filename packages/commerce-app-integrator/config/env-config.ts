export const AppConfig: {[key: string]: any} = {
    SERVER: {
        PORT: process.env.PORT || 8080,
        STATIC_ASSET_CONTEXT: '/static'
    }
};
