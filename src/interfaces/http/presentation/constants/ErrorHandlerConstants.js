module.exports = () => ({
    code: {
        SERVICE_UNAVAILABLE: 'service_unavailable',
        USER_NOT_FOUND: 'user_not_found',
        USER_NOT_ACTIVE: 'user_not_active'
    },
    message: {
        SERVICE_UNAVAILABLE: ['Service unavailable: {0}.'],
        USER_NOT_FOUND: ['User with {0} can\'t be found.'],
        USER_NOT_ACTIVE: ['User with {0} not active.'],
    }
});
