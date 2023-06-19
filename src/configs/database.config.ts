import { registerAs } from '@nestjs/config';

export default registerAs(
    'database',
    (): Record<string, any> => ({
        host: 'mongodb://localhost:27017',
        name: 'nestBoiler',
        user: process.env?.DATABASE_USER,
        password: process?.env.DATABASE_PASSWORD,
        debug: process.env.DATABASE_DEBUG === 'true',
        options: {
            retryWrites: true,
            w: 'majority',
          },
    })
);
