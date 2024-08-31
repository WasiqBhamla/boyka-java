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

package io.github.boykaframework.config.ui.mobile.device;

import io.github.boykaframework.config.BoykaConfig;
import lombok.Data;

/**
 * iOS WebDriverAgent related settings.
 *
 * @author Wasiq Bhamla
 * @since 26-Jan-2023
 */
@Data
public class WDASetting implements BoykaConfig {
    private int     connectionTimeout    = 60;
    private int     launchTimeout        = 60;
    private int     localPort            = 8100;
    private String  signingId;
    private int     startupRetries       = 2;
    private int     startupRetryInterval = 10;
    private String  teamId;
    private String  updateBundleId;
    private boolean useNew               = true;
    private boolean usePrebuilt          = false;
}
