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

package io.github.boykaframework.config.api;

import io.github.boykaframework.config.BoykaConfig;
import lombok.Data;

/**
 * API setting class.
 *
 * @author Wasiq Bhamla
 * @since 17-Feb-2022
 */
@Data
public class ApiSetting implements BoykaConfig {
    private String         basePath       = "";
    private String         baseUri;
    private LogSetting     logging        = new LogSetting ();
    private Integer        port           = 0;
    private String         schemaPath     = "";
    private TimeoutSetting timeout        = new TimeoutSetting ();
    private boolean        validateSsl    = true;
    private boolean        verifyHostName = true;
}
