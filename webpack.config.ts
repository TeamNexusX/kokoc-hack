import * as path from 'path';
import { BuildEnv } from './config/build/config/types';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildWebpackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src'),
            dist: path.resolve(__dirname, 'dist'),
            html: path.resolve(__dirname, 'public/index.html'),
            src: path.resolve(__dirname, 'src'),
            locales: path.resolve(__dirname, 'public/locales'),
            buildLocales: path.resolve(__dirname, 'dist/locales'),
            imagesFrom: path.resolve(__dirname, 'src/shared/assets/images'),
            imagesTo: path.resolve(__dirname, 'dist/assets/images'),
        },
        isDev,
        port,
        apiUrl,
    });
};
