/*
 * MIT License
 *
 * Copyright (c) 2024, Wasiq Bhamla
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

package io.github.boykaframework.builders;

import static io.github.boykaframework.utils.StringUtils.interpolate;

import java.util.Map;

import io.github.boykaframework.enums.ContentType;
import io.github.boykaframework.enums.RequestMethod;
import lombok.Builder;
import lombok.Getter;
import lombok.Singular;
import lombok.ToString;

/**
 * Request builder class.
 *
 * @author Wasiq Bhamla
 * @since 04-Mar-2022
 */
@ToString
@Getter
@Builder (toBuilder = true, builderMethodName = "createRequest", buildMethodName = "create")
public class ApiRequest {
    private String              body;
    private Object              bodyObject;
    private ContentType         contentType;
    @Singular
    private Map<String, String> formBodies;
    @Singular
    private Map<String, String> headers;
    private RequestMethod       method;
    private String              password;
    private String              path;
    @Singular
    private Map<String, String> pathParams;
    @Singular
    private Map<String, String> queryParams;
    private String              userName;

    /**
     * Gets the authentication password.
     *
     * @return password
     */
    public String getPassword () {
        return interpolate (this.password);
    }

    /**
     * Gets the authentication username
     *
     * @return user name.
     */
    public String getUserName () {
        return interpolate (this.userName);
    }
}
