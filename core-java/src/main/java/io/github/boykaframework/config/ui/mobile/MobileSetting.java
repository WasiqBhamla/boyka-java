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

package io.github.boykaframework.config.ui.mobile;

import static io.github.boykaframework.utils.Validator.requireNonNullElse;

import io.github.boykaframework.config.ui.mobile.device.DeviceSetting;
import io.github.boykaframework.config.ui.mobile.server.ServerSetting;
import lombok.Data;

/**
 * Mobile settings.
 *
 * @author Wasiq Bhamla
 * @since 06-Sept-2022
 */
@Data
public class MobileSetting {
    private static final CommonMobileSetting MOBILE_SETTING = new CommonMobileSetting ();

    private DeviceSetting device = new DeviceSetting ();
    private ServerSetting server = new ServerSetting ();

    public DeviceSetting getDevice () {
        return requireNonNullElse (this.device, MOBILE_SETTING.getDevice ());
    }

    public ServerSetting getServer () {
        return requireNonNullElse (this.server, MOBILE_SETTING.getServer ());
    }
}
