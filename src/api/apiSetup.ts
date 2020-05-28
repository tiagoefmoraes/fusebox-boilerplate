import { Express, Router, Request, Response } from "express";
import { addFunction } from './services/add';

export function apiSetup(app: Express) {

    const apiRouter = Router();
    app.use('/api', apiRouter)

    apiRouter.get('/add', addFunction);

    app.get('/', (req: Request, res: Response) => {
        res.status(200)
            .set('Content-Type', 'text/html')
            .end(htmlMessage('✅ Server API running', { showSampleAddUrl: true }));
    });
    app.get('*', (req: Request, res: Response) => {
        res.status(200)
            .set('Content-Type', 'text/html')
            .end(htmlMessage("❌ " + req.url + " is not a valid service url."));
    });
}

var tagsToEscape: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

function escapeTags(str: string): string {
    return str.replace(/[&<>]/g, (tag: string) => tagsToEscape[tag] || tag);
}

function htmlMessage(message: string, options: any = {}) {
    let result = ['<html>',
        '<body style="font-family: Verdana, Geneva, Tahoma, sans-serif;">',
        '<h1 style="font-size:large">API Server</h1>',
        '<p>',
        escapeTags(message),
        '</p>',
        '<p>Try <a href="http://localhost:3006/api/add?a=1&b=2">http://localhost:3006/api/add?a=1&b=2</a></p>'];
    result.push('</body></html>');
    return result.join('\n');
}

