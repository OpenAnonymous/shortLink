export default function logRequest(req, res, next) {
    const startTime = Date.now(); // Lưu lại thời gian bắt đầu yêu cầu

    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        const statusCode = res.statusCode;

        let color;
        if (statusCode < 400) {
            color = '\x1b[34m'; 
        } else if (statusCode < 500) {
            color = '\x1b[33m'; 
        } else {
            color = '\x1b[31m';
        }
        console.log(`${color}[${new Date(endTime).toISOString()}] method:[${req.method}] url:[${req.originalUrl}] status:[${statusCode}] speed:${duration}ms\x1b[0m`);
    });

    next();
}
