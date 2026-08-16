export const successResponse = (res, statusCode = 200, message = "Success", data = {}) => {
  return res.status(statusCode).json({ success: true, message, data });
};

export const errorResponse = (res, statusCode = 400, message = "Error", error = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error ? (error.message || error) : null,
  });
};

export const catchError = (res, error, customMessage) => {
  console.error("Catch Error:", error);

  let statusCode = 500;
  let message = customMessage || "Internal Server Error";

  if (error.code === 11000) {
    statusCode = 409;
    const keys = Object.keys(error.keyPattern || {}).join(", ");
    message = `Duplicate field: ${keys}. Must be unique.`;
  }

  const responsePayload = {
    success: false,
    message,
  };

  if (process.env.NODE_ENV === "development") {
    responsePayload.error = error.message || error;
  }

  return res.status(statusCode).json(responsePayload);
};