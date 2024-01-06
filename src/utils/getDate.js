export function getDate(dateTime) {
    try {
        return dateTime.split('T')[0];
    } catch (error) {
        console.log('🚀 ~ getDate ~ error:', error);
    }
}
