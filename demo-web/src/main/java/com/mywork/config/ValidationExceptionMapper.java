package com.mywork.config;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.ValidationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 * @Description:
 * @Author: yutaoxu
 * @Date: 2018/1/31
 * @Modified by:
 */
@Provider
public class ValidationExceptionMapper implements ExceptionMapper<ValidationException> {
    @Override
    public Response toResponse(ValidationException e) {
        final StringBuilder strBuilder = new StringBuilder();
        for (ConstraintViolation<?> cv : ((ConstraintViolationException) e).getConstraintViolations()) {
            strBuilder.append(cv.getPropertyPath().toString() + " " + cv.getMessage());
        }
        return Response
                .status(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode())
                .type(MediaType.APPLICATION_JSON_TYPE)
                .entity(strBuilder.toString())
                .build();
    }
}
