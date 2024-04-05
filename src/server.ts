import fastify from 'fastify';

import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUI from "@fastify/swagger-ui"

import { serializerCompiler,validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { createEvent } from './utils/routes/create-event';
import { registerForEvent } from './utils/routes/register-for-event';
import { getEvent } from './utils/routes/get-event';
import { getAttendeeBadge } from './utils/routes/get-attendee-badge';
import { checkIn } from './utils/routes/check-in';
import { getEventAttendees } from './utils/routes/get-event-attendees';
import { errorHandler } from './error-handler';
import fastifyCors from '@fastify/cors';

 
const app = fastify();

app.register(fastifyCors, {
    origin: '*',
})

app.register(fastifySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass.in',
            description: 'Especificações da API para o back-end da aplicação pass.in contruída durante a NLW Unite da Rocketseat',
            version: '1.0.0'
        }
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
    routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);

app.setErrorHandler(errorHandler);


app.listen({port: 3333, host: '0.0.0.0'}).then(() => {
    console.log('HTTP server runing')
});


