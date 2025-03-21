export const handler = async (event: { name: string }): Promise<any> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: event.name ? `Good Job ${event.name}!` : 'Good Job!',
            input: event,
        }),
    };
}