export async function sendPushNotification(title: string, body: string) {
    const message = {
        to: 'ExponentPushToken[FJ8LnnJ8SbAvmJDEN2rduZ]',
        sound: 'default',
        title: title,
        body: body,
        data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}