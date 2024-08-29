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

import static io.appium.java_client.ios.IOSStartScreenRecordingOptions.VideoQuality.MEDIUM;

import io.appium.java_client.ios.IOSStartScreenRecordingOptions.VideoQuality;
import io.github.boykaframework.config.BoykaConfig;
import lombok.Data;

/**
 * iOS specific video recording settings.
 *
 * @author Wasiq Bhamla
 * @since 16-Oct-2023
 */
@Data
public class IOSVideoSetting implements BoykaConfig {
    private String       codec   = "mpeg4";
    private Integer      fps     = 0;
    private VideoQuality quality = MEDIUM;
}
