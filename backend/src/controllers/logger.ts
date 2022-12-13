import { createLogger, transports, format } from "winston";

//  -------logging function ----

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "api.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),

    new transports.File({
      filename: "error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

export default logger;
