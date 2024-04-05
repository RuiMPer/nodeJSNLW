import {
  getEvent
} from "./chunk-6E6OCVP6.mjs";
import {
  registerForEvent
} from "./chunk-CZ5X6ZSH.mjs";
import {
  errorHandler
} from "./chunk-T52VTMIA.mjs";
import {
  checkIn
} from "./chunk-5W4PO6VE.mjs";
import {
  createEvent
} from "./chunk-FBKPVNKA.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-53R4O6YS.mjs";
import "./chunk-4Y2SBWIZ.mjs";
import {
  getEventAttendees
} from "./chunk-PMW7VCGV.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in contru\xEDda durante a NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server runing");
});
